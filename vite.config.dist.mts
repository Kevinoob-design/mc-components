// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import { rollupPluginReplaceHtml } from './plugins/vite.plugin';

export default defineConfig({
	build: {
		manifest: true,
		minify: true,
		reportCompressedSize: true,
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, 'app/components/components.module.ts'),
			name: 'McComponents',
			// the proper extensions will be added
			fileName: 'mc-components',
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['angular'],
			plugins: [rollupPluginReplaceHtml],
		},
	},
	test: {
		root: 'app/components',
		environment: 'jsdom',
		coverage: {
			provider: 'istanbul',
			reporter: ['html', 'json', 'text'],
			thresholds: {
				lines: 100,
				functions: 100,
				branches: 100,
				statements: 100,
			},
		},
	},
});
