<template>
	<section class="personnel-section">
		<div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
			<div class="my-8 md:text-center" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
				<div class="employee-img mx-auto" :style="{ backgroundImage: 'url(' + item.employee.url + ')' }"></div>
				<div class="h3 employee-name">{{ item.name }}</div>
				<div class="employee-title"><em>{{ item.title }}</em></div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: "Personnel",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped lang="scss">
.employee-img {
	border-radius: 50%;
	overflow: hidden;
	border: 5px solid #000;
	width: 10rem;
	height: 10rem;
	background-size: cover;
	filter: grayscale(100%);
	background-position: center center;
}

.employee-name {
	font-weight: 900;
	text-align: center;
	text-transform: capitalize;
}

.employee-title {
	text-align: center;
	text-transform: capitalize;
}

@media (min-width: 768px) {
	.employee-img {
		width: 13rem;
		height: 13rem;
	}

	.employee-name {
		font-size: 1.25em;
	}
}
</style>
