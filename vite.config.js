import {defineConfig} from "vite";

const config = {
    base: '',
    server: {
        host: '0.0.0.0',
        hmr: false,
    },
};

export default defineConfig(({command, mode, ssrBuild}) => {
    if (process.env.REPL_OWNER) {
        config.server.port = 443;
    }

    return config;
})