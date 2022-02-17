<template>
	<header class="site-header">
		<nav class="hidden md:block">
			<div class="w-12 p-8 border-black border-8">
				<nuxt-link to="/"><img :src="doc.logo.url" :alt="doc.logo.alt" class="nav-logo" /></nuxt-link>
			</div>
			<ul class="md:flex md:flex-row md:grow md:justify-between md:space-between md:items-center">
				<li class="nav-link p-5" v-for="(item, index) in this.menulist" :key="index" :class="index == list ? 'inline-flex' : ''">
					<prismic-link :field="item.link" :target="item.target === true ? '_blank' : '_self'"><span class="main-nav-link">{{ item.label }}</span></prismic-link>
				</li>
			</ul>
		</nav>
		<nav class="flex flex-row justify-between p-3 md:hidden">
			<nuxt-link to="/"><img :src="doc.logo.url" :alt="doc.logo.alt" class="nav-logo" /></nuxt-link>
			<font-awesome-icon :icon="['fas', 'bars']" size="2x" />
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			doc: {},
			menulist: {}
		}
	},
	async fetch() {
		const res = await this.$prismic.api.getSingle('header');
		const nav = await this.$prismic.api.getSingle('menu');
		if (res) {
			this.doc = res.data;
		} else {
			error({ statusCode: 404, message: 'Page not found' });
		}
		if (nav) {
			this.menulist = nav.data['menu-links'];
		}
	},
	computed: {
		list() {
			let ml = this.menulist.length;
			return (Math.ceil(ml / 2)) - 1;
		}
	}
}
</script>

<style lang="scss" scoped>
.main-nav-link {
	font-weight: bold;
}

.nav-logo {
	width: 60px;
}

nav > ul {
	border-bottom: 10px solid black;
}
</style>
