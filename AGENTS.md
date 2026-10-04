# DadaFlor (theme y entorno local) — Guía del proyecto

> Reglas operativas de ESTE proyecto para cualquier agente. Estándares comunes: perfil común
> de wp-standards; prevalece este archivo. `README.md` está vacío: no hay otra documentación.

## Ubicación y build

- Raíz del repo git: la raíz del proyecto Local (`/Users/jau-mac/Local Sites/dadaflor/`),
  remoto `github.com/jaubass/dadaflor`, rama `main`. El theme vive en
  `app/public/wp-content/themes/DadaFlor/`; el código fuente del build (`src/`, `gulpfile.js`,
  `package.json`) **sí está versionado** en la misma raíz.
- Build con Gulp + Sass (`gulpfile.js`), desde la raíz: `npx gulp` ejecuta la tarea por
  defecto (imágenes, WebP, CSS y JS, y se queda observando cambios: no termina). Tareas sueltas:
  `npx gulp css` · `scripts` · `imagenes` · `versionWebp` · `dev` · `watchScss` · `watchJs`.
  `package.json` (nombre `boilerplate-wp24`) no define scripts de build.
- Salida compilada (no editar a mano), en el theme: `assets/css/` (de `src/scss/main.scss`),
  `assets/js/scripts.min.js` (de `src/js/scripts.js`) y `assets/img/` (de `src/img/**`, con
  versiones WebP).

## Arquitectura del theme (resumen)

Theme versión 2.1.3 (`Requires PHP: 8.3`, text domain `DadaFlor`). Tiene plantillas por idioma
duplicadas (sufijos `-es` y `-en` junto a las que no llevan sufijo: `header-es.php`,
`page-home-en.php`, `page-contact-es.php`…) y un catálogo gettext en `languages/`
(`DadaFlor.pot`, `DadaFlor-es_ES.po/.mo`). Polylang está instalado en el sitio (`wp-content/plugins/polylang`), pero no se versiona.

## Git y publicación

- Solo existe la rama `main` (sin `dev`) y no hay tags. Push, tag y merge solo con orden expresa.
- Deuda conocida: el repo versiona unos 3.000 archivos que no son del proyecto: el núcleo de
  WordPress (`app/public/wp-admin/` y `wp-includes/`, unos 2.400 archivos) y los plugins de
  terceros `advanced-custom-fields` (498) y `disable-gutenberg` (20). El árbol de trabajo lleva
  más de mil cambios sin confirmar: 723 en el núcleo de WordPress, 301 en ACF, 51 en el
  theme y 32 en `src/`.
