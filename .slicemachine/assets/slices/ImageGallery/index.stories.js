import MyComponent from '../../../../slices/ImageGallery';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageGallery'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_gallery","items":[{"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=727&h=402&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Id ipsum non in minim do laborum enim culpa fugiat laboris do aliquip. Veniam ullamco sint nulla proident sint cillum minim. Elit excepteur dolor irure adipisicing adipisicing exercitation dolore.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"},"linkLabel":"architect real-time interfaces"},{"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=727&h=402&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Qui laborum exercitation voluptate reprehenderit ullamco reprehenderit enim. Sunt eiusmod eu esse amet ipsum ut id irure culpa veniam enim ipsum eiusmod.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":"syndicate transparent applications"},{"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=727&h=402&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Laboris elit ullamco aliquip reprehenderit laboris sint dolor aliqua deserunt id adipisicing tempor est magna reprehenderit. Qui officia labore enim incididunt cillum occaecat aliquip incididunt. Nulla cupidatat cupidatat reprehenderit incididunt officia eu et.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":"optimize efficient blockchains"}],"primary":{"galleryTitle":[{"type":"heading2","text":"Iterate e-business interfaces","spans":[]}],"galleryDescription":[{"type":"paragraph","text":"Tempor quis non reprehenderit occaecat sit sit enim proident fugiat ipsum excepteur consectetur.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
