# my-app

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.21. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

## Lessons

- Used Bun as a runtime and workspace manager.
- Project structure followed a monorepo setup with two packages: `client` for the frontend and `server` for backend.
- Installed and configured **Bun** and learnt how it simplified management, scripting and TypeScript support compared to Node.js.
- Set up workspaces so both the client and server can share dependencies and can be run together with a single command (concurrently).
- Used **Vite** to scaffold the React frontend.
- Configured a proxy in Vite so the frontend could communicate with the backend during development.
- Integrated **Tailwind CSS** for utility-first styling and added **shadcn/ui** for prebuilt, accessible UI components.
- Added Prettier to automatically format my code and defined consistent formatting rules with a `.prettirrc` file.
- Set up **Husky** and **lint-staged** to run formating checks before each commit ensuring a clean codebase.
- Managed environment variables securely using `.env` files and the _dotenv_ package, and learnt best practices for environment-specific settings.
