import MyComponent from '../../../../slices/HeroBannerSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroBannerSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Evolve virtual vortals","spans":[]}],"description":[{"type":"paragraph","text":"Qui laboris magna labore tempor ad sit commodo velit. Commodo ea elit voluptate cupidatat. Dolore sit pariatur ullamco elit laboris dolore.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"Go somewhere"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'