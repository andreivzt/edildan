# Site Web Edildanconstruct SRL

Site static modern, responsive, în limba română, pregătit pentru publicare rapidă pe orice tip de găzduire (Netlify, Vercel, GitHub Pages, cPanel/Apache).

## Cum deschideți site-ul pe calculator (pe pagina principală Home)
Acesta este un site static HTML/CSS/JS (nu necesită Node.js sau comandă de tip „Run” din editor):
- Faceți dublu-click pe **`index.html`** sau pe **`deschide-site.bat`** pentru a deschide site-ul direct pe pagina principală (Acasă) în browser.

## Structura fișierelor
- `index.html` – Pagina principală (Hero cu buton WhatsApp, Despre noi, Servicii, Carusel proiecte, De ce să ne alegeți, Secțiune rapidă WhatsApp, Footer)
- `despre-noi.html` – Povestea firmei, valori, misiune și echipă
- `servicii.html` – Lista detaliată a serviciilor cu butoane directe WhatsApp
- `proiecte.html` – Galerie de proiecte cu filtrare pe categorii și lightbox
- `contact.html` – Date de contact, butoane directe WhatsApp/Telefon și spațiu pentru Google Maps
- `assets/css/styles.css` – Stiluri responsive și paletă cromatică
- `assets/js/main.js` – Meniu mobil, carusel proiecte, filtrare galerie și lightbox
- `robots.txt` și `sitemap.xml` – Configurare SEO de bază

## Lista elementelor `[PLACEHOLDER]` de completat
Căutați `[PLACEHOLDER` în fișierele HTML pentru a înlocui cu datele reale ale firmei:
1. **Logo**: Înlocuiți SVG-ul din `<header>` cu logo-ul oficial al firmei.
2. **Date de contact**: Email (`contact@edildanconstruct.ro`), adresă, program de lucru (numărul de telefon & WhatsApp `0770 141 977` este deja configurat).
3. **Date juridice**: CUI și Nr. Registrul Comerțului în footer și pe pagina `contact.html`.
4. **Imagini reale**: Înlocuiți imaginile din `assets/images/` cu fotografii reale de șantier, echipă și proiecte finalizate.
5. **Servicii și echipă**: Personalizați lista exactă de servicii și membrii echipei.
6. **Google Maps**: Adăugați codul `<iframe>` din Google Maps în `contact.html`.
7. **Linkuri sociale și domeniu SEO**: Actualizați linkurile Facebook/LinkedIn și domeniul din `robots.txt` și `sitemap.xml`.
