<template>
	<div>
		<!--[if lt IE 11]>
        <div class="bg-yellow-300 rounded-2xl p-5 text-black shadow-lg">
          <div class="container max-w-7xl">
            <button class="" aria-hidden="true" data-dismiss="alert" type="button" aria-label="close">x</button>
            <strong>You're using an unsupported browser and this site's functionality is greatly reduced.</strong>
            <p><a href="https://www.microsoft.com/en-us/edge/features?form=MY01RZ&OCID=MY01RZ" target="_blank" rel="noopener noreferrer" class="text-red-500">Upgrade to Edge</a> or install a <a href="https://browsehappy.com" target="_blank" rel="nopener noreferrer" class="text-red-500">modern browser</a>, or contact your System Administrator.</p>
          </div>
        </div>
      <![endif]-->
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
