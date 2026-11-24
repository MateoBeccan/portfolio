# Mateo Beccan · Portfolio profesional

Portfolio bilingüe de Mateo Beccan, Software Developer en Rosario, Argentina, con foco en backend, Java, Spring Boot y SQL. La portada presenta seis casos de estudio mediante un carrusel y un índice de acceso directo. Las secciones de tecnologías y metodología enlazan los conocimientos aplicados con ejemplos de esos casos.

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

- **Proyectos.** Agregá un objeto en `src/data/projects.ts` con un slug único, categoría, tecnologías y textos ES/EN. El orden define el carrusel, el índice y la navegación al siguiente caso. El contador se calcula desde la misma colección. `featured` identifica el proyecto principal, `shortTitle` abrevia su nombre en el selector y `backendFocus` destaca los casos alineados con el perfil Java. Escribí entre dos y cuatro evidencias breves y comprobables en `technicalHighlights`. Usá `features` para distinguir implementación, diseño y desarrollo. Cargá `repositoryUrl` y `demoUrl` solo con enlaces públicos comprobados.
- **Tecnologías.** Editá `src/data/skills.ts` para cambiar el foco o las categorías. Los vínculos a proyectos se derivan de su stack y distinguen la evidencia aplicada de los conocimientos complementarios. La portada agrupa las versiones de Java en una especialización y asocia SQL con los motores relacionales documentados. Para nombres localizados, usá `localized(es, en)`.
- **Formación y credenciales.** Editá `src/data/education.ts`. Guardá el documento público en `public/certificates/`, por ejemplo `public/certificates/amazon-junior-software-developer.pdf` o `public/certificates/ingles-b1.webp`, y asigná la ruta sin `public` a `document`. Se admiten PDF, PNG, JPG, JPEG y WebP. `verificationUrl` acepta un enlace HTTPS que hayas comprobado en la entidad emisora. `credentialId` es opcional.
- **Estado académico.** La portada y su indicador toman el período y el estado de `src/data/education.ts`. El período 2024–2026 se muestra como `completed` (Finalizado). Reservá `degreeAwarded` para el otorgamiento formal del título.
- **Capturas.** Usá imágenes reales en `public/projects/<proyecto>/` y agregalas a `screenshots` con dimensiones, títulos, descripciones y texto alternativo en ambos idiomas. La primera imagen se usa como portada y para las previsualizaciones sociales, salvo que el proyecto declare `coverImage`. Aplicá máscaras opacas a los datos privados antes de exportar a `public` y guardá los originales en `portfolio-assets-private/`, que está excluido de Git y Vercel.
- **Contacto.** El correo y los enlaces sociales se editan en `src/data/profile.ts`.
- **Traducciones.** Actualizá ambos objetos en `src/i18n/dictionary.ts`. Los textos específicos de proyectos, formación y habilidades viven junto con sus datos.

## Currículum descargable

Creá `public/cv/` y agregá solo las versiones aprobadas para el portfolio.

| Idioma | Archivo |
| --- | --- |
| Español | `public/cv/Mateo_Beccan_CV_ES.pdf` |
| Inglés | `public/cv/Mateo_Beccan_CV_EN.pdf` |

Para reemplazar una versión, conservá su nombre. Para sumar la versión ES o EN que falte, agregá el archivo con el nombre de la tabla. Si usás otro nombre de origen, editá `profile.cv` en `src/data/profile.ts` y conservá el nombre de descarga profesional. La ruta se configura desde `/cv/` y admite nombres sin espacios ni acentos. Volvé a compilar para que la portada estática recoja los cambios.

El servidor verifica que el archivo exista dentro de `public/cv/`, sea un archivo regular, tenga extensión `.pdf` y contenga una cabecera y un cierre PDF coherentes. Navbar y Hero descargan la versión del idioma activo o, si falta, la única disponible con su idioma indicado. Contacto lista cada versión disponible, con el idioma activo primero, y ofrece apertura en una pestaña nueva y descarga. Si faltan ambas versiones válidas, las acciones y la tarjeta quedan ocultas.

Todo archivo dentro de `public/` tiene una URL pública. Antes de copiar el PDF, abrilo en un visor y verificá el idioma, el contenido y los datos personales. Mantené los originales privados y las versiones anteriores fuera de `public/`.

## Desplegar en Vercel

Importá el repositorio existente como proyecto Next.js, con la raíz del repositorio como directorio de trabajo. Usá Node.js 24.x, conservá `package-lock.json` y ejecutá `npm run build` desde la raíz. Dejá que Vercel detecte la salida de Next.js. Probá un Preview antes de promoverlo. Si cambia el dominio, configurá `NEXT_PUBLIC_SITE_URL` con el origen canónico HTTPS del portfolio. El valor predeterminado corresponde al despliegue original. Los originales privados y los artefactos de auditoría están excluidos de Git y de las cargas locales a Vercel.

Consultá el [informe V2.5](PORTFOLIO_V2_5_REPORT.md) para ver las decisiones, pruebas y capturas de esta actualización. El [informe V2.4](PORTFOLIO_V2_4_REPORT.md) documenta el carrusel y los estudios de Concesionaria y Hogwarts Library.
