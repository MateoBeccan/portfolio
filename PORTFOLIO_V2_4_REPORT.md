# Portfolio V2.4

La portada abre con Mira que te lavo, seguido de Concesionaria, Hogwarts Library, CityFix, JobMatch AI y ConectaRos. La especificación V2.4 vuelve a incluir ConectaRos en la selección pública. El orden, el contador, las rutas estáticas y la navegación entre casos usan la colección de `src/data/projects.ts`.

## Presentación

- Una diapositiva activa con una distribución 60/40 en escritorio. La captura aparece primero en pantallas de hasta 800 px. CityFix y ConectaRos cuentan con una composición tipográfica e iconográfica.
- Contador editorial, flechas circulares, selector con nombres en escritorio e índices compactos en móvil. Se puede avanzar con el teclado y deslizar horizontalmente. La transición de 310 ms respeta el movimiento reducido.
- Las diapositivas comparten espacio en la cuadrícula. Las inactivas quedan fuera de la navegación por teclado y se monta únicamente la imagen activa del carrusel.
- Los casos comparten la plantilla ES/EN. La galería muestra miniaturas, títulos y descripciones. La vista ampliada carga bajo demanda y admite flechas, deslizamiento y Escape. Devuelve el foco al enlace de ampliación cuando se cierra.
- La plantilla dinámica genera canonical, hreflang, Open Graph, Twitter Cards y datos estructurados `CreativeWork`. El sitemap incluye de forma automática cada combinación de proyecto e idioma.

## Evidencia técnica

### Concesionaria

- **Tecnologías.** Java, Spring Boot, JHipster, Vue.js, MySQL, Spring Data JPA, Hibernate y Liquibase. Se cotejaron `pom.xml`, `package.json`, el README y el esquema de migraciones. El caso describe un monolito con una interfaz Vue que consume su API REST.
- **Implementación.** Los recursos REST, servicios, entidades y vistas respaldan catálogo, inventario, clientes, reservas, ventas, pagos y tasación de usados. Las capturas documentan el panel y el asistente de venta desde el cliente hasta la confirmación de una reserva.
- **Reglas.** La configuración, los validadores y los servicios respaldan la seña del 10 % sobre el valor del vehículo, el vencimiento por defecto a 30 días, la confirmación de venta con saldo en cero y la conversión de moneda. El historial registra los cambios de inventario. Se revisaron `ReservaServiceImpl`, `VentaValidator`, `VentaInventarioSyncService`, `VentaConfirmacionServiceImpl` y las pruebas de negocio relacionadas.
- **Contribución.** Se conservó la descripción del rol del portfolio y se revisó el historial local que registra cambios de Mateo en servicios de cobro, caja y comprobantes. [Repositorio público de Concesionaria](https://github.com/MateoBeccan/concesionaria)

### Hogwarts Library

- **Tecnologías.** Java 21, Spring Boot, Vue 3, TypeScript, MySQL, Spring Security, JWT, Spring Data JPA, Hibernate y Liquibase. El frontend usa Vue Router, Pinia y Axios. Se revisaron README, dependencias, configuración, controladores, servicios, repositorios, migraciones y pruebas. El historial incluye la etiqueta `v1.0.0`.
- **Implementación.** Catálogo de libros, autores y categorías, gestión de clientes, ejemplares con código, alquileres, devoluciones, cancelaciones y cobros parciales. La interfaz muestra búsqueda, filtros y un asistente para registrar el alquiler.
- **Dominio.** Un libro agrupa ejemplares y se relaciona con autores y categoría. Un alquiler pertenece a un cliente, incluye líneas con ejemplares y conserva la tarifa aplicada. Los servicios validan disponibilidad, cambios de estado y saldo con transacciones y bloqueos pesimistas. Se revisaron `AlquilerServiceImpl`, `PagoServiceImpl`, `EjemplarRepository` y `AlquilerRepository`.
- **Seguridad y evolución.** `SecurityConfig` aplica JWT, BCrypt y los roles `ADMIN` y `EMPLEADO`. Liquibase contiene el esquema inicial y migraciones para códigos de ejemplar y autores. Hay pruebas de servicio, autenticación, autorización y migraciones.
- **Contribución.** Los commits locales de Mateo respaldan la API REST, el flujo de alquiler y pagos, JWT, la integración Vue, los códigos de ejemplares y la normalización de autores. [Repositorio público de Hogwarts Library](https://github.com/MateoBeccan/hogwarts-library)

El conector de GitHub confirmó que los repositorios enlazados para ambos casos, CityFix, JobMatch AI y ConectaRos son públicos. El contenido técnico se contrastó con las copias locales de Concesionaria (`ab22628`) y Hogwarts Library (`f249008`). Las revisiones están presentes en referencias remotas del historial local. Algunas funciones descritas provienen de esas ramas de trabajo. Ambos enlaces de rama respondieron HTTP 200. La revisión leyó el código y las pruebas de origen disponibles. La ejecución de esas aplicaciones queda fuera de las pruebas del portfolio. [Rama de Concesionaria](https://github.com/MateoBeccan/concesionaria/tree/deploy/render-aiven-demo) · [Rama de Hogwarts Library](https://github.com/MateoBeccan/hogwarts-library/tree/feature/v2-evolution)

La revisión no atribuyó demos a Concesionaria o Hogwarts Library porque no se verificó una URL pública para esos casos. La portada de la demo existente de JobMatch AI respondió HTTP 200. [Demo de JobMatch AI](https://jobmatch-ai-ten.vercel.app/)

## Capturas publicables

| Proyecto y archivo WebP | Módulo observado | Resolución | Relación aprox. |
| --- | --- | --- | --- |
| Concesionaria · `panel` | Panel de operaciones, portada | 1917 × 905 | 2,12:1 |
| Concesionaria · `seleccion-cliente` | Primer paso del asistente de venta | 1608 × 910 | 1,77:1 |
| Concesionaria · `seleccion-vehiculo` | Búsqueda y selección de unidad | 1585 × 907 | 1,75:1 |
| Concesionaria · `registro-pagos` | Formulario de pago, moneda y saldo | 1586 × 907 | 1,75:1 |
| Concesionaria · `confirmacion-reserva` | Confirmación y comprobante | 1606 × 902 | 1,78:1 |
| Hogwarts · `ejemplares` | Inventario de ejemplares, portada | 1897 × 862 | 2,20:1 |
| Hogwarts · `alquileres` | Listado y filtros de alquiler | 1892 × 853 | 2,22:1 |
| Hogwarts · `seleccion-cliente` | Selección de cliente activo | 1516 × 845 | 1,79:1 |
| Hogwarts · `seleccion-ejemplares` | Selección de ejemplares disponibles | 1610 × 857 | 1,88:1 |
| Hogwarts · `confirmacion-alquiler` | Fechas, ejemplares y estimación | 1642 × 867 | 1,89:1 |
| Hogwarts · `inicio-sesion` | Acceso con campos vacíos | 1918 × 857 | 2,24:1 |

Las imágenes tienen resolución de escritorio y conservan la proporción y las dimensiones en píxeles. Las once copias WebP suman 727.252 bytes frente a 3.440.283 bytes de sus originales PNG. Se revisaron las doce entradas y se exportaron once capturas WebP. Las máscaras opacas cubren identificadores, nombres, correos, importes de operación y datos de cuenta donde correspondía. Las tarifas de catálogo, estados y etiquetas funcionales siguen visibles. El arte promocional `hogwarts-library-portada.png` quedó archivado con los originales. Las pantallas del asistente corresponden a pasos distintos. Los originales se conservaron en `portfolio-assets-private/v2.4/`, excluido de Git y Vercel. 

Las capturas de Mira que te lavo y JobMatch AI siguen usando sus galerías existentes, con `panel.webp` y `home.png` como primeras imágenes. CityFix y ConectaRos usan la composición tipográfica.

## Archivos modificados

| Archivo | Responsabilidad |
| --- | --- |
| `src/components/sections/Projects.tsx` | Encabezado localizado y datos resumidos para el carrusel. |
| `src/components/ui/ProjectShowcase.tsx` | Estado, selector, contador y navegación. |
| `src/components/ui/ProjectCard.tsx` | Composición de cada diapositiva y elementos compartidos con el caso. |
| `src/components/ui/ProjectCarousel.tsx` | Galería con teclado, foco y ampliación bajo demanda. |
| `src/components/ui/useHorizontalSwipe.ts` | Gestos táctiles en el carrusel y las galerías. |
| `src/app/globals.css` | Composición responsive, galería y movimiento reducido. |
| `src/app/[lang]/projects/[slug]/page.tsx` | Datos estructurados, portada y modelado de dominio. |
| `src/data/projects.ts`, `src/types/project.ts`, `src/i18n/dictionary.ts` | Datos centralizados, campos de proyecto y textos ES/EN. |
| `public/projects/concesionaria/`, `public/projects/hogwarts/` | Capturas revisadas y optimizadas. |
| `tsconfig.json` | Excluye el directorio de artefactos `build/`, en línea con ESLint. |
| `README.md`, `PORTFOLIO_V2_4_REPORT.md` | Instrucciones de mantenimiento e informe de implementación. |

## Validación y capturas de revisión

| Prueba | Resultado |
| --- | --- |
| `npm run build` | Correcto. Next.js generó 24 páginas estáticas durante el build, incluidas doce rutas de proyectos. |
| `npm run lint` · `npx tsc --noEmit` | Correctos. |
| Chromium | Seis selecciones directas, flechas, ciclo primero/último, swipe horizontal, gesto vertical sin cambio de diapositiva y movimiento reducido. Doce rutas con respuesta HTTP 200, navegación de idioma, tema persistido, sitemap, enlaces al caso y archivos de CV ES/EN disponibles. |
| Responsive | 320, 360, 390, 768, 1024, 1136, 1280, 1440 y 1920 px. La página ajustó al viewport y el carrusel mantuvo la altura en cada ancho. |
| Galerías | Miniaturas, ampliación bajo demanda, flechas, swipe, Escape y retorno de foco en ambos estudios. |
| axe-core y consola | Cero incidencias en el carrusel y los dos estudios revisados. Cero errores de consola registrados en la prueba. |

[Resultados de Chromium y axe-core](build/portfolio-v24/browser-results.json)

Lighthouse se ejecutó contra el build de producción en localhost.

| Página | Entorno | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Inicio ES | Móvil | 77 | 100 | 100 | 100 | 974 ms | 0 |
| Inicio ES | Escritorio | 100 | 100 | 100 | 100 | 300 ms | 0,002 |
| Hogwarts Library ES | Móvil | 92 | 100 | 100 | 100 | 2547 ms | 0,014 |

Lighthouse señala una discrepancia entre el texto visible y el nombre accesible en el enlace preexistente `EN` de la navbar de escritorio. [Resultados Lighthouse](build/portfolio-v24/lighthouse-summary.json)

Las dos repeticiones del inicio móvil dieron 87 y 99 en rendimiento. La mediana de las tres mediciones fue 87 y el LCP varió entre 927 y 974 ms. La segunda medición de escritorio confirmó 100 en rendimiento y localizó el aviso de accesibilidad en el enlace `EN`. [Repeticiones Lighthouse](build/portfolio-v24/lighthouse-recheck.json)

Las capturas y archivos de verificación se guardaron localmente en `build/portfolio-v24/`.

- [Antes, sección de proyectos en escritorio](build/portfolio-v24/antes-escritorio.jpg)
- [Después, escritorio](build/portfolio-v24/despues-escritorio.jpg) · [móvil](build/portfolio-v24/despues-movil.jpg) · [tema claro](build/portfolio-v24/despues-claro.jpg)
- Diapositivas de [Mira que te lavo](build/portfolio-v24/proyecto-mira-que-te-lavo.jpg), [Concesionaria](build/portfolio-v24/proyecto-concesionaria.jpg), [Hogwarts Library](build/portfolio-v24/proyecto-hogwarts-library.jpg), [CityFix](build/portfolio-v24/proyecto-cityfix.jpg), [JobMatch AI](build/portfolio-v24/proyecto-jobmatch-ai.jpg) y [ConectaRos](build/portfolio-v24/proyecto-conectaros.jpg).
- Concesionaria. [Estudio de caso](build/portfolio-v24/caso-concesionaria.jpg) · [galería](build/portfolio-v24/galeria-concesionaria.jpg) · [captura ampliada](build/portfolio-v24/ampliada-concesionaria.jpg).
- Hogwarts Library. [Estudio de caso](build/portfolio-v24/caso-hogwarts-library.jpg) · [galería](build/portfolio-v24/galeria-hogwarts-library.jpg) · [captura ampliada](build/portfolio-v24/ampliada-hogwarts-library.jpg).

## Entrega

Cambios locales. Sin commit, push ni despliegue.

```text
feat(projects): redesign project showcase and add Hogwarts Library with real project galleries
```
