import MyComponent from '../../../../slices/BannerSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BannerSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Engineer out-of-the-box communities","spans":[]}],"description":[{"type":"paragraph","text":"Minim anim proident cillum laborum culpa ut nostrud ipsum. Nostrud ex qui cupidatat quis. In dolore ad in voluptate qui sint nisi.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":"implement sexy e-commerce","background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _FullHeight = () => ({
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
      mock: {"variation":"fullHeight","name":"Full Height","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Brand integrated networks","spans":[]}],"description":[{"type":"paragraph","text":"Exercitation ipsum ipsum proident culpa deserunt consectetur commodo aliquip cillum culpa consectetur ad sit do sit.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"extend open-source technologies","background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"}},"id":"_FullHeight"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullHeight.storyName = 'Full Height'
