import { readFileSync } from 'fs';
import { PluginOption } from 'vite';

function loadResourceFile(filePath: string) {
    return readFileSync(
        filePath.replace('dist\\package\\esm5\\', '').replace('dist\\', ''),
        'utf-8',
    )
        .replace(/([\n\r]\s*)+/gm, ' ')
        .replace(/"/g, '\\"');
}

export const rollupPluginReplaceHtml: PluginOption = {
    name: 'replace-templateUrl',
    transform(code, filePath) {
        if (!filePath.includes('.component.ts')) return code;

        return code.replace(
            /templateUrl:\s*"([^']+?\.html)"/g,
            (_match, templateUrl) => {
                const templateContent =
                    loadResourceFile(templateUrl);

                return `template: "${templateContent}"`;
            },
        );
    },
}