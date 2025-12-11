# Vite + React + SWC + TypeScript + ESNext + ESLint + Prettier + Vitest
<p align="left"> 
  <img src="https://img.shields.io/badge/Vite-4E9AF9?logo=vite&logoColor=white" /> 
  <img src="https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white" /> 
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" /> 
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Prettier-ff69b4?logo=prettier&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Vitest-42b883?logo=vite&logoColor=white" /> 
  <img src="https://img.shields.io/github/last-commit/engfabiom/react-templates" /> 
  <img src="https://img.shields.io/github/license/engfabiom/react-templates" /> 
</p>

Minimal React starter powered by **Vite** and **TypeScript**, with linting and formatting preconfigured for a clean development experience.

## 🚀 Usage
Enable pnpm via Corepack:

```sh
corepack enable
corepack prepare pnpm@latest --activate
Or adapt the commands below to your preferred package manager.
```

Create a new project from the main branch:

```sh
pnpm dlx degit engfabiom/react-templates#vitest my-app
cd my-app
pnpm install
```

## 🧰 Tech Stack
- **Vite** — fast development server and build tool  
- **React** — component-based UI library  
- **TypeScript** — static typing for a safer codebase  
- **ESLint (Flat Config)** — consistent linting rules  
- **Prettier** — automatic code formatting  
- **Vitest** — testing framework with fast, Vite-powered execution

## 🚀 Running Scripts
| Description              | Dommand               |
| ------------------------ | --------------------- |
| Install dependencies     | `pnpm install       ` |
| Start development server | `pnpm dev           ` |
| Run linter               | `pnpm lint          ` |
| Build project            | `pnpm build         ` |
| Preview production build | `pnpm preview       ` |
| Run tests                | `pnpm test          ` |
| Watch tests              | `pnpm test:watch    ` |
| Run tests once (CI mode) | `pnpm test:run      ` |
| Generate coverage report | `pnpm test:coverage ` |

## 🧹 Code Quality
- Run ESLint: `pnpm lint`
- Format code with Prettier (depending on your scripts/setup): `pnpm format`
- You can integrate both into your editor for on-save formatting and inline linting.

## 🔧 Customization

Typical next steps:
- Adjust global styles in src/index.css and src/app/App.css.
- Add new components under src/app/ or create additional folders under src/ as needed.
- Extend ESLint and Prettier configuration to match your team’s conventions.
- Add testing setup (Vitest, React Testing Library, etc.) if required for your project.


## 📁 Project Structure

```text
.
├─ src/
│  ├─ app/
│  │  ├─ App.css
│  │  └─ App.tsx
│  ├─ assets/
│  │  └─ images/
│  ├─ index.css
│  └─ main.tsx
├─ .gitignore
├─ .prettierrc
├─ eslint.config.js
├─ index.html
├─ LICENSE
├─ package.json
├─ README.md
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ tsconfig.test.json
├─ vite.config.ts
├─ vitest.config.ts
└─ vitest.setup.ts
```
|        File / Folder | Description                                                                             |
| -------------------: | --------------------------------------------------------------------------------------- |
|    `src/app/App.tsx` | Root component of the application. Central point for high-level composition and layout. |
|    `src/app/App.css` | Styles specific to the application shell.                                               |
|                      |                                                                                         |
|        `src/assets/` | Static assets such as images, icons, and media files.                                   |
|                      |                                                                                         |
|      `src/index.css` | Global styles applied across the entire application.                                    |
|       `src/main.tsx` | Application bootstrap. Initializes React and mounts the root component into the DOM.    |
|                      |                                                                                         |
|         `.gitignore` | Files and directories excluded from version control.                                    |
|        `.prettierrc` | Prettier configuration ensuring consistent code formatting.                             |
|   `eslint.config.js` | ESLint Flat Config setup enforcing consistent linting rules.                            |
|         `index.html` | Base HTML template used by Vite during development and build.                           |
|            `LICENSE` | Project license information.                                                            |
|       `package.json` | Project metadata: scripts, dependencies, and general configuration.                     |
|          `README.md` | Project documentation and usage instructions.                                           |
|  `tsconfig.app.json` | TypeScript configuration targeted at application source (`src/`).                       |
|      `tsconfig.json` | Base TypeScript configuration shared across the entire project.                         |
| `tsconfig.node.json` | TypeScript configuration for Node-based tooling (Vite, scripts, config files).          |
| `tsconfig.test.json` | TypeScript configuration used specifically for tests.                                   |
|     `vite.config.ts` | Vite configuration for development server, plugins, and production build.               |
|   `vitest.config.ts` | Vitest configuration for test environment and execution.                                |
|    `vitest.setup.ts` | Test environment setup (mocks, globals, RTL configuration, etc.).                       |

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
