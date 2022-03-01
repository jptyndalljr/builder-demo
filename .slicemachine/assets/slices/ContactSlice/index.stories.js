import MyComponent from '../../../../slices/ContactSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContactSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"contact_slice","items":[],"primary":{"header1":"Hire Us","btnText1":"transition 24/7 e-commerce","link1":{"link_type":"Web","url":"mailto:richard.tuttle@22squared.com"},"header2":"exploit holistic e-commerce","btnText2":"harness web-enabled partnerships","link2":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
