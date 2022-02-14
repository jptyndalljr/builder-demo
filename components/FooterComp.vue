<template>
	<section class="footerArea">
		<div class="footer-logo bg-gray-300 flex justify-center">
			<img :src="doc.logo.url" :alt="doc.logo.alt" class="p-5" />
		</div>
		<div class="tri-grid bg-gray-500">
			<div class="col1 py-8 pl-8">
				<div v-for="(d, index) in doc.column1" :key="index">
					<div v-if="d.header" class="h5">{{ d.header }}</div>
					<prismic-rich-text class="footer-text" :field="d.Text" />
				</div>
			</div>
			<div class="col2 py-8 pl-8">
				<div v-for="(d, index) in doc.column2" :key="index">
					<div v-if="d.header" class="h5">{{ d.header }}</div>
					<prismic-rich-text class="footer-text" :field="d.text" />
					<div class="social-media">
						<font-awesome-icon :icon="['fab', 'instagram-square']" size="2x" class="mr-8 cursor-pointer" />
						<font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="mr-8 cursor-pointer" />
						<font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" class="mr-8 cursor-pointer" />
					</div>
				</div>
			</div>
			<div class="col3 py-8 pl-8">
				<nuxt-link to="/">Home</nuxt-link>
				<ul>
					<li v-for="(item, index) in this.menu" :key="index">
						<prismic-link :field="item.link" :target="item.target === true ? '_blank' : '_self'">{{ item.label }}</prismic-link>
					</li>
				</ul>
				<nuxt-link to="/sitemap.xml">Sitemap</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			doc: {},
			menu: {}
		}
	},
	async fetch() {
		const res = await this.$prismic.api.getSingle('footer');
		const nav = await this.$prismic.api.getSingle('menu');
		if (res) {
			this.doc = res.data;
		} else {
			error({ statusCode: 404, message: 'Page not found' });
		}
		if (nav) {
			this.menu = nav.data['menu-links'];
		}
	}
}
</script>

<style lang="scss">
.footer-logo img {
	width: 90px;
}

.tri-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	margin: 0 auto;
	gap: 1rem;
	color: #fff;
}

.social-media {
	display: flex;
	justify-content: flex-start;
	max-width: 50%;
}

.footer-text {
	p {
		margin-bottom: 25px;
		line-height: 15px;
	}
}
</style>
