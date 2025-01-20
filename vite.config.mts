import { defineConfig } from 'vite';
import { rollupPluginReplaceHtml } from './plugins/vite.replace-html.plugin';

export default defineConfig({
	appType: 'spa',
	assetsInclude: ['**/*.html'],
	plugins: [rollupPluginReplaceHtml]
});
