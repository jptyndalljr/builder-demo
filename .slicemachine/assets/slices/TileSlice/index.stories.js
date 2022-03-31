import MyComponent from '../../../../slices/TileSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TileSlice'
}


export const _Default = () => ({
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
      mock: {"variation":"default","name":"Default","slice_type":"tile_slice","items":[{"TileContent":[{"type":"paragraph","text":"Sint in dolor incididunt ad voluptate aliquip est proident ipsum eiusmod. Excepteur est ut commodo irure dolor nostrud esse.","spans":[]}]},{"TileContent":[{"type":"paragraph","text":"Aliqua culpa qui ad excepteur. Et ea culpa elit labore sint do. Laboris culpa minim magna.","spans":[]}]}],"primary":{},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
