<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
	<div>
		<template v-if="locked">
			<div>
				<div class="container h-screen grid place-items-center">
					<div class="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4 bg-gray-50 mx-auto p-6">
						<form v-on:submit.prevent="validateBeforeSubmit">
							<div class="text-left mb-3 pt-0 text-gray-600">
								<label class="text-lg">Password</label>
								<input
									class="px-3 py-4 placeholder-gray-300 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
									type="password"
									name="password"
									v-model.trim="password"
								/>
								<span class="error help-block"></span>
							</div>
							<div class="text-red-600" v-if="error"><p>Incorrect password.</p></div>
							<button class="btn btn-primary" type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</template>
		<template v-else>
			<slice-zone type="page" :uid="$route.params.uid" />
		</template>
	</div>
</template>

<script>
import SliceZone from 'vue-slicezone';

export default {
	name: 'Homepage',
	data() {
		return {
			error: null,
			password: null,
			locked: true,
		};
	},
	async asyncData({ $prismic, params, error }) {
		const document = await $prismic.api.getByUID('page', params.uid);
		if (document) {
			return { document };
		} else {
			error({ statusCode: 404, message: 'Page not found' });
		}
	},
	components: {
		SliceZone,
	},
	methods: {
		validateBeforeSubmit() {
			console.log(this.document.data.clientPassword);
			if (this.password === this.document.data.clientPassword) {
				this.error = false;
				this.locked = false;
			} else {
				this.error = true;
			}
		},
	},
};
</script>
<style scoped>
.btn {
	@apply bg-transparent border border-solid font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150;
}
.btn-primary {
	@apply text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white;
}
</style>
