import MyComponent from '../../../../slices/Button';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Button'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"button","items":[],"primary":{"text":"CLICK ME!","link":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
