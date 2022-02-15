<template>
	<header class="site-header">
		<nav class="xs:hidden">
			<ul class="md:flex md:flex-row md:grow md:justify-between md:space-between md:items-center">
				<span v-for="(item, index) in this.menulist" :key="index" class="p-5">
					<li class="nav-link">
						<prismic-link :field="item.link" :target="item.target === true ? '_blank' : '_self'"><span class="main-nav-link">{{ item.label }}</span></prismic-link>
					</li>
					<li v-if="index == list">
						<nuxt-link to="/"><img :src="doc.logo.url" :alt="doc.logo.alt" class="nav-logo" /></nuxt-link>
					</li>
				</span>
			</ul>
		</nav>
		<nav class="md:hidden">
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
</style>
