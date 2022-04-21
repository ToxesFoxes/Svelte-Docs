import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-static'
import { searchForWorkspaceRoot } from 'vite'
import path from "path"
import { builtinModules } from 'module'
import { less } from 'svelte-preprocess-less'
// import env
import { env } from 'process'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		paths: {
			base: env['VITE_APP_URL'] || "",
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			optimizeDeps: {
				include: ["highlight.js", "highlight.js/lib/core"],
				exclude: builtinModules,
			},
			server: {
				fs: {
					allow: [
						searchForWorkspaceRoot(process.cwd()),
					]
				}
			},
			resolve: {
				alias: {
					"$SD": path.resolve("./static-docs/"),
					"$store": path.resolve("./src/stores/"),
					"$lib": path.resolve("./src/lib/"),
					"$api": path.resolve("./src/api/"),
				}
			}
		}
	},

	preprocess: [
		less(),
		preprocess(),
		mdsvex(mdsvexConfig)
	]
}

export default config
