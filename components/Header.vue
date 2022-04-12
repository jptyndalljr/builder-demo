<template>
	<header class="site-header">
		<nav class="hidden md:flex">
			<ul
				class="desktop md:flex md:flex-row md:grow md:justify-between md:space-between md:items-center px-8 w-full">
				<div
					class="flex flex-[5] flex-row justify-between space-between items-center px-8">
					<li
						class="nav-link p-5"
						v-for="(item, index) in splitLinks.beforeLinks"
						:key="index"
						:class="index == list ? 'inline-flex' : ''">
						<a
							:href="item.navItemLink"
							:target="item.navItemTarget === true ? '_blank' : '_self'">
							<span class="main-nav-link">{{
								item.navItemCopy
							}}</span>
						</a>
					</li>
				</div>
				<li
					class="flex flex-[2] flex-row justify-center w-12 p-8 relative">
					<nuxt-link to="/" class="absolute top-0 logo"
						><img
							:src="logo"
							class="nav-logo"
					/></nuxt-link>
				</li>
				<div
					class="flex flex-[5] flex-row justify-between space-between items-center px-8">
					<li
						class="nav-link p-5"
						v-for="(item, index) in splitLinks.afterLinks"
						:key="index"
						:class="index == list ? 'inline-flex' : ''">
						<a
							:href="item.navItemLink"
							:target="item.navItemTarget === true ? '_blank' : '_self'">
							<span class="main-nav-link">{{
								item.navItemCopy
							}}</span>
						</a>
					</li>
				</div>
			</ul>
		</nav>
		<nav class="flex flex-row justify-between md:hidden relative">
			<nuxt-link to="/" class="p-3"
				><img :src="logo" class="nav-logo"
			/></nuxt-link>
			<font-awesome-icon
				class="menu-toggle p-6 z-50"
				@click="toggle"
				:icon="toggleIcon"
				size="2x" />
			<ul
				class="md:flex absolute bg-white h-screen w-48 translate-x-full right-0 z-0 transition-transform duration-300 menu"
				:class="{ toggled: toggled }">
				<li
					class="nav-link p-5"
					v-for="(item, index) in this.menuList"
					:key="index"
					:class="index == list ? 'inline-flex' : ''">
					<a
							:href="item.navItemLink"
							:target="item.navItemTarget === true ? '_blank' : '_self'">
							<span class="main-nav-link">{{
								item.navItemCopy
							}}</span>
          </a>
				</li>
			</ul>
		</nav>
		<div id="cover"></div>
	</header>
</template>

<script>
	import { builder } from '@builder.io/sdk';

	builder.init('593f714c13a94bc4b37f7ab4a3062a50');

	export default {
		name: 'Header',
    props: {
			logo: {
				type: Object,
			},
		},
		data() {
			return {
				nav: {},
				menuList: {},
				toggled: false,
				toggleIcon: ['fas', 'bars'],
			};
		},
		async fetch() {
			builder
				.get('menu')
				.promise()
				.then(({ data }) => {
					this.nav = data;
					this.menuList = data.navItem;
				});
		},
		computed: {
			list() {
				let ml = this.menuList.length;
				return Math.ceil(ml / 2) - 1;
			},
			splitLinks() {
				let ml = this.menuList.length;
				let length = Math.ceil(ml / 2);
				let links = {
					beforeLinks: [],
					afterLinks: [],
				};
				for (let i = 0; i < length; i++) {
					links.beforeLinks.push(this.menuList[i]);
				}
				for (let i = length; i < ml; i++) {
					links.afterLinks.push(this.menuList[i]);
				}
				return links;
			},
		},
		methods: {
			toggle() {
				this.toggled = !this.toggled;
				document.querySelector('html').style.overflowY = this.toggled
					? 'hidden'
					: 'visible';
				document.querySelector('body').style.overflowY = this.toggled
					? 'hidden'
					: 'visible';
				document.getElementById('cover').classList.toggle('covering');
				let menu = ['fas', 'bars'];
				let close = ['fas', 'times'];
				this.toggleIcon = this.toggled ? close : menu;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.main-nav-link {
		font-weight: bold;
	}

	.logo {
		background-color: #fff;
		padding: 20px;
		border: 4px solid #000;
	}

	.nav-logo {
		width: 60px;
	}

	nav > .desktop {
		border-bottom: 10px solid black;
	}

	.toggled {
		transform: translateX(0) !important;
		z-index: 40;
	}

	#cover {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		height: 0;
		width: 0;
		z-index: -1;
	}

	#cover.covering {
		display: block;
		height: 100%;
		width: 100%;
		z-index: 30;
		background-color: rgba(0, 0, 0, 30%);
	}

	.menu-toggle {
		width: 30px;
		height: 30px;
	}
</style>
