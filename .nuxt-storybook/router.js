import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a029aca = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _25fed494 = () => interopDefault(import('../pages/jobvitetest.vue' /* webpackChunkName: "pages/jobvitetest" */))
const _34cdb5e8 = () => interopDefault(import('../pages/slice-simulator.vue' /* webpackChunkName: "pages/slice-simulator" */))
const _37f82595 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _e2a03dc4 = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _6a029aca,
    name: "prismic-preview"
  }, {
    path: "/jobvitetest",
    component: _25fed494,
    name: "jobvitetest"
  }, {
    path: "/slice-simulator",
    component: _34cdb5e8,
    name: "slice-simulator"
  }, {
    path: "/",
    component: _37f82595,
    name: "index"
  }, {
    path: "/:uid",
    component: _e2a03dc4,
    name: "uid"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
