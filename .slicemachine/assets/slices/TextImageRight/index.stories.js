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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"paragraph","text":"Incididunt minim cillum occaecat ad esse amet. Ut officia tempor sit pariatur elit enim nisi pariatur consectetur velit consectetur laborum consectetur. Ad nulla aliquip consectetur consectetur occaecat pariatur adipisicing elit qui.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
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
      mock: {"variation":"textImageLeft","name":"TextImageLeft","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"paragraph","text":"Est aliqua aute dolor quis. Nulla eiusmod cupidatat deserunt id proident ad ullamco et excepteur adipisicing minim.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"}},"id":"_TextImageLeft"}
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
      mock: {"variation":"titleImage","name":"TitleImage","slice_type":"text_image_right","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"title":[{"type":"heading2","text":"Optimize user-centric relationships","spans":[]}]},"id":"_TitleImage"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TitleImage.storyName = 'TitleImage'
