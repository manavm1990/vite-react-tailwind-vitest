# React-Tailwind-Vitest

This is a template for a React project using TailwindCSS and Vite/Vitest.

## Scripts

- `npm start` - Starts the development server.
- `npm test` - Runs the test suite with [Vitest](https://vitest.dev/guide/cli.html#commands).

See [package.json](./package.json) for more scripts

## Linting and Prettier

This project uses `"standard"` linting with the recommended for `react` and `"prettier"`.

It also lints `"testing-library"` and `"jest-dom"`.

## VS Code Extensions and Settings

It also includes sensible VS Code defaults for [settings](./.vscode/settings.json) and [extensions](./.vscode/extensions.json).

For the **settings**, we are doing things like:

- `"css.validate": false,` - TailwindCSS uses a lot of custom CSS syntax that VS Code doesn't understand, so we disable validation.
- `"editor.formatOnSave": true,` - We want to format our code on save.
- `"editor.defaultFormatter": "esbenp.prettier-vscode",` - We want to use Prettier to format our code.
- `"editor.codeActionsOnSave": { "source.fixAll.eslint": true },` - We want to use ESLint to fix any linting errors on save.

You should install the recommended extensions when you open the project in VS Code to get the full benefit of these settings.
.

## Architecture

This project uses the following architecture heavily inspired by Tania Rascia's [React Architecture](https://www.taniarascia.com/react-architecture-directory-structure/).

- `src/` - All of our source code.
  - `components/` - All of our React components (`.jsx`). Global shared/reusable components, such as layout (wrappers, navigation), form components, buttons.
  - `hooks/` - All of our custom React hooks (`.js`).
  - `routes/` - All of our React routes (`.jsx`). Each route is a 'page'.
  - `services` - All of our services (`.js`). Services are responsible for making API calls and returning data, for example (api.js).
  - `utils/` - All of our utility functions (`.js`). Utilities, helpers, constants, and the like.

### Absolute Imports

This project uses absolute imports for all of our files. This means that we can import files from any directory using the `@` prefix instead of relative paths (e.g. `import Button from '@/components/Button'` instead of `import Button from '../../components/Button'`).

This works for any of the directories in `src/` as listed above. If you need to add more, see [`vite.config.js`](./vite.config.js).

## License

[MIT](./LICENSE)

## Credits

This project was bootstrapped with [create-vite](https://vitejs.dev/guide/).

Like it? Give it a ⭐️ on [GitHub](https://github.com/manavm1990/vite-react-tailwind-vitest).

Questions? Comments? Concerns? Find me on [Twitter](https://twitter.com/GoCodeFinity).
