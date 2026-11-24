# Portfolio V2.5.1

## Refinamiento visual y editorial

| Área | Problema observado en V2.5 | Cambio en V2.5.1 |
| --- | --- | --- |
| Proyectos | El carrusel, su selector por nombre y la grilla de casos repetían el recorrido por los seis proyectos. | `ProjectShowcase` integra el selector de `ProjectIndex` en el carrusel. Los botones muestran títulos cortos y cuatro capturas reales o dos iconos. El borde y el símbolo de selección identifican el caso activo. El desplegable «Casos de estudio» ofrece los seis enlaces directos. |
| Presentación activa | Los destacados técnicos se leían en la grilla inferior. | La tarjeta activa muestra dos o tres destacados de los datos de V2.5 junto con el estado, el resumen y la tecnología principal. Mantiene la acción «Explorar proyecto» y muestra GitHub y demo cuando están disponibles. |
| Stack | Cada tecnología principal listaba proyectos y los grupos secundarios tenían varios desplegables de evidencia. | Java, Spring Boot y SQL conservan icono, área y descripción. Cinco grupos reúnen tecnologías aplicadas en proyectos o en el portfolio. Un grupo de etiquetas reúne los conocimientos complementarios. El registro de tecnologías por proyecto y sus reglas de asociación siguen en los datos. |
| Metodología | Las cinco etapas repetían ejemplos y enlaces de los casos. | Cada etapa conserva número, icono, título y una descripción. La evidencia se puede consultar en los casos. La revisión del trabajo asistido por IA se explica en una nota breve. |
| Jerarquía | Algunos títulos secundarios rivalizaban con el Hero y las transiciones entre secciones dejaban demasiado espacio. | Se redujeron la escala de títulos secundarios, el espaciado de sección y los resplandores de proyectos. El Hero conserva su composición y escala. |

En escritorio, el selector usa seis columnas y el proyecto activo conserva la captura a la izquierda. A partir del ancho móvil, el selector usa dos filas de tres y la captura se apila sobre el texto. Los rótulos siguen visibles a 320 px. El escenario reserva la altura del caso más largo para que los controles permanezcan en el mismo lugar durante los cambios de proyecto.

### Altura en capturas equivalentes

Valores en píxeles, medidos en las capturas ES con tema oscuro.

| Vista | Escritorio 1440 px, V2.5 → V2.5.1 | Móvil 390 px, V2.5 → V2.5.1 |
| --- | ---: | ---: |
| Proyectos | 1486 → 1033 | 2156 → 1271 |
| Stack tecnológico | 1105 → 860 | 2015 → 1386 |
| Metodología | 743 → 497 | 1203 → 757 |
| Portada completa | 6877 → 5759 | 10209 → 8151 |

### Capturas

| Vista | V2.5 | V2.5.1 |
| --- | --- | --- |
| Proyectos en escritorio | [Antes](build/portfolio-v251/before/es-dark-1440-projects.jpg) | [Después](build/portfolio-v251/after/es-dark-1440-projects.jpg) |
| Proyectos en móvil | [Antes](build/portfolio-v251/before/es-dark-390-projects.jpg) | [Después](build/portfolio-v251/after/es-dark-390-projects.jpg) |
| Stack tecnológico | [Escritorio](build/portfolio-v251/before/es-dark-1440-skills.jpg) · [móvil](build/portfolio-v251/before/es-dark-390-skills.jpg) | [Escritorio](build/portfolio-v251/after/es-dark-1440-skills.jpg) · [móvil](build/portfolio-v251/after/es-dark-390-skills.jpg) |
| Metodología | [Escritorio](build/portfolio-v251/before/es-dark-1440-methodology.jpg) · [móvil](build/portfolio-v251/before/es-dark-390-methodology.jpg) | [Escritorio](build/portfolio-v251/after/es-dark-1440-methodology.jpg) · [móvil](build/portfolio-v251/after/es-dark-390-methodology.jpg) |
| Hogwarts Library móvil | [ES oscuro](build/portfolio-v251/before/es-hogwarts-412.jpg) · [EN claro](build/portfolio-v251/before/en-hogwarts-412.jpg) | [ES oscuro](build/portfolio-v251/after/es-hogwarts-412.jpg) · [EN claro](build/portfolio-v251/after/en-hogwarts-412.jpg) |
| Portada completa | [Escritorio](build/portfolio-v251/before/es-dark-1440-full.jpg) · [móvil](build/portfolio-v251/before/es-dark-390-full.jpg) | [Escritorio](build/portfolio-v251/after/es-dark-1440-full.jpg) · [móvil](build/portfolio-v251/after/es-dark-390-full.jpg) |
| Portada completa, EN claro | [Escritorio](build/portfolio-v251/before/en-light-1440-full.jpg) · [móvil](build/portfolio-v251/before/en-light-390-full.jpg) | [Escritorio](build/portfolio-v251/after/en-light-1440-full.jpg) · [móvil](build/portfolio-v251/after/en-light-390-full.jpg) |

También se revisaron [Concesionaria a 320 px](build/portfolio-v251/after/en-light-320-dealership.jpg) y [Hogwarts Library en escritorio](build/portfolio-v251/after/es-hogwarts-desktop.jpg). La carpeta local `build/portfolio-v251/` contiene las capturas por sección en ES y EN, en ambos temas. Git y Vercel excluyen `build/`.

## Investigación del CLS de Hogwarts Library

Lighthouse reprodujo el CLS histórico de 0,159 en la versión de referencia y señaló la posición de `.case-cover` durante la carga de fuentes. El análisis de Chromium a 412 px retrasó 700 ms la carga de Geist Sans, Geist Mono y las imágenes en pruebas separadas, con caché desactivada. Las imágenes del encabezado ya declaraban sus dimensiones. La galería y sus miniaturas ya reservaban espacio con proporciones CSS.

En español, retrasar Geist Sans movió la fila de tecnologías y la portada 26,4 px al cambiar el ajuste de líneas del resumen. El CLS de esa prueba fue 0,0141. Al retrasar Geist Mono o las imágenes por separado, la prueba registró 0. En inglés, las variantes registraron 0. La prueba aislada identifica un mecanismo y usa condiciones distintas de Lighthouse.

El encabezado coloca la captura después del título y antes de la descripción y las etiquetas en móvil. Así, las líneas variables del texto quedan debajo de la imagen. En escritorio, título y descripción comparten una columna con la imagen a su derecha. Se conservan las fuentes Geist y sus ajustes de `next/font`, incluida la fuente de respaldo ajustada para Geist Sans y `font-display: swap`.

Con Geist Sans retrasada en el build final, la portada mantuvo su posición en español y el CLS fue 0,0057. El desplazamiento residual ocurrió en las etiquetas y acciones, debajo de la imagen. En carga local normal, ambos idiomas registraron 0 en esta prueba. [Datos de referencia](build/portfolio-v251/before/hogwarts-cls.json) · [datos finales](build/portfolio-v251/after/hogwarts-cls.json)

## Lighthouse

Lighthouse 13.6.0 y Chromium 159 sobre builds de producción locales de V2.5 y V2.5.1, con los mismos perfiles de auditoría. Las cifras de portada móvil son medianas de tres corridas. Escritorio y Hogwarts Library tienen una corrida representativa por versión.

| Ruta y perfil | V2.5, rendimiento / LCP / TBT / CLS | V2.5.1, rendimiento / LCP / TBT / CLS |
| --- | --- | --- |
| Portada ES, móvil | 98 / 1114 ms / 152 ms / 0,0002 | 93 / 934 ms / 305 ms / 0,0002 |
| Portada ES, escritorio | 100 / 322 ms / 22 ms / 0,0001 | 100 / 314 ms / 9 ms / 0,0001 |
| Hogwarts Library ES, móvil | 87 / 2837 ms / 164 ms / 0,1590 | 94 / 2581 ms / 183 ms / 0,0663 |

El caso móvil cumple el objetivo de CLS ≤ 0,1. La auditoría final atribuyó el desplazamiento residual a la fila de tecnologías. Las cinco corridas finales obtuvieron 100 en accesibilidad, buenas prácticas y SEO.

En la primera corrida de portada móvil, el documento pasó de 28.781 a 25.340 bytes transferidos, el CSS de 9.774 a 9.556 y los scripts de 165.436 a 165.093. Las imágenes pasaron de 23.298 a 27.727 bytes. Las cuatro miniaturas se cargan de forma diferida mediante `next/image`, con variantes de hasta 256 px. Solo el proyecto activo solicita su captura en el tamaño de presentación.

Las puntuaciones de portada móvil fueron 98, 90 y 98 en V2.5 y 94, 93 y 89 en V2.5.1. El LCP mediano bajó 180 ms y el TBT mediano subió 154 ms en esta muestra. [Resultados de referencia](build/portfolio-v251/before/lighthouse-summary.json) · [resultados finales](build/portfolio-v251/after/lighthouse-summary.json)

Una repetición con el mismo build final obtuvo 80, 97 y 97 en portada móvil. En esa serie, las medianas fueron 97 de rendimiento, 1163 ms de LCP y 200 ms de TBT. La corrida de 80 registró 855 ms de TBT. Escritorio volvió a obtener 100 y Hogwarts Library registró el mismo CLS de 0,0663. [Resultados de la repetición](build/portfolio-v251/after-repeat/lighthouse-summary.json)

## Validación funcional y accesibilidad

| Prueba | Resultado |
| --- | --- |
| Compilación y análisis estático | `npm run build`, `npm run lint` y `npx tsc --noEmit` correctos. Next.js generó 24 páginas estáticas. |
| Responsive | Portada verificada a 320, 360, 390, 768, 1024, 1136, 1280, 1440 y 1920 px en ES/EN y claro/oscuro. Los 216 estados del carrusel caben en el viewport, mantienen la altura entre proyectos y tienen miniaturas de al menos 44 px de alto. |
| Carrusel | Selección de los seis casos, actualización de captura, destacados y contador, navegación circular, flechas, teclado, gesto táctil y movimiento reducido. El foco sigue a la miniatura al usar las flechas del teclado y se mantiene en el botón anterior o siguiente al activarlo. |
| Enlaces y SEO | Se comprobaron los seis enlaces directos por idioma, la navegación desde «Explorar proyecto» y las doce rutas con canonical, hreflang, Open Graph y datos estructurados. Sitemap con 14 URLs y robots con enlace al sitemap. |
| Navegación y accesibilidad | Enlace de salto, menú móvil, indicador de foco, cambio de idioma con fragmento, persistencia de idioma y tema. Axe-core registró cero incidencias en cuatro vistas de portada y dos casos auditados. El árbol de accesibilidad de Chromium expone los seis nombres y el contador como región de actualización cortés. |
| Galerías y consola | Las cuatro galerías se probaron en ambos idiomas con navegación circular, visor, teclado, Escape y retorno de foco. Las pruebas registraron cero errores de consola. |
| CV | Ambos PDF se abrieron en una nueva pestaña y las descargas coincidieron byte a byte con los archivos locales. |

[Resultados de Chromium y axe-core](build/portfolio-v251/after/browser.json) · [matriz y galerías](build/portfolio-v251/after/matrix-and-galleries.json) · [pruebas de CV, foco y altura](build/portfolio-v251/after/extended-browser.json)

## Limitaciones

Las métricas son de laboratorio en Windows con emulación de Chromium. El TBT varió entre corridas. La validación de accesibilidad cubrió foco, teclado, estados accesibles, movimiento reducido y axe-core. Queda pendiente una sesión con lector de pantalla y mediciones de campo.

## Archivos modificados en V2.5.1

| Archivo | Responsabilidad |
| --- | --- |
| `src/components/sections/Projects.tsx` | Entrega al carrusel los destacados técnicos en el idioma activo. |
| `src/components/sections/ProjectIndex.tsx` | Retirado tras integrar la navegación visual y los enlaces directos. |
| `src/components/ui/ProjectShowcase.tsx` y `ProjectCard.tsx` | Selector visual, controles, manejo del foco, enlaces y destacados del caso activo. `ProjectReference` se reutiliza para los enlaces. |
| `src/components/sections/Skills.tsx` y `src/data/skills.ts` | Presentación del stack y reglas de asociación con proyectos. |
| `src/components/sections/Methodology.tsx` y `src/i18n/dictionary.ts` | Metodología breve y textos del selector y stack en ES/EN. |
| `src/app/globals.css` | Tipografía, espaciados, composición del carrusel y ajustes responsive. |
| `src/app/[lang]/projects/[slug]/page.tsx` | Orden visual del encabezado de caso para estabilizar la portada en móvil. |
| `PORTFOLIO_V2_5_1_REPORT.md` | Cambios, capturas, métricas y validaciones. |
