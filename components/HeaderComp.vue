<template>
	<header class="site-header">
		<p v-if="$store.state.menu === 'Please create a menu document'" class="logo">{{ $store.state.menu }}</p>
		<nuxt-link class="logo" to="/">{{ $prismic.asText($store.state.menu.title) }}</nuxt-link>
		<nav>
			<ul>
				<li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
					<prismic-link :field="menuLink.link">{{ $prismic.asText(menuLink.label) }}</prismic-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			document: {}
		}
	},
	async fetch() {
		this.document = await this.$prismic.api.getSingle('header');
	}
}
</script>
