import MyComponent from '../../../../slices/Accordion';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Accordion'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"title":"generate cutting-edge initiatives","content":[{"type":"paragraph","text":"Fugiat adipisicing consectetur ullamco dolore Lorem proident sint sint.","spans":[]}]},{"title":"productize sticky e-markets","content":[{"type":"paragraph","text":"Lorem magna incididunt voluptate aliqua sit minim et esse commodo Lorem incididunt amet eiusmod et.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
