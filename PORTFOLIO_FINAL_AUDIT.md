# Auditoría final de producción · Portfolio v2.0

**Veredicto local: listo para producción con observaciones.** La auditoría sobre el build de producción cubrió las rutas públicas, las interacciones, los recursos y el lockfile. Todavía falta comprobar el Preview de Vercel y abrir LinkedIn desde una sesión normal. Los CV y los documentos de certificación siguen siendo opcionales y su ausencia no genera enlaces rotos.

## Hallazgos y correcciones

| Gravedad | Hallazgo | Corrección |
| --- | --- | --- |
| Crítico | El lockfile anterior registraba un aviso crítico para Next.js 16.3.3 y dos dependencias de producción con avisos altos. | Se instaló Next.js 16.4.6 y se alineó `eslint-config-next` en la misma versión mayor. El lockfile incorpora las correcciones transitivas, entre ellas Sharp 0.35.5 y source-map-js 1.2.4. Se aplicó la actualización sin `--force`. |
| Alto | Los originales sensibles estaban ignorados por Git y fuera de `public/`. La configuración anterior carecía de una exclusión explícita para la subida desde una carpeta local. | Se agregó `.vercelignore` para originales, evidencias locales, archivos de entorno y metadatos del editor. |
| Medio | Un CV o certificado podía habilitar un enlace por el solo hecho de tener una ruta configurada. | La validación se hace del lado del servidor y exige una ruta local admitida, un archivo regular en la carpeta pública correspondiente y una cabecera compatible con su formato. Los enlaces de verificación admiten HTTPS. |
| Medio | El menú móvil abierto podía seguir superpuesto al contenido cuando el foco salía de sus enlaces. | El menú se cierra al perder el foco hacia un elemento externo. Una descarga futura del CV queda disponible en el menú móvil para evitar añadir otro control a la barra estrecha. |
| Bajo | En móvil, el separador de estado podía quedar huérfano en una segunda línea. En escritorio, la captura de JobMatch AI dejaba demasiado espacio vacío en la tarjeta vecina. | Estados y tipos se muestran como etiquetas completas. JobMatch AI tiene una miniatura lateral en escritorio y conserva la imagen apilada en anchos menores. |
| Bajo | Lighthouse registró peticiones anticipadas de rutas durante la carga inicial y desplazamientos asociados con las fuentes de portada. | Las anclas del hero usan navegación nativa, los enlaces auditados cargan los datos al navegar y Geist Mono se precarga junto con Geist. |
| Bajo | Los metadatos de imágenes sociales carecían de texto alternativo. El caso de lavandería daba por iniciado un módulo fiscal sin evidencia pública suficiente. | Se agregaron textos alternativos y las dimensiones de la tarjeta social. La facturación electrónica quedó documentada como integración experimental prevista. |
| Bajo | Las respuestas identificaban el framework y carecían de cabeceras explícitas contra el *framing* y la detección automática del tipo MIME. | Se agregó `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff` y `Referrer-Policy: strict-origin-when-cross-origin`. Se retiró `X-Powered-By`. |

El aviso crítico se trató como un hallazgo de dependencias. La auditoría comprobó versiones y remediación, sin intentar explotar los avisos. [Aviso oficial de GitHub](https://github.com/advisories/GHSA-vcvr-r3jv-pc5j)

## Archivos modificados en esta auditoría

- `package.json` y `package-lock.json` para las versiones corregidas.
- `next.config.ts` y `.vercelignore` para cabeceras y exclusiones.
- `src/lib/public-documents.ts`, el layout localizado, `Navbar.tsx`, `Education.tsx` y `SocialActions.tsx` para la publicación condicional de documentos.
- `src/app/globals.css`, `ProjectCard.tsx`, `Hero.tsx` y `Footer.tsx` para los ajustes visuales y de carga.
- `src/lib/seo.ts` y la página de casos para los metadatos de imágenes.
- `src/data/projects.ts` para precisar el estado del alcance fiscal.
- `README.md` y este informe para las instrucciones y la evidencia.

## Contenido, previsualización y accesibilidad

La revisión editorial cubrió ambas portadas y los cinco casos en español e inglés. Se conservaron el posicionamiento Backend Java Developer, la jerarquía de Mira que te lavo y la diferencia entre funcionalidades verificadas y alcance de diseño. El aporte de JobMatch AI se cotejó con su historial de cambios. En ConectaRos se mantuvo el rol de integrante del equipo que figura en el portfolio, sin atribuir responsabilidades individuales adicionales.

La comprobación visual recorrió las secciones de la portada, las tarjetas y las páginas completas de los proyectos. Se revisaron la lectura del hero, las llamadas a la acción, el espacio entre secciones, la barra sticky, la altura de las tarjetas, la legibilidad de los diagramas y las capturas sin deformar.

### Pruebas de navegador y accesibilidad

- **Responsive.** 168 combinaciones de 12 rutas, dos temas y los anchos 320, 360, 390, 768, 1024, 1440 y 1920 px. En la matriz final se detectaron 0 desbordamientos, solapamientos o elementos comprobados fuera del viewport.
- **Interacción y HTTP.** 38 comprobaciones, 0 fallos. Se verificaron el foco del menú móvil, Escape, salto al contenido, anclas bajo la barra sticky, persistencia del tema e idioma, fragmentos entre idiomas, atrás/adelante, recarga y galería operable por teclado.
- **axe-core 4.13.0.** 32 estados en las dos portadas, los diez casos localizados, 404, menú abierto y diálogo de galería, con 0 infracciones. Axe dejó dos comprobaciones de contraste sin dictamen porque el menú abierto cubre el hero. Con el menú cerrado, el hero pasó en ambos temas. La comprobación complementaria de los colores calculados en los enlaces del menú dio un mínimo de 8,11:1 en oscuro y 7,16:1 en claro. Este alcance no equivale a una certificación WCAG.
- **Consola de aplicación.** 0 errores de ejecución o hidratación observados.
- **Gestos y estados visuales.** Se verificaron el toque en menú, anclas, tema y galería, el hover del CTA, la carga de la imagen optimizada y el scroll instantáneo con movimiento reducido. Las nueve URLs de los originales de lavandería devolvieron 404.

## Lighthouse 13.6.0

Se ejecutó una pasada de cada combinación en Chrome headless sobre `next start` después de `npm run build`. Se utilizaron el perfil móvil por defecto y el preset de escritorio. Las cifras representan navegaciones simuladas de laboratorio y pueden variar en el dominio público.

| Página | Perfil | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
| --- | --- | ---: | ---: | ---: | ---: |
| Portada ES | Móvil | 96 | 100 | 100 | 100 |
| Portada ES | Escritorio | 100 | 100 | 100 | 100 |
| Portada EN | Móvil | 99 | 100 | 100 | 100 |
| Portada EN | Escritorio | 100 | 100 | 100 | 100 |
| Mira que te lavo (ES) | Móvil | 99 | 100 | 100 | 100 |
| Mira que te lavo (ES) | Escritorio | 100 | 100 | 100 | 100 |
| JobMatch AI (EN) | Móvil | 99 | 100 | 100 | 100 |
| JobMatch AI (EN) | Escritorio | 100 | 100 | 100 | 100 |

| Página | Perfil | FCP | LCP | Speed Index | TBT | CLS | Transferencia |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Portada ES | Móvil | 1,11 s | 1,11 s | 1,17 s | 208 ms | 0,052 | 269 KiB |
| Portada ES | Escritorio | 0,32 s | 0,32 s | 0,37 s | 1 ms | 0,000 | 257 KiB |
| Portada EN | Móvil | 1,03 s | 1,03 s | 1,04 s | 66 ms | 0,052 | 269 KiB |
| Portada EN | Escritorio | 0,28 s | 0,28 s | 0,35 s | 0 ms | 0,000 | 256 KiB |
| Mira que te lavo (ES) | Móvil | 0,81 s | 0,81 s | 0,84 s | 91 ms | 0,073 | 244 KiB |
| Mira que te lavo (ES) | Escritorio | 0,23 s | 0,23 s | 0,30 s | 0 ms | 0,021 | 250 KiB |
| JobMatch AI (EN) | Móvil | 0,84 s | 0,84 s | 0,86 s | 112 ms | 0,001 | 249 KiB |
| JobMatch AI (EN) | Escritorio | 0,24 s | 0,24 s | 0,34 s | 2 ms | 0,001 | 259 KiB |

El LCP medido abarcó 0,23–1,11 s. El rendimiento mínimo fue 96, con mínimos de 100 en accesibilidad, 100 en buenas prácticas y 100 en SEO.
Las ocho mediciones alcanzaron los objetivos orientativos.
En la carga móvil de JobMatch AI, las peticiones anticipadas de datos de navegación pasaron de 2 a 0. Las dos tipografías Geist se entregan localmente, las imágenes usan tamaños responsive y la miniatura de JobMatch AI solicita menos ancho en escritorio. La auditoría de JavaScript incluye código compartido de Next y React además de la navegación, el selector de tema y la galería. [Metodología de puntuación Lighthouse](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)

## Compilación, TypeScript y lint

| Comprobación | Resultado |
| --- | --- |
| `npm run build` | Correcto con Next.js 16.4.6 y Webpack. Dos portadas y diez casos prerenderizados, endpoints SEO y rutas 404 funcionales. |
| `npm run lint` | Código de salida 0. |
| `npx tsc --noEmit` | Código de salida 0. |
| `npm audit` y `npm audit --omit=dev` | 0 avisos en ambas ejecuciones. |
| Pruebas existentes | El repositorio no define un script de pruebas. Se ejecutaron las comprobaciones de navegador y los casos de publicación de documentos descritos arriba. |

El primer `npm ci` sobre el directorio de trabajo existente se detuvo con EPERM al intentar eliminar un archivo nativo de Lightning CSS en Windows. `npm install` completó la sincronización de las versiones del lockfile y el build final con esas versiones. El entorno fue Node.js 24.22.1 y npm 9.2.0.

## SEO, enlaces y privacidad

- Las 12 páginas de contenido tienen HTML renderizado en servidor, un H1 y canonical propio. Se verificaron sus alternativas `es-AR`, `en` y `x-default`, Open Graph, Twitter Cards, el `Person` y `WebSite` de portada y el favicon. El sitemap contiene exactamente las 12 canónicas. Robots apunta al sitemap y la tarjeta social respondió como PNG de 1200 × 630.
- Las entradas anteriores respondieron 308 y alcanzaron una página final sin ciclos. La raíz respondió 307 según el idioma guardado. Las páginas inexistentes devolvieron 404 con `noindex` y texto localizado en las rutas ES/EN. Las canónicas y el HTML evaluado carecían de referencias a localhost.
- El perfil y los cinco repositorios de GitHub, el despliegue de referencia y la portada de la demo de JobMatch AI respondieron HTTP 200. La auditoría de la demo comprobó su acceso público. LinkedIn devolvió HTTP 999 a la consulta automatizada. Se conservó la URL facilitada por Mateo, que coincide con la publicada en su perfil de GitHub.
- Se inspeccionaron las siete capturas de JobMatch AI y los dos WebP de lavandería. En esas imágenes públicas no aparecieron documentos, teléfonos de terceros ni registros financieros privados. Los originales de lavandería permanecen fuera de `public/`, excluidos mediante `.gitignore` y `.vercelignore`.
- Se buscaron rutas privadas y patrones reconocibles de credenciales en las fuentes y los artefactos del build. También se revisaron las rutas del historial Git y se comprobó que los originales, las credenciales y los `.env` no figuran entre los archivos versionados. Las solicitudes de prueba a rutas privadas devolvieron 404. La revisión cubre este repositorio, no los datos internos de las aplicaciones enlazadas.
- `npm audit` pasó de 13 paquetes reportados a 0. La auditoría de producción pasó de 3 a 0. ESLint se mantiene en la versión mayor 9 para evitar una migración ajena a esta entrega. Su aviso de fin de soporte queda como mantenimiento de herramientas de desarrollo.

## Documentos personales

| Recurso | Ubicación recomendada |
| --- | --- |
| CV en español | `public/cv/mateo-beccan-cv-es.pdf` y `profile.cv.es` en `src/data/profile.ts` |
| CV en inglés | `public/cv/mateo-beccan-cv-en.pdf` y `profile.cv.en` |
| Certificados | `public/certificates/amazon-junior-software-developer.pdf`, `public/certificates/python-development.pdf`, `public/certificates/genexus-workwithplus.pdf`, `public/certificates/ingles-b1.webp`, `public/certificates/santander-python.pdf` y `public/certificates/santander-excel.pdf` |
| Enlaces de verificación | `verificationUrl` de la credencial en `src/data/education.ts`, con URL HTTPS comprobada en el emisor |

Los nombres de certificados son sugerencias de archivo. Quedan por aportar los dos CV y los documentos originales o URLs del emisor que Mateo quiera mostrar. La interfaz actual sin esos documentos fue comprobada por HTTP y no genera botones asociados. Trece casos con archivos de prueba comprobaron PDF en ambos idiomas, certificados PDF y en imagen, faltantes, formatos incorrectos y URLs. La firma del formato es una comprobación básica. El contenido del documento y el enlace del emisor requieren revisión editorial antes de publicarlos.

## Configuración de Vercel y checklist

Se conserva **Webpack** en los scripts de desarrollo y producción. Turbopack había fallado al iniciar un proceso de PostCSS en Windows. Esta auditoría comprobó Next.js 16.4.6 con el comando existente y Node.js 24, sin cambiar de bundler ni de versión mayor de Next. Vercel admite Node.js 24.x, detecta el framework Next.js y usa el script `build` del repositorio. [Versiones de Node en Vercel](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions) · [Configuración de build](https://vercel.com/docs/builds/configure-a-build)

- [x] Build local, lint y tipos.
- [x] Auditoría npm completa y de producción con cero avisos al cierre.
- [x] Verificación local de privacidad, enlaces de GitHub, demo, rutas y metadata.
- [ ] Cuando se autorice, crear un Preview con raíz del repositorio, Node.js 24.x, npm con `package-lock.json` y `npm run build`. Confirmar que la salida se detecta como Next.js.
- [ ] Configurar `NEXT_PUBLIC_SITE_URL` en Production si el origen definitivo cambia. Validar desde Preview que las alternativas, las canónicas y las imágenes sociales apuntan al origen previsto.
- [ ] Confirmar desde Preview las 404, las redirecciones, las cabeceras y las exclusiones. Abrir LinkedIn en un navegador normal. [Exclusión de archivos en Vercel](https://vercel.com/docs/deployments/vercel-ignore)
- [ ] Incorporar CV y credenciales si se decide publicarlos. Revisar sus datos antes de exponerlos y volver a probar las descargas.

La auditoría se realizó sobre el build local. El Preview y la publicación quedan pendientes de autorización.
