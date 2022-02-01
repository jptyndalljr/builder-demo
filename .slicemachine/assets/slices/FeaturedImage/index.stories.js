import MyComponent from '../../../../slices/FeaturedImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FeaturedImage'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"featured_image","items":[],"primary":{"title":[{"type":"heading2","text":"Brand extensible convergence","spans":[]}],"headline":[{"type":"heading3","text":"Recontextualize frictionless blockchains","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":"transition visionary methodologies","featuredImage":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=727&h=402&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
