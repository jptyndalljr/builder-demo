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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Exploit frictionless deliverables","spans":[]}],"description":[{"type":"paragraph","text":"Qui consectetur minim commodo magna Lorem sit in est sint. Cillum anim culpa occaecat eiusmod laborum consectetur.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"},"linkLabel":"Click Me!","background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1435575653489-b0873ec954e2?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
