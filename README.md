# Vite React TypeScript template

<p align="left"> 
  <img src="https://img.shields.io/badge/Vite-4E9AF9?logo=vite&logoColor=white" /> 
  <img src="https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white" /> 
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" /> 
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Prettier-ff69b4?logo=prettier&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Vitest-42b883?logo=vite&logoColor=white" /> 
  <img src="https://img.shields.io/github/last-commit/engfabom/react-templates" /> 
  <img src="https://img.shields.io/github/license/engfabom/react-templates" /> 
</p>

Minimal, clean, and production-ready starter template powered by:
- Vite
- React
- TypeScript (Strict + ESNext)
- ESLint

This repo is the base template. Additional variants are provided through separate branches.

Contribute to this project with
- [Code](#code), or
- [Donating](https://www.paypal.com/donate/?business=VXZGSJPXLL8W6&no_recurring=0&item_name=%40engfabiom&currency_code=USD)
  - [![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?business=VXZGSJPXLL8W6&no_recurring=0&item_name=%40engfabiom&currency_code=USD)

---

## 🚀 Usage

Create a new project from the `main` branch:

```sh
pnpm create vite@latest my-app --template github:engfabom/react-templates#main
```

## 🧩 Available Branches

### branch:`#main`

Base template with:
- Vite
- React
- TypeScript Strict
- ESLint

### branch:`#vitest`

- Adds a complete test setup using **Vitest** + **React Testing Library** on `jsdom`.
- Uses **@vitejs/plugin-react-swc** for faster React/TSX transforms in both dev and tests.
- Configures **ESLint (flat config)** with React, SWC, Vitest env/globals e regras modernas.
- Includes **Prettier** integrado ao ESLint (sem conflito) para formatação consistente.
- Provides a minimal example component + test to support TDD out of the box.

### branch:`#pages` (TODO)

- Adds a minimal `pages/`-based routing structure.

### branch:`#features` (TODO)

- Feature-based architecture (FSD) built on top of `pages`.

### branch:`#redux` (TODO)

- Adds Redux Toolkit + Persist to the `features` setup.

---

New versions and documentation updates will be published here.

## ❤️ Contribution

### Code

- Fork the repository
- Create a branch;
  - `git checkout -b <base-branch>/<your-change>`
- Open a Pull Request targeting the appropriate branch (`main`, `pages`, etc.)

### Donation

- [![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?business=VXZGSJPXLL8W6&no_recurring=0&item_name=%40engfabiom&currency_code=USD)

## 🙏 Acknowledgements

This template is powered by:

- [Vite](https://vitejs.dev/) — MIT License
- [React](https://react.dev/) — MIT License
- [TypeScript](https://www.typescriptlang.org/) — Apache 2.0
- [ESLint](https://eslint.org/) — MIT License

## 📄 License

[MIT License](./LICENSE)
