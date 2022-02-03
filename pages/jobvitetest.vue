<template>
	<div>
		<p>This is a test of Jobvite integration....</p>
		<p class="text-yellow" v-if="$fetchState.pending">Fetching job data....</p>
		<p class="text-orange" v-else-if="$fetchState.error">AN ERROR OCCURRED!</p>
		<div v-else>
			<div v-if="data.total !== 0">
			Total number of data points fetched: {{ data.total }}
				<div class="my-5 px-5 bg-gray-500" v-for="(job, index) in data.requisitions" :key="index">
					<h3>{{ job.title }}</h3>
					Category: {{ job.category }}<br />
					Closing Date: {{ timeConvert(job.closeDate) }}<br />
					Department: {{ job.department }}<br />
					Description: <span v-html="job.description"></span><br />
					Job Location(s): <span v-for="(loc, index) in job.jobLocations" :key="index">{{ loc.city }}<span v-if="job.jobLocations !== 1">, </span></span><br />
					Region: {{ job.region }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: []
		}
	},
	async fetch() {
		this.data = await fetch('https://api.jobvite.com/api/v2/job?api=22squared_api_key&sc=3dcb08c8d71912fe583444382bcbc135').then(res => res.json());
	},
	methods: {
		timeConvert(ts) {
			let info = new Date(ts).toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'utc'});
			return info;
		}
	}
}
</script>
