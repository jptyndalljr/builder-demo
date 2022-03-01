import MyComponent from '../../../../slices/Button';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Button'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"button","items":[],"primary":{"text":"CLICK ME!","link":{"link_type":"Web","url":"http://twitter.com"},"target":false},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _ButtonCenterAligned = () => ({
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
      mock: {"variation":"buttonCenterAligned","name":"Button center aligned","slice_type":"button","items":[],"primary":{"text":"mesh dynamic initiatives","link":{"link_type":"Web","url":"https://prismic.io"},"target":false},"id":"_ButtonCenterAligned"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ButtonCenterAligned.storyName = 'Button center aligned'

export const _ButtonRightAligned = () => ({
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
      mock: {"variation":"buttonRightAligned","name":"Button right aligned","slice_type":"button","items":[],"primary":{"text":"extend intuitive architectures","link":{"link_type":"Web","url":"http://twitter.com"},"target":false},"id":"_ButtonRightAligned"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ButtonRightAligned.storyName = 'Button right aligned'
