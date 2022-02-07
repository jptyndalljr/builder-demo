<template>
	<header class="site-header">
		<p v-if="menulist.menu === 'Please create a menu document'" class="logo">{{ $store.state.menu }}</p>
		<!-- <nuxt-link class="logo" to="/">Home</nuxt-link>
		<nav>
			<ul>
				<li v-for="(menuLink, index) in menulist.menu-links" :key="index">
					<prismic-link :field="menuLink.link">{{ $prismic.asText(menuLink.label) }}</prismic-link>
				</li>
			</ul>
		</nav> -->
	</header>
</template>

<script>
export default {
	data() {
		return {
			document: {},
			menulist: this.$store.state.menu,
		}
	},
	async fetch() {
		this.document = await this.$prismic.api.getSingle('header');
	}
}
</script>
