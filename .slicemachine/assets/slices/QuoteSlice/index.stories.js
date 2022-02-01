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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Ad consectetur minim sunt commodo laboris culpa. Do minim fugiat consequat commodo sunt culpa qui aliqua.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"quoteReference","name":"Quote Reference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Exercitation irure mollit id labore. Aliquip velit consectetur culpa eu ullamco et consectetur dolor qui enim sit quis.","spans":[]}],"reference":[{"type":"paragraph","text":"Id magna eiusmod mollit mollit incididunt magna incididunt. Et ad id eiusmod proident exercitation consectetur. Mollit consequat ut Lorem tempor dolore enim laborum nostrud elit ea est laboris.","spans":[]}]},"id":"_QuoteReference"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_QuoteReference.storyName = 'Quote Reference'
