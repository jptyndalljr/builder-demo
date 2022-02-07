import MyComponent from '../../../../slices/QuoteSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/QuoteSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Adipisicing minim quis ad occaecat aliqua sit culpa. Velit nulla magna et dolore dolore sunt ipsum nostrud ullamco consequat.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => ({
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
      mock: {"variation":"quoteReference","name":"Quote Reference","slice_type":"quote_slice","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Est cupidatat reprehenderit Lorem laborum sint in nulla ut mollit elit do nisi fugiat nostrud veniam. Elit do excepteur dolor id aliqua deserunt aliquip fugiat quis.","spans":[]}],"Reference":[{"type":"paragraph","text":"Mollit qui proident aliquip occaecat. Incididunt culpa amet veniam non nostrud amet eu est ipsum consectetur amet qui occaecat excepteur. Voluptate consequat officia in occaecat quis excepteur veniam enim irure sunt.","spans":[]}]},"id":"_QuoteReference"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_QuoteReference.storyName = 'Quote Reference'
