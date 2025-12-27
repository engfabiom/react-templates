# Vite React TypeScript Template

<p align="left"> 
  <img src="https://img.shields.io/badge/Vite-4E9AF9?logo=vite&logoColor=white" /> 
  <img src="https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white" /> 
  <img src="https://img.shields.io/badge/TypeScript-Strict Mode + ESNext-blue?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Prettier-ff69b4?logo=prettier&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Vitest-42b883?logo=vitest&logoColor=white" />
  <img src="https://img.shields.io/badge/lint--staged-orange?logo=lint-stage&logoColor=white" />
  <img src="https://camo.githubusercontent.com/316e80a5cba12bd127706519d72e010426f1337c5d08f3b93d0dc3da5744a3f1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d656e61626c65642d6875736b793f7374796c653d666c6174266c6f676f436f6c6f723d677265656e266c6162656c3d2546302539462539302542364875736b79266c696e6b3d687474707325334125324625324674797069636f64652e6769746875622e696f2532466875736b79253246" />
</p>

<p align="left"> 
  <img src="https://img.shields.io/github/last-commit/engfabiom/react-templates" />
  <img src="https://img.shields.io/github/license/engfabiom/react-templates" />
</p>

<p align="center"> 
  <img src="https://visitor-badge.laobi.icu/badge?page_id=engfabiom.react-templates" />
</p>

## TypeScript (Strict Mode) + ESLint + Prettier

A minimal, opinionated, and production-ready starter template built with:

- **Vite**
- **React**
- **TypeScript** (Strict Mode + ESNext)
- **ESLint** (modern flat config)
- **Prettier**
- **Vitest**
- **lint-staged + Husky**

This repository provides a solid foundation for scalable React applications, with quality gates enabled from day one.

> This repository serves as a **base template**.
> Additional setups and tooling variations are available through dedicated branches.

---

## Enforced Standards

This template enforces modern frontend best practices:

| Feature                               | Branch              |
| ------------------------------------- | ------------------- |
| TypeScript strict mode                | `base`              |
| ESLint (flat config, modern rules)    | `base`              |
| Consistent formatting with Prettier   | `base`              |
| Testing setup with Vitest             | `vitest`            |
| Fast feedback via lint-staged + Husky | `lint-staged-husky` |

---

## Why This Template?

This template exists to solve common pain points when starting React projects:

- Minimal yet opinionated setup
- Strict TypeScript and linting rules by default
- Fast feedback loops during development, commits, and CI
- Zero tooling friction as the project scales
- Clean architectural foundation without unnecessary boilerplate
- Ready-to-use quality gates: **lint**, **format**, **test**

In short: **start clean, stay clean**.

---

## Usage

### Enable pnpm via Corepack

```sh
corepack enable
corepack prepare pnpm@latest --activate
```

You may adapt the commands below to your preferred package manager.

### Create a new project from the repository

```sh
pnpm dlx degit engfabiom/react-templates#lint-staged-husky my-app
cd my-app
pnpm install
```

---

## Available Branches

### `base`

Core template including:

- Vite + React
- TypeScript (strict mode)
- ESLint
- Prettier
- Feature-Sliced Design (FSD) flat architecture prepared

### `vitest`

Adds a complete and modern testing setup:

- Extends `base`
- Vitest + React Testing Library
- `jsdom` test environment
- `@vitejs/plugin-react-swc` for faster TSX transforms
- ESLint configured with:
  - React rules
  - Vitest globals and environment
  - Prettier integrated (no conflicts)

TDD-ready out of the box.

### `lint-staged-husky`

Extends `base` + `vitest` with commit-time enforcement:

- Quality checks enforced on commit:
  - ESLint — code quality and rule violations
  - Prettier — consistent formatting
- lint-staged integration
  - Executes checks only on staged files
  - Prevents committing broken or unformatted code
- Husky configured with Git hooks
  - `pre-commit` hook enabled
  - `pre-push` hook enabled

---

## Contributing

1. Fork the repository
2. Create a feature branch:  
   `git checkout -b <base-branch>/<your-change>`
3. Open a Pull Request targeting the appropriate branch

---

## Acknowledgements

This template is powered by:

- [Vite](https://vitejs.dev/) — MIT License
- [React](https://react.dev/) — MIT License
- [TypeScript](https://www.typescriptlang.org/) — Apache 2.0
- [ESLint](https://eslint.org/) — MIT License
- [Prettier](https://prettier.io/) — MIT License
- [Feature-Sliced Design](https://feature-sliced.design/) — Open-source architectural methodology
- [Vitest](https://vitest.dev/) — MIT License
- [lint-staged](https://github.com/lint-staged/lint-staged) — MIT License
- [Husky](https://typicode.github.io/husky/) — MIT License
- [Flaticon](https://www.flaticon.com/)
  - [Web interface icons created by Icon home - Flaticon](https://www.flaticon.com/free-icons/web-interface)

---

## Support the Project

If this template helps you, consider supporting it with a donation.

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?business=VXZGSJPXLL8W6&no_recurring=0&item_name=%40engfabiom&currency_code=USD)

---

## License

[MIT License](LICENSE)
