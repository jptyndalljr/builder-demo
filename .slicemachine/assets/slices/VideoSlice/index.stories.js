import MyComponent from '../../../../slices/VideoSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/VideoSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"video_slice","items":[],"primary":{"source":true,"videoid":"uGPC9wNTBbw","description":[{"type":"paragraph","text":"Exercitation velit labore consectetur proident.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
