import concurrently from 'concurrently'; //import a function from a module

concurrently([
    {
        name: "server",
        command: "bun run dev",
        cwd: "packages/server",
        prefixColor: "cyan"
    },
    {
        name: "client",
        command: "bun run dev",
        cwd: "packages/client",
        prefixColor: "green"
    }
])