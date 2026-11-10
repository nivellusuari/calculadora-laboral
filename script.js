'use strict';
const $ = id => document.getElementById(id);
const euro = value => new Intl.NumberFormat('ca-ES', {style:'currency',currency:'EUR'}).format(value);
const form = $('calc');
const typeInputs = [...document.querySelectorAll('input[name="type"]')];
const type = () => typeInputs.find(el => el.checked).value;
function updateType(){ $('deductions').hidden = type() !== 'gross'; $('results').hidden = true; }
typeInputs.forEach(el => el.addEventListener('change',updateType));
function parseSalary(value){
 const raw = value.trim().replace(/\s/g, '');
 // Valencià: 1.234 = 1234; 1.234,56 = 1234.56; 1234,56 = 1234.56.
 // També accepta 1234.56 com a decimal sense separador de milers.
 if (/^\d{1,3}(?:\.\d{3})+(?:,\d{1,2})?$/.test(raw)) return Number(raw.replace(/\./g, '').replace(',', '.'));
 if (/^\d+(?:,\d{1,2})?$/.test(raw)) return Number(raw.replace(',', '.'));
 if (/^\d+\.\d{1,2}$/.test(raw)) return Number(raw);
 return NaN;
}
function getNumber(id){ const element = $(id); if(element.value.trim()==='') return NaN; return ['salary','irpf','ss'].includes(id) ? parseSalary(element.value) : Number(element.value); }
function estimate({salary,payments,irpf,ss,days,hours,dayhours,workdays,isNet}){
 const rate = isNet ? 0 : (irpf + ss)/100;
 const grossMonthly = isNet ? null : salary;
 const annualGross = isNet ? null : grossMonthly*payments;
 const ordinaryDailyGross = isNet ? null : grossMonthly/30;
 const ordinaryDailyNet = isNet ? salary/30 : ordinaryDailyGross*(1-rate);
 const restFactor = (7-workdays)/workdays;
 const units = days + hours/dayhours;
 // Extra payments are assumed equal to the ordinary gross monthly pay.
 // The daily accrual is based on an illustrative 365-day year.
 const extraDailyGross = isNet ? null : (payments-12)*grossMonthly/365;
 const extraDailyNet = isNet ? salary*(payments-12)/365 : extraDailyGross*(1-rate);
 const ordinary = (isNet ? ordinaryDailyNet : ordinaryDailyGross)*units;
 const rest = ordinary*restFactor;
 const extra = (isNet ? extraDailyNet : extraDailyGross)*units;
 return {ordinary,rest,extra,total:ordinary+rest+extra, annualGross,net:isNet ? null:(ordinary+rest+extra)*(1-rate)};
}
form.addEventListener('submit',event=>{
 event.preventDefault(); $('error').hidden=true;
 const vals = {salary:getNumber('salary'),payments:getNumber('payments'),irpf:getNumber('irpf'),ss:getNumber('ss'),days:getNumber('days'),hours:getNumber('hours'),dayhours:getNumber('dayhours'),workdays:getNumber('workdays'),isNet:type()==='net'};
 if(!Number.isFinite(vals.salary)||vals.salary<=0||!Number.isFinite(vals.days)||vals.days<0||!Number.isInteger(vals.days)||!Number.isFinite(vals.hours)||vals.hours<0||!Number.isFinite(vals.dayhours)||vals.dayhours<=0||vals.hours>=vals.dayhours||vals.days+vals.hours/vals.dayhours<=0||!Number.isFinite(vals.irpf)||!Number.isFinite(vals.ss)||vals.irpf<0||vals.irpf>60||vals.ss<0||vals.ss>30||vals.irpf+vals.ss>=100){$('error').textContent='Revisa les dades: salari positiu, almenys una hora o jornada de vaga, hores addicionals inferiors a una jornada i percentatges vàlids.';$('error').hidden=false;return;}
 const r=estimate(vals);
 $('gross-result').textContent=euro(r.total);
 $('ordinary').textContent=euro(r.ordinary);
 $('rest').textContent=euro(r.rest);
 $('extra').textContent=euro(r.extra);
 $('annual').textContent=vals.isNet?'No disponible amb salari net':euro(r.annualGross);
 $('net-intro').hidden=vals.isNet;
 $('net-result').textContent=vals.isNet?'':euro(r.net);
 $('result-note').textContent=vals.isNet?'Has introduït un salari net: tots els imports mostrats són estimacions NETES, no brutes. Sense les dades de la nòmina no es pot reconstruir un descompte brut fiable.': 'Has introduït un salari brut: el total principal és BRUT i l’impacte net és una aproximació que aplica els percentatges indicats de manera lineal. Les reduccions reals d’IRPF i de cotització poden diferir.';
 $('gross-result').previousElementSibling.textContent=vals.isNet?'Descompte net aproximat':'Descompte brut estimat';
 $('results').hidden=false;
 $('results').scrollIntoView({behavior:'smooth',block:'start'});
});
form.addEventListener('reset',()=>{requestAnimationFrame(()=>{updateType();$('error').hidden=true;});});
updateType();
