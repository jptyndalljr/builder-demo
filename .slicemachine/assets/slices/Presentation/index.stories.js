import MyComponent from '../../../../slices/Presentation';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Presentation'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"presentation","items":[{"linkTitle":[{"type":"heading3","text":"Drive killer platforms","spans":[]}],"linkDescription":[{"type":"paragraph","text":"Id ex do cillum laborum et nisi sint.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},{"linkTitle":[{"type":"heading3","text":"Unleash end-to-end deliverables","spans":[]}],"linkDescription":[{"type":"paragraph","text":"Consectetur pariatur pariatur quis est aute laborum ut irure sint. Quis incididunt duis non nulla Lorem do laborum officia officia eu in consequat. Exercitation occaecat ea minim duis mollit nisi ea anim voluptate ex.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"}},{"linkTitle":[{"type":"heading3","text":"Enhance distributed action-items","spans":[]}],"linkDescription":[{"type":"paragraph","text":"Tempor incididunt ad occaecat reprehenderit proident do do aute ipsum eiusmod. Ea est cupidatat adipisicing veniam non fugiat.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},{"linkTitle":[{"type":"heading3","text":"Repurpose value-added web services","spans":[]}],"linkDescription":[{"type":"paragraph","text":"Occaecat sint consectetur labore eiusmod.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading1","text":"Strategize vertical niches","spans":[]}],"description":[{"type":"paragraph","text":"Ex excepteur anim enim velit officia reprehenderit adipisicing ullamco labore officia labore. Occaecat do mollit sit duis aliqua Lorem in enim. Pariatur quis occaecat veniam do amet esse Lorem Lorem.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
