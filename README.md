# Angular 19 — Bases

Aplicación práctica para aprender los fundamentos de **Angular 19**, enfocada en el nuevo sistema de reactividad con **Signals**.

🌐 **Demo en vivo:** [https://julialeja.github.io/angular-19-bases-jass/](https://julialeja.github.io/angular-19-bases-jass/)

## ¿Qué aprendí?

### Signals
- `signal()` — Estado reactivo sin RxJS para valores simples.
- `computed()` — Valores derivados que se recalculan automáticamente.
- `effect()` — Efectos secundarios que reaccionan a cambios en signals (ej: persistencia en LocalStorage).

### Componentes y arquitectura
- Componentes standalone (sin módulos).
- Comunicación padre-hijo con `output()` (reemplazo moderno de `@Output()`).
- Componentes compartidos (`navbar`).
- Separación en `pages/`, `components/`, `services/`, `interfaces/`.

### Inyección de dependencias
- `inject()` — Forma moderna de inyectar servicios sin usar el constructor.
- Servicios con `providedIn: 'root'` para estado global compartido.

### Routing
- Configuración de rutas con `Routes`.
- Navegación con `routerLink` y `routerLinkActive`.
- Ruta wildcard (`**`) para redirección.

### Rendimiento
- `ChangeDetectionStrategy.OnPush` combinado con Signals.

## Páginas de la app

| Ruta | Descripción |
|------|-------------|
| `/` | Contador con signals y change detection |
| `/hero` | Página de héroe con `computed()` signals |
| `/dragonball` | Lista de personajes con estado local |
| `/dragonball-super` | Lista con servicio inyectado + persistencia en LocalStorage |

## Tecnologías

- Angular 19.2
- TypeScript 5.7
- Angular Signals
- Angular Router
- GitHub Pages (deploy)

## Ejecutar localmente

```bash
pnpm install
ng serve
```

Navegar a `http://localhost:4200/`

## Deploy

```bash
pnpm run deploy
```

---

Hecho por **Julieth Sierra** 💻
