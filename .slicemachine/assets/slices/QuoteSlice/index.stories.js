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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Tempor et consectetur mollit excepteur occaecat duis aliquip cillum aute culpa ipsum. Dolor fugiat cillum est labore. Deserunt laborum cupidatat Lorem ad incididunt fugiat eiusmod magna laborum occaecat tempor est est.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"quoteReference","name":"Quote Reference","slice_type":"quote_slice","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Qui aute nisi adipisicing exercitation aute ad elit cillum quis non nulla fugiat consequat incididunt. Est cillum do eu deserunt laborum veniam sunt id. Labore quis do nisi nulla proident.","spans":[]}],"Reference":[{"type":"paragraph","text":"Pariatur commodo sint tempor qui esse in excepteur id et cupidatat aliqua sunt exercitation adipisicing. Proident irure est ut dolor anim adipisicing qui commodo.","spans":[]}]},"id":"_QuoteReference"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_QuoteReference.storyName = 'Quote Reference'
