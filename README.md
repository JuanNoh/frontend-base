# Frontend Base

[![CI](https://github.com/JuanNoh/frontend-base/actions/workflows/ci.yml/badge.svg)](https://github.com/JuanNoh/frontend-base/actions/workflows/ci.yml)

Plantilla base para los proyectos frontend nuevos (2026 en adelante). Nace de las
convenciones que ya funcionaban bien en proyectos anteriores, pero con el stack
moderno: las ideas se quedan, las herramientas se actualizan.

## Stack

| Antes                                        | Ahora                           | Por qué                                                                                   |
| -------------------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------- |
| `useForm` casero (276 líneas)                | **react-hook-form**             | Misma API (`register` ≈ `getFieldProps`), pero mantenida, tipada y sin re-renders         |
| `stringSchema`/`numberSchema` caseros        | **zod 4**                       | Mismo builder fluido que ya usábamos, y `z.infer` regala el tipo del form                 |
| axios + interceptores                        | **ky**                          | fetch nativo con hooks; mismo patrón de Bearer + logout en 401                            |
| Redux Toolkit + redux-persist + facade hooks | **zustand + persist**           | El slice, el facade y el persist son UN archivo; `getState()` fuera de React incluido     |
| `useState` + `useEffect` + `refreshTable`    | **TanStack Query**              | Cache, loading, reintentos e invalidación gratis; adiós efectos de fetch                  |
| react-router-dom + ProtectedRoute            | **TanStack Router**             | Rutas file-based 100% tipadas; guards en `beforeLoad` sin flash de contenido              |
| `${base} ${variant} ${className}`            | **cva + clsx + tailwind-merge** | Variantes declarativas y `cn()` resuelve conflictos de clases                             |
| slices `alert`/`alert-modal` de redux        | **sonner**                      | un `<Toaster>` global en `__root` y `toast.success()/error()` desde donde sea             |
| modal/select/datepicker hechos a mano        | **Radix UI**                    | el motor de shadcn: focus trap, ARIA, ESC y portal gratis; el estilo sigue siendo nuestro |
| dayjs                                        | **date-fns 4**                  | Tree-shakeable y con soporte de timezones nativo                                          |
| Sin alias, `../../../../..`                  | **alias `@/`**                  | Se acabó el infierno de puntitos                                                          |

Base: **Vite 8 + React 19 + TypeScript 6 + Tailwind CSS 4** (CSS-first, sin
`tailwind.config.js`). Manager: **pnpm**.

## Correr el proyecto

```bash
cp .env.example .env   # el demo apunta a jsonplaceholder, jala sin backend
pnpm install
pnpm dev
```

El demo: login falso (cualquier correo + contraseña de 8+) → lista de posts real
vía TanStack Query. Cubre el flujo completo: form → validación → sesión → guard →
query → adapter → UI.

## Estructura

```
src/
├── main.tsx                 # providers: QueryClient + Router
├── index.css                # importa tailwind + theme
├── routeTree.gen.ts         # GENERADO por el router plugin, ni tocarlo
├── routes/                  # SOLO cableado: guard + qué page pinta
│   ├── __root.tsx
│   ├── index.tsx            # / → login
│   ├── _auth.tsx            # layout protegido (beforeLoad = el ProtectedRoute de antes)
│   └── _auth/posts.tsx      # /posts
├── features/                # la carne — una carpeta por dominio de negocio
│   └── posts/
│       ├── posts.page.tsx   # la page: solo compone
│       ├── components/      # subcomponentes de la feature
│       ├── hooks/           # orquestación (usePosts)
│       ├── api/             # la ÚNICA capa que conoce URLs (el use-case de antes)
│       ├── adapters/        # frontera backend crudo ↔ forma de UI (funciones puras)
│       ├── schemas/         # schemas de zod (los validators de antes)
│       └── types/           # XResponse (crudo) vs X (limpio)
├── components/
│   ├── layout/              # shells de página (AuthLayout con el header)
│   └── ui/                  # el components/common de antes
│       └── button/
│           ├── button.component.tsx
│           ├── button.styles.ts    # cva
│           └── button.types.ts
├── stores/                  # zustand: SOLO estado global real (auth)
├── lib/                     # infra compartida: api-client, query-client, cn()
└── styles/theme.css         # tokens semánticos en @theme
```

## Convenciones (las reglas del juego)

1. **Un archivo = una responsabilidad**, con sufijo por punto:
   `.component.tsx` · `.page.tsx` · `.types.ts` · `.styles.ts` · `.utils.ts` ·
   `.api.ts` · `.adapter.ts` · `.schema.ts` · `.store.ts`
2. **Carpetas en kebab-case**; hooks en camelCase con prefijo `use` (`usePosts.ts`).
3. **Capas estrictas**: componente → hook → `api/` → `apiClient`.
   La vista JAMÁS importa `apiClient` ni conoce URLs ni la forma cruda del backend.
4. **Adapters como frontera de nombres**: el backend habla snake_case, la UI
   camelCase; la traducción vive en `adapters/` y en ningún otro lado. Funciones
   puras, sin JSX (el JSX se pinta en el componente, así el adapter es testeable).
5. **La page solo compone**; el hook orquesta; la ruta solo cablea.
6. **Tokens semánticos** en `@theme`: `bg-primary`, `text-danger`, `border-line`.
   Nombres por ROL, no por color — si mañana la marca es azul, cambias un hex y
   las clases siguen diciendo la verdad.
7. **Tipos sin prefijo `I`** y con `ComponentProps<'button'>` para extender lo
   nativo. React 19: `ref` es prop normal, no se usa `forwardRef`.
8. **Estado**: TanStack Query para TODO lo que venga del servidor; zustand solo
   para estado global real de UI (sesión); `useState` para lo local. Redux ya no.
9. **Named exports** en todo (componentes, hooks, pages). Sin barrels `index.ts`
   salvo que un import se vuelva insufrible.
10. **Nada de `any`** (ESLint lo marca error). Si de veras se ocupa, disable con
    comentario explicando por qué.

## Recetas rápidas

**Nueva feature con lista del backend:**
`features/<nombre>/` con `types/` (Response + limpio) → `adapters/` → `api/` →
`hooks/useX.ts` con `useQuery` → `x.page.tsx` → ruta en `routes/`.

**Nuevo formulario:**
`schemas/x.schema.ts` con zod → `useXMutation` (estado de servidor, separado) →
`useXForm` con `useForm` + `zodResolver` que consume la mutación → componente
que solo hace `{...register('campo')}` y pinta `errors`. Ver `features/auth`.

**Mutación que refresca una lista:**

```ts
const queryClient = useQueryClient();
useMutation({
	mutationFn: createThing,
	onSuccess: () => queryClient.invalidateQueries({ queryKey: ['things'] }),
});
```

(esto reemplaza el `refreshTable`/`setRefreshTable` de antes)

**Dónde van los efectos de una mutación:**

- En el `useMutation` del hook (`useXMutation`): lo que aplica SIEMPRE que
  pegue, la llame quien la llame — guardar en store, `invalidateQueries`.
- En el call-site `mutate(values, { onSuccess })`: lo de ESA pantalla —
  navegar, toasts. Estos callbacks no corren si el componente ya se desmontó
  (justo lo que quieres pa' una navegación). Orden: primero el del hook,
  luego el del call-site.
- Colocar la mutación dentro del hook del form solo se vale si es de un solo
  uso y cabe en ~10 líneas. En duda: separa.

**Nuevo componente UI con variantes:**
carpeta en `components/ui/` con `.styles.ts` (cva), `.types.ts`
(`ComponentProps<'x'> & VariantProps<...>`) y `.component.tsx` que usa `cn()`.

**Nuevo componente UI con comportamiento** (modal, select, dropdown, tabs):
primitiva de Radix (`import { Dialog } from 'radix-ui'`) + estilo nuestro con
Tailwind. No copiamos los componentes de shadcn — usamos su motor y el diseño
es de la casa. Ver `components/ui/modal`.

**Toasts/alertas:**
`toast.success('...')` / `toast.error('...')` de sonner, desde donde sea (el
`<Toaster>` ya vive en `__root.tsx`). Son efectos de pantalla: van en el
call-site del `mutate`, no dentro del `useMutation`.

## Comandos

```bash
pnpm dev          # dev server
pnpm build        # vite build + typecheck
pnpm typecheck    # solo tsc
pnpm lint         # eslint (0 warnings permitidos)
pnpm format       # prettier a todo src/
```

## Calidad en 3 candados

1. **Pre-commit**: husky corre lint-staged (eslint --fix + prettier) sobre lo staged —
   lo que se commitea ya va formateado.
2. **Pre-push**: `pnpm prettier && pnpm lint && pnpm build` tienen que pasar en verde,
   si no, el push no sale.
3. **CI (GitHub Actions)**: los mismos checks corren en la nube en cada push y PR.
