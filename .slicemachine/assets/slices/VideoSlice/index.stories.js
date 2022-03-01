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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"video_slice","items":[],"primary":{"source":false,"videoid":"uGPC9wNTBbw","description":[{"type":"paragraph","text":"Velit laboris ad enim occaecat cillum exercitation est do qui nostrud eiusmod nostrud ea. In eiusmod deserunt pariatur. Dolore culpa nisi sit adipisicing dolor proident labore labore id.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
