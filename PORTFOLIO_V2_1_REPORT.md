# Portfolio V2.1

## Identidad profesional y alcance

El portfolio presenta a Mateo Beccan como **Software Developer**, con foco en **Backend Development · Java · Spring Boot · SQL**. La portada en español e inglés reúne proyectos, canales de contacto y disponibilidad laboral en Rosario, Santa Fe. Sobre mí incorpora aplicaciones empresariales, diseño de bases de datos e ingeniería de software. El rol también se refleja en el pie, los títulos SEO, Open Graph, Twitter/X y los datos estructurados `Person`.

La versión preparada para publicar muestra **Tecnicatura en Desarrollo de Software · Instituto Superior Brigadier López · 2024–2026 · Finalizado / Completed**. El estado central admite cierre de cursada, estudios finalizados y título otorgado. La finalización necesita confirmación antes de publicar. Se mantienen las seis credenciales y las comprobaciones de los documentos que habilitan descargas.

## Identidad gráfica y diseño

- El monograma real de `public/images/logo.png` aparece en la navbar y el pie, en una superficie azul marino que conserva el contraste del blanco y el cian en ambos temas. La tarjeta social de 1200 × 630 incorpora una variante del mismo monograma.
- Se generaron un ICO con tamaños 16, 32 y 48 px, tres PNG de esos tamaños y un Apple Touch Icon de 180 px. Se recortó el margen transparente de los derivados, se centró el monograma sobre una base oscura y se mantuvieron la proporción y los colores originales. Los iconos se declaran mediante la convención de archivos del App Router.
- La portada alterna un hero de dos columnas con una composición de código, Sobre mí en formato editorial, una tarjeta de lavandería con captura protagonista, categorías de tecnologías con iconos y un recorrido de cinco pasos que pasa a vertical en móvil. Los casos con capturas tienen una portada en dos columnas cuando hay espacio. Formación tiene un tratamiento propio y contacto usa un panel con iluminación gradual.
- Se conservan Geist y Geist Mono, en formato WOFF2 variable y con carga local mediante `next/font/local`. La escala de encabezados, los márgenes y la separación de secciones se ajustan al ancho mediante `clamp()`. Las transiciones de interacción respetan la preferencia de movimiento reducido.
- Cuatro marcas tecnológicas se empaquetaron en un SVG local compartido para evitar enviar sus trazados en el HTML inicial y en los datos de React. El HTML prerenderizado de la portada ES pasó de 31,6 a 20,5 KB al comprimirlo con gzip. Los trazados provienen de Font Awesome y Simple Icons a través de la dependencia existente `react-icons`.

| Token | Oscuro | Claro |
| --- | --- | --- |
| Fondo | `#080B16` | `#F6F8FE` |
| Superficie | `#10172A` | `#FFFFFF` |
| Superficie elevada | `#18233B` | `#E9EFFF` |
| Acción principal | `#54DCFA` | `#403CC5` |
| Acento de texto | `#7BE4FF` | `#234EAA` |
| Acento secundario | `#BDB1FF` | `#603AC1` |
| Texto | `#F8FAFF` | `#121C34` |
| Texto secundario | `#ABB8D0` | `#465570` |
| Borde | `#364563` | `#B2BFDB` |
| Indicador de disponibilidad | `#44D99E` | `#168054` |

## Mira que te lavo

Se reemplazó el contenido de lavandería por el **Sistema integral de gestión de lavandería**, una aplicación web de gestión empresarial desarrollada con **GeneXus**. La categoría, la portada, la metadata y el estudio de caso corresponden al mismo sistema. La navegación desde la tarjeta abre el caso, y el CTA del caso lleva a las funcionalidades. Las URLs antiguas siguen redirigiendo y el ancla histórica `#architecture` lleva al enfoque de desarrollo con GeneXus.

| Evidencia revisada | Alcance respaldado |
| --- | --- |
| Panel principal | Accesos operativos y accesos a clientes, servicios, proveedores, insumos, compras, pagos, usuarios y reportes. La navegación por sí sola acredita la presencia del acceso. |
| Alta de pedido | Búsqueda y selección de cliente, fecha de entrega, líneas de prendas y servicios, cantidades y sección de cobro. |
| Pedidos pendientes y registro de cobro | Listado de pendientes, saldo por pedido y formulario asociado al pedido. |
| Consulta de caja | Vista de caja con acciones de apertura y cierre. |
| Menú de reportes y vista de reporte | Accesos a historiales de pedidos, movimientos de caja y compras. Existe una vista de reporte de movimientos. |

**Imágenes públicas**

| Recurso | Dimensiones | Uso |
| --- | --- | --- |
| `panel.webp` | 1400 × 1069 | Portada destacada y galería |
| `pedido.webp` | 1400 × 1171 | Nueva copia WebP del formulario, con el dato de cliente y los importes ocultos mediante máscaras opacas |
| `reportes.webp` | 1400 × 670 | Galería de historiales |

La galería añade títulos, textos alternativos y descripciones en ambos idiomas. Las miniaturas seleccionan una vista y el diálogo permite ampliarla, recorrer la galería con flechas y cerrar con Escape. Los originales se mantienen en `portfolio-assets-private/`, con exclusiones de Git y Vercel.

La identificación de GeneXus proviene del encargo y las capturas documentan la interfaz y los flujos visibles. La Knowledge Base y el código fuente de esta implementación no estaban disponibles. Quedan sin verificar WorkWithPlus en este sistema, la versión de GeneXus, la base de datos, el generador, los tipos de objetos internos, las validaciones automáticas, los permisos y la contribución individual específica. La formación en WorkWithPlus sigue en el apartado de credenciales. El caso carece de repositorio público y demo pública verificada.

## Archivos y componentes

| Archivos | Cambios |
| --- | --- |
| `src/app/globals.css` | Paleta, escalas de tipografía, superficies, hero, tarjetas, proceso, formularios de navegación, casos, galería y responsive |
| `src/app/favicon.ico`, `src/app/icon1.png`, `src/app/icon2.png`, `src/app/icon3.png`, `src/app/apple-icon.png` | Derivados del monograma |
| `public/icon.svg`, `src/app/[lang]/layout.tsx` | Retiro del icono anterior y de su declaración manual |
| `src/app/[lang]/page.tsx`, `src/lib/seo.ts`, `src/app/social-card.png/route.tsx` | Identidad profesional, datos estructurados y tarjeta social |
| `src/app/[lang]/projects/[slug]/page.tsx`, `src/types/project.ts` | Portadas visuales, subtítulos, enfoque de desarrollo, secciones opcionales y navegación entre casos |
| `src/components/layout/{Navbar,Footer}.tsx`, `src/components/ui/BrandMark.tsx` | Componente de marca compartido, navegación compacta y pie |
| `src/components/sections/{Hero,About,Education,Skills,Methodology}.tsx` | Perfil, capacidades, estado académico, stack y proceso de desarrollo |
| `src/components/ui/{ProjectCard,ProjectCarousel,SkillBadge,SocialActions}.tsx` | Tarjetas, galería, etiquetas con iconografía y prioridad de contacto por correo |
| `src/data/{profile,education,projects,skills}.ts`, `src/i18n/dictionary.ts` | Datos y textos bilingües del perfil, formación, tecnologías y caso GeneXus |
| `public/projects/lavanderia/pedido.webp`, `public/images/technology-marks.svg`, `README.md` | Captura anonimizada, marcas tecnológicas y notas de mantenimiento |

## Comprobaciones locales

- `npm run build`, `npm run lint` y `npx tsc --noEmit` terminaron con código 0. Next.js 16.4.6 generó las dos portadas localizadas y los diez casos de estudio con Webpack. La primera ejecución en el sandbox de Windows falló con `EPERM` al crear carpetas de prerenderizado en `.next`. La compilación y las pruebas de loopback se ejecutaron con permisos ampliados, usando la configuración de producción existente.
- Se repitieron las 13 comprobaciones de formatos, rutas de CV y certificados y URLs de verificación. Las carpetas de documentos públicos carecen de CV y certificados habilitados. Los enlaces se activan cuando se aporta y configura un archivo válido.
- El hash de `public/images/logo.png` coincide con el original del repositorio. Se comprobaron las dimensiones de los cuatro PNG y las tres entradas del ICO. El logo y los tres WebP de lavandería carecen de metadatos EXIF, XMP e IPTC. Las exclusiones de recursos privados se conservaron tal como estaban en V2.0.
- **Responsive.** 168 combinaciones de 12 rutas, dos temas y siete anchos de 320 a 1920 px, con cero desbordamientos o solapamientos detectados. Se revisaron capturas de escritorio y móvil, en especial las acciones del hero, la jerarquía entre tarjetas, los títulos de caso y la galería.
- **Navegación y HTTP.** 48 comprobaciones y cero fallos. Incluyen rutas anteriores, 404 localizados, canonical, hreflang, sitemap, robots, Open Graph, Twitter/X, iconos, idioma, tema, foco del menú y navegación de galería. Se comprobó por toque la apertura y el cierre del menú y el diálogo, y que las nueve capturas originales de lavandería devuelven 404. Chrome registró cero errores de aplicación.
- **Accesibilidad.** Axe-core 4.13.0 detectó cero infracciones en 33 estados. Dejó el contraste sin dictamen en 26 estados por fondos con gradientes o pseudo-elementos. La comprobación complementaria de colores de texto secundarios, incluyendo el límite de opacidad de la cuadrícula, dio mínimos de 6,44:1 en oscuro y 5,13:1 en claro. Las superficies y los estados interactivos también se revisaron de forma visual.
- **Comparación con V2.0.** Se repitieron las 168 configuraciones responsive y se amplió la cobertura de 38 a 48 comprobaciones de navegación y HTTP, y de 32 a 33 estados de axe-core. La revisión añade las variantes de iconos, el contenido del caso GeneXus y su galería.

### Lighthouse

Ocho mediciones de Lighthouse 13.6.0 sobre el build final servido con `next start`. **Accesibilidad, buenas prácticas y SEO dieron 100 en las ocho.**

| Ruta | Rendimiento móvil | Rendimiento escritorio | LCP móvil | LCP escritorio |
| --- | ---: | ---: | ---: | ---: |
| Portada ES | 92 | 100 | 1,18 s | 0,34 s |
| Portada EN | 98 | 100 | 1,07 s | 0,33 s |
| Mira que te lavo ES | 99 | 100 | 1,75 s | 0,60 s |
| JobMatch AI EN | 97 | 100 | 1,89 s | 0,59 s |

V2.0 obtuvo 96–100 en rendimiento. La compilación V2.1 quedó en 92–100. La portada ES móvil registró 355 ms de TBT y obtuvo 92 frente a 96 en V2.0. Durante la iteración, esa portada había obtenido 87 antes de extraer las marcas tecnológicas del HTML. El índice de CPU de las corridas finales de V2.1 varió entre 1.380 y 2.769, frente a 2.371–2.730 en V2.0. Los tiempos reflejan mediciones locales de laboratorio. El CLS del conjunto final estuvo entre 0 y 0,046.

[Resultados Lighthouse](build/portfolio-audit/v21/lighthouse-summary.json) · [Matriz y validaciones de navegador](build/portfolio-audit/v21/browser-results.json) · [Interacciones táctiles](build/portfolio-audit/v21/interactions.json)

## Capturas de control

Capturas de Chrome generadas sobre el build local. Los archivos están en `build/portfolio-audit/v21/`, una carpeta excluida de Git y Vercel.

| Vista | Capturas |
| --- | --- |
| Hero | [Escritorio oscuro](build/portfolio-audit/v21/hero-desktop-dark.jpg) · [Escritorio claro](build/portfolio-audit/v21/hero-desktop-light.jpg) · [Móvil oscuro](build/portfolio-audit/v21/hero-movil-dark.jpg) · [Móvil claro](build/portfolio-audit/v21/hero-movil-light.jpg) |
| Portada completa | [ES oscuro](build/portfolio-audit/v21/1440-dark-es.jpg) · [EN claro](build/portfolio-audit/v21/1440-light-en.jpg) · [EN claro a 320 px](build/portfolio-audit/v21/320-light-en.jpg) |
| Proyectos | [Oscuro](build/portfolio-audit/v21/proyectos-dark.jpg) · [Claro](build/portfolio-audit/v21/proyectos-light.jpg) |
| Mira que te lavo | [Caso ES](build/portfolio-audit/v21/1440-dark-es-projects-mira-que-te-lavo.jpg) · [Caso móvil EN](build/portfolio-audit/v21/320-light-en-projects-mira-que-te-lavo.jpg) · [Galería ampliada](build/portfolio-audit/v21/lavanderia-galeria.jpg) |
| Menú móvil | [Oscuro](build/portfolio-audit/v21/mobile-menu-dark.jpg) · [Claro](build/portfolio-audit/v21/mobile-menu-light.jpg) |
| Formación | [Oscuro](build/portfolio-audit/v21/formacion-dark.jpg) · [Claro](build/portfolio-audit/v21/formacion-light.jpg) |
| Tecnologías | [Oscuro](build/portfolio-audit/v21/tecnologias-dark.jpg) · [Claro](build/portfolio-audit/v21/tecnologias-light.jpg) |

## Confirmaciones para publicar

- Confirmar la finalización de la cursada. El otorgamiento formal del título tiene su propio estado.
- Los CV y comprobantes de credenciales se pueden incorporar cuando estén disponibles. Para ampliar el caso con la contribución individual y detalles internos de GeneXus hace falta evidencia adicional.

Entrega local en el repositorio. Mensaje de commit sugerido

```text
feat(portfolio): refresh branding, professional profile and GeneXus project with premium UI
```
