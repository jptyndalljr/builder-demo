<template>
	<section id="main">
		<slice-zone type="homepage" uid="homepage" queryType="single" />
	</section>
</template>

<script>
import SliceZone from "vue-slicezone";
export default {
	components: {
		SliceZone,
	},
};
</script>

<style lang="scss" scoped>
p {
	margin-bottom: 15px;
}
</style>
