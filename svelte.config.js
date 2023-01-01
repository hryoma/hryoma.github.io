import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

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
		adapter: adapter()
	}
};

export default config;
