# Informe de actualización · Portfolio v2.0

## Resultado

El portfolio presenta a Mateo Beccan como Backend Java Developer. La portada abre con Java, Spring Boot, SQL y REST APIs, y enlaza a la arquitectura de Mira que te lavo. Los casos técnicos muestran el problema, el aporte individual y las decisiones respaldadas por el código o la documentación de cada proyecto.

La interfaz incorpora una navegación sticky con sección activa, un menú móvil operable con teclado, temas claro y oscuro, y casos con diagramas y galería ampliable. El contenido y la metadata se renderizan en español e inglés. Las rutas anteriormente compartidas siguen funcionando mediante redirecciones, incluida `/projects/sistema-lavanderia`.

## Proyectos y evidencia

| Proyecto | Qué presenta | Fuente |
| --- | --- | --- |
| Mira que te lavo | API por capas, roles JWT, catálogos, pedidos, compras, cobros y caja. La facturación electrónica se presenta como experimental. | [Repositorio público y documentación del backend](https://github.com/MateoBeccan/Lavanderia) |
| CityFix | Ciclo del reclamo, roles de ciudadano, operador y administrador, historial y contrato OpenAPI. | [Repositorio público y README](https://github.com/MateoBeccan/cityfix) |
| Sistema de Gestión de Concesionaria | Estados del inventario, seña configurable del 10 %, vencimiento predeterminado de 30 días, saldo, divisas y vehículos usados. | [Repositorio público](https://github.com/MateoBeccan/concesionaria) y código de servicios |
| JobMatch AI | Proyecto colaborativo con React y Spring Boot. Explica el uso de Gemini y la puntuación, y documenta el aporte de Mateo en validación, explicabilidad, calibración y pruebas. | [Repositorio e historial](https://github.com/MateoBeccan/jobmatch-ai) y [demo](https://jobmatch-ai-ten.vercel.app/) |
| ConectaRos | Prototipo de Shippear con autenticación, registro y seguimiento barrial. Comentarios, apoyos y beneficios se presentan como parte del diseño del MVP. | [Repositorio público y README](https://github.com/Dieguito678/ConectaRos) |

Los repositorios de lavandería, Concesionaria, JobMatch AI y ConectaRos se comprobaron en GitHub. CityFix se comprobó en su página y README públicos. La portada de la demo de JobMatch AI, el portfolio anterior y el perfil de GitHub respondieron HTTP 200. La consulta automatizada a LinkedIn recibió HTTP 999 y el enlace se conservó porque lo indicó Mateo y coincide con el publicado en GitHub. El correo coincide con el publicado por el autor en el README de CityFix. La prueba de la demo se limitó a su portada.

## Arquitectura y archivos

| Archivo o directorio | Cambio |
| --- | --- |
| `src/app/[lang]/` | Layout bilingüe, portada y plantilla reutilizable de casos con metadata y errores localizados |
| `src/components/layout/` | Navbar, idioma, tema, foco, enlaces anclados y footer |
| `src/components/sections/` | Hero, capacidades, proyectos, tecnologías, metodología, formación, credenciales y contacto |
| `src/components/ui/` | Tarjetas, enlaces de proyecto, etiquetas, diagrama y galería con diálogo nativo |
| `src/app/globals.css` | Tokens de color, tipografía, espacio, foco y reglas responsive |
| `src/data/`, `src/types/project.ts` y `src/i18n/` | Datos tipados, recursos opcionales y textos de los dos idiomas |
| `src/lib/seo.ts`, `src/app/sitemap.ts`, `src/app/robots.ts` y `src/app/social-card.png/` | Metadata compartida, canonical, hreflang, sitemap, robots y tarjeta social |
| `next.config.ts`, `package.json` | Compatibilidad de rutas y scripts de Next.js con Webpack |
| `README.md` | Instalación, configuración, mantenimiento editorial y despliegue |

Las páginas se sirven con HTML prerenderizado cuando tienen parámetros conocidos. Los componentes cliente se concentran en navegación, tema, galería y manejo de errores. La preferencia de tema se aplica antes del render visual y la de idioma se guarda para las visitas a la raíz. El perfil, la formación y el estado de cada funcionalidad se editan desde datos tipados. No se agregaron ni quitaron dependencias.

## Recursos y privacidad

- Se conservan las siete capturas de JobMatch AI y se publican dos vistas de lavandería en WebP, el panel y el menú de reportes. Los originales de lavandería se guardaron en `portfolio-assets-private/lavanderia/`, fuera de `public` y excluidos de Git. Algunas vistas originales incluyen identificadores personales o datos financieros.
- La formación y las seis credenciales se muestran con la información proporcionada por Mateo. Los nombres oficiales, tipo de credencial e institución de GeneXus WorkWithPlus requieren los documentos originales. Los campos para enlace, archivo e identificador se habilitan cuando se configuran.
- El repositorio no incluía PDFs del CV. Los botones se habilitan por idioma cuando se configura la ruta del documento en el perfil.
- El caso de ConectaRos documenta el equipo y el flujo trazable en su repositorio. Los aportes individuales más específicos pueden incorporarse cuando Mateo los indique.
- Se revisaron los archivos públicos y el código incorporado en busca de credenciales privadas, tokens y claves de formato reconocible. Se mantuvieron la URL de despliegue suministrada y los canales de contacto públicos.

## Capturas recomendadas

- **Mira que te lavo.** Alta de pedido con datos ficticios, transición de estado, apertura y cierre de caja con importes de prueba y listado de reportes.
- **CityFix.** Alta de reclamo, historial visto por un vecino, panel del operador y documentación Swagger.
- **Concesionaria.** Inventario por estado, validación de seña, resumen de una venta con pagos en distintas monedas y registro de usado como parte de pago.
- **JobMatch AI.** Resultado con requisitos críticos y evidencia expandida, carga de oferta desde imagen y resultado móvil con un CV de prueba.
- **ConectaRos.** Listado de barrio filtrado, alta de una incidencia de ejemplo y detalle de un reclamo con su historial.

Para las siguientes iteraciones, puede incorporarse un CV por idioma, los PDFs de las credenciales y capturas revisadas adicionales. El README explica cómo actualizar cada recurso.

## Validación local

| Comprobación | Resultado |
| --- | --- |
| `npm run build` | Compilación de producción correcta con Next.js 16.3.3 y Webpack. Se generaron las dos portadas y los diez casos, además de los endpoints de SEO. |
| `npm run lint` | ESLint sin errores. |
| `npx tsc --noEmit` | Chequeo de tipos correcto. |
| Chrome headless | 35 combinaciones de ruta y viewport, correspondientes a siete pantallas a 360, 390, 768, 1024 y 1440 px. Se comprobó un H1 por página, el idioma del documento y la ausencia de overflow horizontal. Se revisaron capturas de portada y caso técnico en escritorio y móvil. |
| Interacción | Menú móvil, Escape y devolución de foco, salto al contenido, sección activa, navegación desde un caso a la portada, preferencia ES/EN y tema persistente. La galería abrió, avanzó con flecha de teclado y cerró con Escape, devolviendo el foco. |
| axe-core 4.13.0 | Cero infracciones automatizadas en portada ES clara, portada EN oscura, caso de lavandería y diálogo de galería de JobMatch AI. |
| HTTP y SEO | Respuestas correctas en redirecciones anteriores y 404 localizados, metadata canónica por idioma, 12 URLs en sitemap, robots, favicon, imagen social y activo WebP. |
| Consola | Cero errores de ejecución y de hidratación observados durante la prueba automatizada. |

Turbopack falló al intentar iniciar un proceso de PostCSS en el entorno Windows. Se seleccionó Webpack en los comandos normales de desarrollo y build, y el build final pasó con las validaciones de Next y TypeScript activas. El portfolio carecía de un runner de pruebas propio. La auditoría con axe-core cubre los estados enumerados y no equivale a una certificación WCAG. No se obtuvieron puntuaciones de Lighthouse.

## Entrega

Cambios locales en el repositorio. La publicación en Vercel puede realizarse con los pasos del README cuando Mateo lo autorice.

Mensaje de commit sugerido:

```text
feat(portfolio): redesign bilingual backend developer portfolio
```
