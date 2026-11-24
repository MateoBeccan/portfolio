# Mateo Beccan · Portfolio profesional

Portfolio bilingüe de Mateo Beccan, Software Developer en Rosario, Argentina, con foco en backend, Java, Spring Boot y SQL. Presenta cinco casos de estudio, entre ellos Mira que te lavo, un sistema de gestión empresarial desarrollado con GeneXus.

## Ejecutar localmente

Requisitos: Node.js 20.9 o superior y npm. La actualización se verificó con Node.js 24.

```bash
npm ci
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor de desarrollo de Next.js |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Chequeo de tipos |
| `npm run build` | Compilación de producción |
| `npm start` | Servidor local para el build de producción |

Los scripts de desarrollo y compilación usan Webpack porque Turbopack falló al iniciar sus procesos de PostCSS en el entorno Windows probado.

## Arquitectura

Next.js App Router, React, TypeScript estricto, Tailwind CSS 4, CSS con tokens, Geist y Geist Mono mediante `next/font/local`. La versión fija de Next incluye los dos archivos de fuente; al actualizar Next, verificá su ubicación o apuntá el selector a copias locales con su licencia.

| Ruta | Contenido |
| --- | --- |
| `src/app/[lang]/` | Portada, casos, layout y páginas de error localizadas |
| `src/components/layout/` | Navegación, preferencia de tema e idioma y pie |
| `src/components/sections/` | Secciones de la portada |
| `src/components/ui/` | Tarjetas, diagramas, galería, etiquetas y acciones |
| `src/data/` | Perfil, tecnologías, formación, credenciales y casos |
| `src/i18n/` | Idiomas admitidos y textos compartidos |
| `src/lib/seo.ts` | URL base y metadata compartida |
| `public/projects/` | Capturas públicas revisadas |
| `public/images/logo.png` | Monograma oficial usado en la navegación y el pie |
| `src/app/favicon.ico`, `icon*.png` y `apple-icon.png` | Iconos derivados del monograma, con metadata generada por Next.js |

Las páginas usan Server Components. La navegación interactiva, el tema y la galería usan pequeñas islas de React en el cliente. Cada idioma tiene URL propia y atributo `lang` renderizado en el servidor. La selección de idioma guarda una cookie para visitas a `/`; el tema se conserva en el navegador. Las antiguas rutas `/projects/:slug` redirigen a sus casos actuales.

## Actualizar contenido

- **Proyectos.** Agregá un objeto en `src/data/projects.ts` con un slug único, categoría, stack y textos ES/EN. El orden del arreglo define la portada y la navegación al siguiente caso. `featured` da protagonismo al proyecto. La plantilla omite campos opcionales vacíos. Usá `features` para distinguir implementación, diseño y desarrollo. Cargá `repositoryUrl` y `demoUrl` solo con enlaces públicos comprobados.
- **Tecnologías.** Editá `src/data/skills.ts`. Cada categoría tiene un nivel de relevancia y un conjunto de tecnologías. Para un nombre que cambia según el idioma, usá `localized(es, en)`.
- **Formación y credenciales.** Editá `src/data/education.ts`. Guardá el documento público en `public/certificates/`, por ejemplo `public/certificates/amazon-junior-software-developer.pdf` o `public/certificates/ingles-b1.webp`, y asigná la ruta sin `public` a `document`. Se admiten PDF, PNG, JPG, JPEG y WebP. `verificationUrl` acepta un enlace HTTPS que hayas comprobado en la entidad emisora. `credentialId` es opcional.
- **Estado académico.** La versión preparada para publicar muestra 2024–2026 y `completed` (Finalizado). Confirmá la finalización antes de publicarla. Usá `closing` si la cursada sigue abierta y `degreeAwarded` cuando la institución haya otorgado formalmente el título.
- **Capturas.** Usá imágenes reales en `public/projects/<proyecto>/` y agregalas a `screenshots` con texto alternativo en ambos idiomas. Colocá primero la imagen de portada e indicá sus dimensiones. La galería admite títulos y descripciones traducidos. Ocultá nombres, documentos, credenciales y cifras privadas con máscaras opacas antes de exportar a `public`. Guardá originales privados fuera de esa carpeta y del control de versiones.
- **CV y contacto.** Guardá `public/cv/mateo-beccan-cv-es.pdf` y `public/cv/mateo-beccan-cv-en.pdf`, y asigná `/cv/mateo-beccan-cv-es.pdf` y `/cv/mateo-beccan-cv-en.pdf` a `profile.cv.es` y `profile.cv.en` en `src/data/profile.ts`. Cada descarga aparece en el idioma correspondiente cuando el archivo existe y su cabecera coincide con el formato. Usá nombres sin espacios ni acentos para CV y credenciales. El correo y los enlaces sociales también se editan en el perfil.
- **Traducciones.** Actualizá ambos objetos en `src/i18n/dictionary.ts`. Los textos específicos de proyectos, formación y habilidades viven junto con sus datos.

## Desplegar en Vercel

Importá el repositorio existente como proyecto Next.js, con la raíz del repositorio como directorio de trabajo. Usá Node.js 24.x, conservá `package-lock.json` y ejecutá `npm run build` desde la raíz. Dejá que Vercel detecte la salida de Next.js. Probá un Preview antes de promoverlo. Si cambia el dominio, configurá `NEXT_PUBLIC_SITE_URL` con el origen canónico HTTPS del portfolio. El valor predeterminado corresponde al despliegue original. Los originales privados y los artefactos de auditoría están excluidos de Git y de las cargas locales a Vercel.

Consultá [PORTFOLIO_V2_1_REPORT.md](PORTFOLIO_V2_1_REPORT.md) para ver el rediseño y las comprobaciones de esta versión. Los informes [PORTFOLIO_FINAL_AUDIT.md](PORTFOLIO_FINAL_AUDIT.md) y [PORTFOLIO_UPDATE_REPORT.md](PORTFOLIO_UPDATE_REPORT.md) documentan la versión anterior.
