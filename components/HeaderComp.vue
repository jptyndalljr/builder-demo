<template>
	<header class="site-header">
		<nav class="flex flex-row justify-center nav">
			<img :src="doc.logo.url" :alt="doc.logo.alt" />
			<ul class="sm:hidden md:flex md:flex-row md:grow md:justify-between">
				<li v-for="(item, index) in this.menulist" :key="index" class="space-between p-5 nav-link">
					<prismic-link :field="item.link" :target="item.target === true ? '_blank' : '_self'"><span class="main-nav-link">{{ item.label }}</span></prismic-link>
				</li>
			</ul>
			<font-awesome-icon class="md:hidden" :icon="['fas', 'bars']" size="2x" />
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
	}
}
</script>

<style lang="scss" scoped>
.nav {
	height: 75px;
}

.main-nav-link {
	font-weight: bold;
}
</style>
