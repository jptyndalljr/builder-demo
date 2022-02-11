<template>
	<header class="site-header">
		<p v-if="menulist === 'Please create a menu document'">{{ $store.state.menu }}</p>
		<nav v-else>
			<nuxt-link to="/">Home</nuxt-link>
			<ul>
				<li v-for="(item, index) in this.menulist" :key="index">
					<prismic-link :field="item.link" :target="item.target === true ? '_blank' : '_self'">{{ item.label }}</prismic-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			doc: {},
			menulist: this.$store.state.menu
		}
	},
	async fetch() {
		const res = await this.$prismic.api.getSingle('header');
		if (res) {
			this.doc = res.data;
		} else {
			error({ statusCode: 404, message: 'Page not found' });
		}
	}
}
</script>
