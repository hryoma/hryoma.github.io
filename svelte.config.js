import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		renderSync: true,
		implementation: 'scss',
		scss: {
			prependData: `@import './src/lib/styles/mixins.scss';`
		}
	}),

	kit: {
		adapter: adapter({
      fallback: "index.html",
    }),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		}
	}
};

export default config;
