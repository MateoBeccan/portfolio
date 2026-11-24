# Portfolio V2.5 · Identidad profesional y experiencia de selección

## Resumen ejecutivo y objetivos

La portada presenta a Mateo Beccan como Software Developer con foco en backend, Java, Spring Boot y SQL. El recorrido permite identificar qué tipo de software desarrolla, abrir cualquiera de los seis casos y consultar los dos CV desde el mismo sitio. La actualización conserva la identidad visual de V2.4 y el orden de las secciones.

## Análisis inicial

La rama era `main`, el árbol estaba limpio y el último commit era `1ee0e37`. Se auditó el App Router, los componentes de portada y de caso, los diccionarios, el CSS, la configuración de documentos públicos y el informe V2.4. En la portada, el primer proyecto dominaba el recorrido y, en móvil, el selector mostraba números con nombres disponibles para tecnologías de asistencia. El stack listaba conocimientos sin mostrar los casos donde se usaban. La auditoría de escritorio reprodujo el aviso sobre el nombre accesible del selector de idioma.

Se conservaron los tokens semánticos, las fuentes locales, el monograma, la navbar, el orden de las diapositivas y la arquitectura de Server Components. La revisión se hizo sobre dos builds locales de producción, uno de referencia y otro con los cambios.

## Hero y propuesta de valor

La descripción indica qué se desarrolla y qué se traduce al código. En español menciona aplicaciones empresariales, APIs REST y sistemas de gestión, y explica que las reglas de negocio y los requisitos se convierten en software seguro y mantenible. El texto inglés expresa lo mismo con redacción propia.

La acción principal lleva a Proyectos. El CV conserva prioridad secundaria y Contacto usa un enlace con menos peso visual. La franja bajo el contenido cuenta los proyectos desde `projects`, lee el año en `education` y enumera los locales configurados. En móvil queda antes del panel TypeScript. La disponibilidad usa un indicador estático.

## Sobre mí

Tres bloques presentan la formación finalizada, la experiencia en proyectos y el objetivo profesional. Cuatro capacidades enlazan evidencia concreta. CityFix respalda backend y permisos, Mira que te lavo respalda flujos de gestión, Hogwarts Library respalda datos concurrentes y Concesionaria respalda validación de reglas comerciales.

## Descubrimiento y evidencia de proyectos

El carrusel V2.4 conserva sus interacciones. «Todos los proyectos» agrega enlaces HTML a las rutas localizadas, posición, categoría, stack breve y una miniatura real o un icono. Las tarjetas marcan Concesionaria, Hogwarts Library y CityFix como ejemplos de backend Java. Mira que te lavo mantiene el primer lugar y el sello de proyecto principal.

| Proyecto | Evidencia en el índice | Fuente principal |
| --- | --- | --- |
| Mira que te lavo | Flujo de pedidos, control de cobros y caja | Caso existente y capturas publicables de pedido, panel y reportes |
| Concesionaria | Vencimiento de reservas, pagos en distintas monedas, validación de saldo | Informe V2.4, servicios de reserva, pago, conversión y confirmación |
| Hogwarts Library | Bloqueos pesimistas, alquileres y pagos parciales, migraciones Liquibase | Informe V2.4, repositorios JPA, servicios y changelogs |
| CityFix | Autorización por rol y propiedad, historial de reclamos | `ClaimController` y `ClaimService` |
| JobMatch AI | Validación de evidencias, puntuación explicable | Caso existente, `AnalysisServiceTest` y `AnalysisExplainabilityServiceTest` |
| ConectaRos | Prototipado en equipo, autenticación y persistencia con Supabase | Caso existente, README, dependencias y arquitectura documentada |

## Stack tecnológico

Java, Spring Boot y SQL tienen área de aplicación, descripción y enlaces a casos. Las categorías agrupan backend, bases de datos, frontend, herramientas, pruebas y conocimientos complementarios. Un desplegable nativo muestra los proyectos por tecnología y se puede abrir con teclado. Se derivan los vínculos desde los datos de cada proyecto. SQL agrupa los motores relacionales documentados, Java agrupa las versiones y Vercel, Next.js y otras tecnologías de este portfolio señalan la propia portada como evidencia de aplicación.

## Metodología

Las cinco etapas incluyen un ejemplo y un enlace. El análisis sigue el flujo comercial de Concesionaria, el diseño y la validación se ilustran con Hogwarts Library, y la implementación y la documentación se ilustran con los permisos y el contrato REST de CityFix. El texto explica que el apoyo de IA se verifica mediante lectura de código, pruebas y validación funcional.

## Formación y certificaciones

La Tecnicatura se muestra como finalizada con el período 2024–2026 y seis áreas de formación. La presentación mantiene la diferencia entre finalizar la formación y el otorgamiento formal del título. Las seis credenciales conservan nombres, instituciones y años configurados. Se separó el emisor del año y la categoría. La configuración ya permite mostrar identificador, documento público y enlace HTTPS verificable cuando estén disponibles.

## Contacto y CV

Contacto pone el correo como acción principal y presenta ubicación, disponibilidad e interés en posiciones remotas. El correo también está visible y se puede seleccionar. Se comparó el correo de `profile.ts` con el texto extraído de ambos PDFs autorizados y coincide. El CV se integra en la misma composición, con prioridad para el idioma actual y controles de apertura y descarga por versión.

## Accesibilidad y SEO

El nombre accesible de cada enlace de idioma comienza por el código visible en escritorio. Se conservaron las rutas, los fragmentos, la cookie y el selector móvil. Los enlaces de evidencia funcionan con teclado y tienen foco visible. Los ejemplos, índices y listas usan estructura semántica, y las miniaturas decorativas ceden el nombre del enlace al título del caso.

Se actualizó el título y la descripción localizada de la portada y el nombre de `WebSite`. Se revisaron canonical, hreflang, Open Graph, Twitter Cards, sitemap, robots, `Person`, `WebSite`, `CreativeWork` y las imágenes sociales. El dominio canónico y las rutas conservan la configuración previa.

## Rendimiento y decisiones de implementación

El carrusel recibe solo los textos que necesita para el idioma activo. La portada renderiza el índice, las referencias y los desplegables semánticos en el servidor. Las miniaturas usan `next/image` con ancho fijo, variantes por densidad y carga diferida. Se mantienen las capturas y la visualización principal de cada galería.

La línea base atribuyó el LCP de la portada móvil al texto del Hero. Lighthouse midió tareas largas de estilos y ejecución de scripts. En una corrida móvil de referencia, el trabajo de estilos y layout llegó a 1230 ms y la evaluación de scripts a 830 ms. En Hogwarts Library, la herramienta atribuyó un desplazamiento a fuentes web. Se probó `font-display: optional` durante la iteración y se volvió a `swap` al observar que la fuente de respaldo alteraba la tipografía editorial en frío.

## Archivos y componentes

| Área | Archivos |
| --- | --- |
| Portada, SEO y estilos | `src/app/[lang]/page.tsx`, `src/app/globals.css` |
| Caso localizado | `src/app/[lang]/projects/[slug]/page.tsx` |
| Secciones refactorizadas | `Hero.tsx`, `About.tsx`, `Projects.tsx`, `Skills.tsx`, `Methodology.tsx`, `Education.tsx`, `Contact.tsx` en `src/components/sections/` |
| Componentes nuevos | `src/components/sections/ProjectIndex.tsx`, `src/components/ui/ProjectReference.tsx` |
| Componentes reutilizados y ajustados | `Navbar.tsx`, `ProjectShowcase.tsx`, `ProjectCard.tsx`, `SocialActions.tsx` |
| Datos y traducciones | `src/data/projects.ts`, `src/data/skills.ts`, `src/data/education.ts`, `src/types/project.ts`, `src/i18n/dictionary.ts` |
| Documentación | `README.md`, este informe |

## Fuentes consultadas

- Brief V2.5, configuración pública del portfolio, las seis páginas de caso y [el informe V2.4](PORTFOLIO_V2_4_REPORT.md).
- Código o documentación de los proyectos enlazados para Concesionaria, Hogwarts Library, CityFix, JobMatch AI y ConectaRos. Para Mira que te lavo se usaron el estudio existente y sus capturas reales.
- Guías locales de Next.js 16.4.6 sobre Server y Client Components, metadata, imágenes y fuentes.
- Texto de los dos CV públicos, usado para verificar únicamente el correo.

## Validaciones técnicas y visuales

| Prueba | Resultado |
| --- | --- |
| `npm run build` | Correcto. Next.js generó 24 páginas estáticas durante la compilación, incluidas las doce rutas localizadas de casos. |
| `npm run lint` y `npx tsc --noEmit` | Correctos. |
| Portada responsive | 36 combinaciones de ancho, idioma y tema. Anchos de 320, 360, 390, 768, 1024, 1136, 1280, 1440 y 1920 px. Cero desbordamientos horizontales. |
| Navegación | Menú móvil y Escape, sección activa, cambio de idioma con fragmento, persistencia de idioma y tema, enlace de salto, acceso directo a los casos y regreso a la sección de Tecnologías. |
| Carrusel | Seis selecciones directas, progreso, navegación por flechas, gesto horizontal y ausencia de animación con movimiento reducido. Los seis slides conservaron altura en ambos idiomas y los nueve anchos. |
| Estudios de caso | Doce rutas comprobadas en Chromium con canonical, hreflang, imagen social y `CreativeWork`. La galería de Hogwarts Library abrió el visor, cambió de imagen con el teclado y devolvió el foco al cerrar con Escape. |
| Stack y contacto | Desplegables de evidencia operables por teclado, enlaces localizados, correo `mailto:` y seis credenciales renderizadas. |
| Currículum | Ambos PDFs respondieron con tipo PDF, se abrieron en pestañas nuevas y sus descargas coincidieron byte a byte con los originales. |
| Consola y axe-core | Cero errores de consola en las pruebas. Cero incidencias en las cuatro combinaciones de portada auditadas y el caso EN auditado. |
| Indexación | 14 URLs en el sitemap, una por cada portada y cada caso localizado, y referencia al sitemap en `robots.txt`. |

[Resultados de Chromium y axe-core](build/portfolio-v25/after/browser.json) · [pruebas de CV, foco y alturas](build/portfolio-v25/after/extended-browser.json)

## Capturas

Se generaron capturas equivalentes antes y después de cada una de las ocho secciones, del primer viewport con navbar y de la portada completa. Los archivos cubren ES/EN, claro/oscuro, escritorio a 1440 px y móvil a 390 px. Se revisaron las diferencias de espaciado, legibilidad, composición y tamaño de los controles. El último ajuste dio más aire al título principal y usó el nombre corto de Concesionaria en el índice y los enlaces de evidencia.

| Vista | V2.4 | V2.5 |
| --- | --- | --- |
| Escritorio, ES oscuro | [Hero](build/portfolio-v25/before/es-dark-1440-viewport.jpg) · [portada](build/portfolio-v25/before/es-dark-1440-full.jpg) | [Hero](build/portfolio-v25/after/es-dark-1440-viewport.jpg) · [portada](build/portfolio-v25/after/es-dark-1440-full.jpg) |
| Móvil, EN claro | [Hero](build/portfolio-v25/before/en-light-390-viewport.jpg) · [portada](build/portfolio-v25/before/en-light-390-full.jpg) | [Hero](build/portfolio-v25/after/en-light-390-viewport.jpg) · [portada](build/portfolio-v25/after/en-light-390-full.jpg) |
| Móvil, ES oscuro | [Resumen visual](build/portfolio-v25/before/overview-390.jpg) | [Resumen visual](build/portfolio-v25/after/overview-390.jpg) |
| Escritorio, EN claro | [Portada](build/portfolio-v25/before/en-light-1440-full.jpg) | [Portada](build/portfolio-v25/after/en-light-1440-full.jpg) |

Capturas V2.5 por sección en escritorio. [Sobre mí](build/portfolio-v25/after/es-dark-1440-about.jpg) · [proyectos](build/portfolio-v25/after/es-dark-1440-projects.jpg) · [tecnologías](build/portfolio-v25/after/es-dark-1440-skills.jpg) · [metodología](build/portfolio-v25/after/es-dark-1440-methodology.jpg) · [formación](build/portfolio-v25/after/es-dark-1440-education.jpg) · [certificaciones](build/portfolio-v25/after/es-dark-1440-certifications.jpg) · [contacto](build/portfolio-v25/after/es-dark-1440-contact.jpg)

Scripts de prueba, capturas, resultados y copias temporales de descarga quedan excluidos de Git y Vercel bajo `build/portfolio-v25/`.

## Lighthouse y comparación antes y después

Lighthouse 13.6.0 con Chromium 159 sobre builds de producción locales, en Windows y con los presets estándar móvil y escritorio. Se ejecutaron tres mediciones móviles de portada y una medición representativa para escritorio y para el caso de Hogwarts Library.

| Ruta y perfil | V2.4 rendimiento / LCP / TBT / CLS | V2.5 rendimiento / LCP / TBT / CLS |
| --- | --- | --- |
| Inicio ES, móvil, medianas | 77 / 1278 ms / 1045 ms / 0,000 | 98 / 1110 ms / 143 ms / 0,000 |
| Inicio ES, escritorio | 100 / 290 ms / 15 ms / 0,000 | 100 / 284 ms / 27 ms / 0,000 |
| Hogwarts Library ES, móvil | 78 / 2732 ms / 468 ms / 0,160 | 84 / 2869 ms / 232 ms / 0,159 |

Las tres puntuaciones móviles de portada pasaron de 70, 82 y 77 a 98, 97 y 98. Accesibilidad, buenas prácticas y SEO obtuvieron 100 en las cinco mediciones finales. El aviso de nombre accesible desapareció tras corregir el selector de idioma y limitar cada enlace del índice a su título visible. La tarjeta conserva toda su superficie clicable.

En la primera corrida móvil de cada versión, la transferencia de scripts bajó de 168.198 a 165.436 bytes. Las fuentes mantuvieron 60.456 bytes. El CSS pasó de 8932 a 9774 bytes, el documento de 24.030 a 28.780 y el DOM de 797 a 1182 elementos. Las imágenes pasaron de 13.573 a 23.298 bytes, con unos 9,7 kB de tres miniaturas de baja resolución. El incremento refleja el nuevo índice y las referencias. La imagen principal del carrusel y las miniaturas se sirven a resoluciones distintas según su uso. Las cajas de miniaturas reservan espacio antes de cargar.

[Datos de referencia](build/portfolio-v25/before/lighthouse-summary.json) · [datos finales](build/portfolio-v25/after/lighthouse-summary.json)

## Limitaciones y propuestas para V2.6

Las mediciones reflejan Chromium local con emulación de Lighthouse. El tiempo de bloqueo mostró variación entre corridas y los resultados no equivalen a métricas de campo. En Hogwarts Library móvil, la puntuación subió de 78 a 84, aunque el LCP de la corrida final fue mayor y persistió el CLS de 0,159 asociado a la carga de fuentes. Conviene reproducir y medir ese desplazamiento con una traza específica, y luego contrastar el cambio en un dispositivo móvil real.

Para una próxima versión, se pueden incorporar enlaces de verificación cuando las entidades emitan referencias públicas y mejorar la evidencia visual de CityFix y ConectaRos con capturas reales y revisadas. Las credenciales disponibles se presentan con los datos confirmados en la configuración actual.

## Entrega local

Cambios implementados en el árbol de trabajo de `main`.

Mensaje de commit sugerido en el brief:

```text
feat(portfolio): enhance professional identity, project discovery and recruiter experience
```
