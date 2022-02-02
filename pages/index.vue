<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
	<section>
		<slice-zone type="text-with-image" uid="title-text-can-go-here" />
	</section>
</template>

<script>
import SliceZone from "vue-slicezone";
export default {
	name: "Homepage",
	components: {
		SliceZone,
	},
};
</script>
