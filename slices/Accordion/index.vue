<template>
  <section class="accordion-area mx-5">
	  <div class="tabs">
		<div class="tab p-3" v-for="(item, i) in slice.items" :key="`slice-item-${i}`" role="presentation">
			<!-- <input type="checkbox" :id="`chck${i}`" /> -->
			<input type="radio" :id="`rd${i}`" name="rd" />
			<!-- <label class="tab-label" :for="`chck${i}`">{{ accordnum(i) }}. {{ item.title }}</label> -->
			<label class="tab-label" :for="`rd${i}`">{{ accordnum(i) }}. {{ item.title }}</label>
			<prismic-rich-text :field="item.content" class="tab-content" />
		</div>
	  </div>
  </section>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {
			active: false,
		}
      },
	},
  },
  methods: {
	  accordnum(i) {
		  return i + 1;
	  }
  }
}
</script>

<style scoped lang="scss">
input {
	position: absolute;
	opacity: 0;
	z-index: -1;
}

.tabs {
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}

.tab {
	width: 100%;
	color: white;
	overflow: hidden;
	&-label {
		display: flex;
		justify-content: space-between;
		padding: 1em;
		background: gray;
		font-weight: bold;
		cursor: pointer;
		text-transform: capitalize;
		&:hover {
			background: darken(gray, 10%);
		}
		&::after {
			content: "\276F";
			width: 1em;
			height: 1em;
			text-align: center;
			transition: all .35s;
		}
	}
	&-content {
		max-height: 0;
		padding: 0 1em;
		transition: all .35s;
	}
}

input:checked {
	+ .tab-label {
		background: darken(gray, 10%);
		&::after {
			transform: rotate(90deg);
		}
	}
	~ .tab-content {
		max-height: 100vh;
		padding: 1em;
		color: black;
	}
}
</style>
