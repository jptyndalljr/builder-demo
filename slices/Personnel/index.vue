<template>
  <section class="personnel-section">
	  <div class="flex flex-row wrap justify-center items-center" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
		  <div class="my-8">
			  <div class="employee-img mx-auto" :style="{ backgroundImage: 'url(' + item.employee.url + ')' }"></div>
			  <div class="employee-name">{{ item.name }}</div>
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
	width: 13rem;
	height: 13rem;
	background-size: cover;
	filter: grayscale(100%);
}

.employee-name {
	font-size: 1.25em;
	font-weight: 900;
	text-align: center;
	text-transform: capitalize;
}

.employee-title {
	text-align: center;
	text-transform: capitalize;
}
</style>
