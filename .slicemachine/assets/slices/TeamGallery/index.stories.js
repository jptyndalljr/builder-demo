import MyComponent from '../../../../slices/TeamGallery';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TeamGallery'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"team_gallery","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"name":"redefine compelling systems","position":"enable granular e-services"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"},"name":"utilize world-class mindshare","position":"redefine dynamic e-services"}],"primary":{"title":[{"type":"heading1","text":"Incentivize 24/7 applications","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
