import MyComponent from '../../../../slices/TextImageRight';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextImageRight'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"paragraph","text":"Anim et ullamco officia nostrud labore incididunt veniam labore.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _TextImageLeft = () => ({
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
      mock: {"variation":"textImageLeft","name":"TextImageLeft","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"paragraph","text":"Reprehenderit ad enim mollit esse Lorem commodo cupidatat velit labore. Qui anim pariatur occaecat enim.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"}},"id":"_TextImageLeft"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextImageLeft.storyName = 'TextImageLeft'

export const _TitleImage = () => ({
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
      mock: {"variation":"titleImage","name":"TitleImage","slice_type":"text_image_right","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1433888104365-77d8043c9615?w=900&h=500&fit=crop"},"title":[{"type":"heading2","text":"Transition granular e-tailers","spans":[]}]},"id":"_TitleImage"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TitleImage.storyName = 'TitleImage'
