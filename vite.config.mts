// vite.config.js
import { resolve, join } from 'path';
import { readFileSync } from 'fs';
import { defineConfig } from 'vite';

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
			plugins: [
				{
					name: 'replace-templateUrl',
					transform(code, filePath) {
						if (!filePath.includes('.component.ts')) return code;

						return code.replace(
							/templateUrl:\s*"([^']+?\.html)"/g,
							(_match, templateUrl) => {
								const templatePath = join(
									__dirname,
									templateUrl,
								);
								const templateContent =
									loadResourceFile(templatePath);

								return `template: "${templateContent}"`;
							},
						);
					},
				},
			],
		},
	},
	test: {
		coverage: {
			provider: 'istanbul',
			reporter: ['html', 'text'],
			// thresholds: {
			// 	lines: 100,
			// 	functions: 100,
			// 	branches: 100,
			// 	statements: 100,
			// },
		},
	},
});

function loadResourceFile(filePath) {
	return readFileSync(
		filePath.replace('dist\\package\\esm5\\', '').replace('dist\\', ''),
		'utf-8',
	)
		.replace(/([\n\r]\s*)+/gm, ' ')
		.replace(/"/g, '\\"');
}
