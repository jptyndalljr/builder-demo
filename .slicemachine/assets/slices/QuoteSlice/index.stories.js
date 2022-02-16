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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Occaecat tempor cillum ullamco tempor est amet amet do.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"quoteReference","name":"Quote Reference","slice_type":"quote_slice","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Quis dolor qui eiusmod mollit enim excepteur deserunt in eu qui ipsum labore exercitation ut esse. Aliquip excepteur excepteur ea eu ullamco ea fugiat et sint est nostrud dolore. Nulla laborum dolore velit dolore aute exercitation ullamco dolor minim dolore est labore commodo ipsum id.","spans":[]}],"Reference":[{"type":"paragraph","text":"Aute anim magna nostrud in ad nisi magna irure ea mollit incididunt est est. Ex commodo in ad.","spans":[]}]},"id":"_QuoteReference"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_QuoteReference.storyName = 'Quote Reference'
