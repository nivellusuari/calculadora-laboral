# Calculadora laboral · Descompte per vaga

### 👉 [OBRIR LA CALCULADORA](https://nivellusuari.github.io/calculadora-laboral/)

Web gratuïta, de codi font obert i en valencià per a estimar el descompte salarial per secundar una vaga a Espanya.

## Format del salari
Admet el format habitual valencià: `1.234` són **1.234 euros**, i `1.234,56` són **1.234 euros i 56 cèntims**. També accepta `1234`, `1234,56` i `1234.56`.

## Funcions
- Introduir salari **brut** o **net** mensual i nombre de pagues (12–16).
- En modalitat bruta, introduir IRPF i cotització del treballador a la Seguretat Social per a estimar l'impacte net.
- Introduir jornades i hores de vaga, hores per jornada i dies treballats per setmana.
- Desglossament de salari ordinari, descans setmanal i pagues extraordinàries.
- Tot es calcula localment: sense servidor, cookies, analítica, registres, emmagatzematge o enviament de dades del formulari.

## Publicar amb GitHub Pages
1. Puja `index.html`, `styles.css` i `script.js` a l'arrel de la branca `main`.
2. En el repositori: **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)**.
3. Visita `https://nivellusuari.github.io/calculadora-laboral/` quan GitHub Pages indique que s'ha publicat.

## Metodologia, límits i advertiments

**És una estimació, no una nòmina ni assessorament jurídic.** Per al sou brut mensual de referència, s'estima un dia com a `sou/30`. Per a un treball de `d` dies setmanals, s'estima la part proporcional del descans com `(7-d)/d` jornades per jornada de vaga. La part proporcional de les pagues extraordinàries es calcula, si hi ha més de 12 pagues, com `(pagues-12)*sou/365` per jornada; s'assumix que les pagues extres equivalen al salari ordinari. La duració parcial és `dies + hores/hores_per_jornada`. Estes convencions simplifiquen casos que poden dependre del conveni, del calendari i del desglossament de la nòmina. No s'aplica descompte de vacances. En casos de torns, jornades irregulars, pagues extres de quantia distinta, complements no meritats o còmput anual, el resultat pot diferir significativament.

Si s'introduïx el salari net, el resultat és **net** i no es presenta com a brut. Quan s'introduïx el brut, el net s'estima com `descompte_brut * (1 - IRPF - cotització)`; és una simplificació, no una simulació de nòmina ni un recàlcul fiscal. Les pagues extres es poden ajustar en el moment de cobrar-se, no necessàriament en el mes de la vaga.

Fonts: [RDL 17/1977, art. 6](https://www.boe.es/buscar/act.php?id=BOE-A-1977-6061) i [AN, sentència 39/2022](https://www.iberley.es/jurisprudencia/sentencia-social-n-39-2022-an-sala-social-sec-1-rec-31-2022-14-03-2022-48411143).

## Privacitat
Els càlculs s'executen al navegador. Els fitxers no carreguen biblioteques, fonts ni scripts externs. No hi ha cookies ni `localStorage`. L'allotjador web pot tractar dades tècniques de connexió, com qualsevol web servida per Internet.

## Desenvolupament
Obri `index.html` en un navegador modern, o servix la carpeta amb `python3 -m http.server 8000`. Sense dependències ni procés de compilació.

Els percentatges d’IRPF i Seguretat Social accepten indistintament coma o punt decimal (`4,7` o `4.7`).
