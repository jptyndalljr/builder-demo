import MyComponent from '../../../../slices/TextSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Ipsum dolor sit ipsum velit irure dolore occaecat deserunt. Et occaecat nostrud sit dolore nisi Lorem laborum in eiusmod ex cillum cillum adipisicing reprehenderit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => ({
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
      mock: {"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Sint et consequat dolor in non.","spans":[]}]},"id":"_TwoColumn"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TwoColumn.storyName = 'Two Column'
