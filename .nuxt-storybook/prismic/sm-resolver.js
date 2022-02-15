import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/Users/richard.tuttle/Desktop/repos/22squared-website-static/slices/${sliceName}.vue`), import(`/Users/richard.tuttle/Desktop/repos/22squared-website-static/slices/${sliceName}/index.vue`), import(`/Users/richard.tuttle/Desktop/repos/22squared-website-static/slices/${sliceName}/index.js`), import(`/Users/richard.tuttle/Desktop/repos/22squared-website-static/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
