import { defineConfig } from 'vite';
import { rollupPluginReplaceHtml } from './plugins/vite.plugin';
import react from '@vitejs/plugin-react'

export default defineConfig({
	appType: 'spa',
	assetsInclude: ['**/*.html'],
	plugins: [rollupPluginReplaceHtml],
});
