<template>
	<div class="mx-auto">
		<header-comp />
		<Nuxt />
		<footer-comp />
	</div>
</template>

<script>
import HeaderComp from '~/components/HeaderComp.vue';
import FooterComp from '~/components/FooterComp.vue';

export default {
	components: {
		HeaderComp,
		FooterComp
	},
	head() {
		return {
			title: '22Squared',
		}
	}
}
</script>
