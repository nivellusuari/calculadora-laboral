# Calculadora laboral · Nivell usuari

### 👉 [OBRIR LA CALCULADORA](https://nivellusuari.github.io/calculadora-laboral/)

Calculadora estàtica de **descompte per vaga** i **prestació per incapacitat temporal** per a Espanya. Disponible en **valencià, castellà, gallec i eusquera**. Sense dependències, cookies, analítica, dades guardades ni enviament de dades del formulari.

## Funcions

- Vaga: salari brut/net, 12–16 pagues, IRPF i cotització, jornades i hores de vaga i descans setmanal.
- Baixa: malaltia comuna/accident no laboral o contingència professional; base de cotització del mes anterior, duració i dia del procés; complement de conveni opcional configurable per percentatge i dia inicial; comparativa amb retribució habitual opcional.
- Formats: `1.234` = 1234; `1.234,56` = 1234,56; percentatges `4,7` i `4.7`.
- Idioma seleccionable, sense registrar les preferències.

## Límits importants

**Estimacions, no nòmines ni assessorament jurídic.** Per a incapacitat temporal comuna s'apliquen els trams generals 0% (dies 1–3), 60% (4–20) i 75% (des del 21). Per a contingències professionals s'aplica 75% des del dia següent al de la baixa. El dia de la baixa professional no s'inclou com a subsidi: la retribució salarial d'eixe dia es gestiona a banda. El divisor 30/28/29/31 s'ha de triar segons el cas; per a jornades parcials, fixes discontínues, bases variables, límits i altres supòsits especials cal revisar el càlcul. La prestació és **bruta**, abans de retencions i cotitzacions. El complement simulat fins a un percentatge de la base diària és només un model simplificat; no substituïx les regles del conveni.

La comparació amb retribució habitual és orientativa i utilitza la retribució mensual introduïda dividida pel mateix divisor; no incorpora nòmina completa, complements variables, cotitzacions ni tributació. Per a vaga s'utilitza una aproximació amb salari mensual/30, descans proporcional i pagues extraordinàries separades; el resultat pot variar per conveni, complements i calendari.

Fonts: [Seguretat Social: incapacitat temporal](https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10952/28362) · [RDL 17/1977](https://www.boe.es/buscar/act.php?id=BOE-A-1977-6061).

## Instal·lació i publicació

Puja `index.html`, `styles.css` i `script.js` a la branca `main` del repositori. Activa **Settings → Pages → Deploy from a branch → main / (root)**. També pots obrir `index.html` directament en un navegador. No necessita servidor de càlcul ni procés de compilació.

## Privacitat

Tot el càlcul s'executa localment en JavaScript, sense `localStorage`, cookies ni peticions a APIs. GitHub Pages pot tractar registres tècnics de connexió.
