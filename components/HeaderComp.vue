<template>
	<header class="site-header">
		<nav>
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
