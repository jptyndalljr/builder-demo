<template>
	<section class="footerArea">
		<div class="footer-logo bg-gray-300 flex justify-center">
			<img :src="logo" class="p-5" />
		</div>
		<div class="tri-grid bg-gray-500">
			<div class="col1 text-center md:text-left pt-8 md:pl-8">
				<span class="footer-text" v-html="columns.column1.content"></span>
			</div>
			<div class="col2 text-center md:text-left pt-8 md:pl-8">
				<div>
					<span class="footer-text" v-html="columns.column2.content"></span>
					<div class="flex social-media">
						<a href="https://instagram.com/22squared" target="_blank">
							<font-awesome-icon class="mr-8 cursor-pointer hover:text-22-sunrise" :icon="['fab', 'instagram-square']" size="2x" />
						</a>
						<a href="https://linkedin.com/22squared" target="_blank">
							<font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="mr-8 cursor-pointer hover:text-22-sunrise" />
						</a>
						<a href="https://facebook.com/22squared" target="_blank">
							<font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" class="mr-8 cursor-pointer hover:text-22-sunrise" />
						</a>
					</div>
				</div>
			</div>
			<div class="col3 text-center md:text-left mb-8 pt-8 md:pl-8">
				<nuxt-link to="/">Home</nuxt-link>
				<ul>
					<li v-for="(item, index) in this.menu" :key="index">
						<a :field="item.navItemLink" :target="item.navItemTarget === true ? '_blank' : '_self'">{{ item.navItemCopy }}</a>
					</li>
				</ul>
				<nuxt-link to="/sitemap.xml">Sitemap</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
  import { builder } from '@builder.io/sdk';

	builder.init('593f714c13a94bc4b37f7ab4a3062a50');

  export default {
    name: 'Footer',
    props: {
			logo: {
				type: Object,
			},
      columns: {
        type: Object,
      }
		},
    data() {
      return {
        doc: {},
        menu: {}
      }
    },
    async fetch() {
      builder
          .get('menu')
          .promise()
          .then(({ data }) => {
            this.doc = data;
            this.menu = data.navItem;
          });


      // const res = await this.$prismic.api.getSingle('footer');
      // const nav = await this.$prismic.api.getSingle('menu');
      // if (res) {
      // 	this.doc = res.data;
      // } else {
      // 	error({ statusCode: 404, message: 'Page not found' });
      // }
      // if (nav) {
      // 	this.menu = nav.data['menu-links'];
      // }
    }
  }
</script>

<style lang="scss">
.footer-logo img {
	width: 90px;
}

.tri-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	margin: 0 auto;
	gap: 1rem;
	color: #fff;
}

.social-media {
	justify-content: center;
}

.footer-text {
	p {
		margin-bottom: 25px;
		line-height: 15px;
	}
}

@media (min-width: 768px) {
	.social-media {
		justify-content: flex-start;
		max-width: 50%;
	}
}
</style>
