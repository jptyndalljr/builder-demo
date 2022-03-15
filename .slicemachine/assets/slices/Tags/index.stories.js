import MyComponent from '../../../../slices/Tags';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Tags'
}


export const _Default = () => ({
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
      mock: {"variation":"default","name":"Default","slice_type":"tags","items":[{"tagType":"Client","tagName":"maximize front-end methodologies","caseStudy":false,"caseStudyLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"tagType":"Client","tagName":"transition end-to-end action-items","caseStudy":true,"caseStudyLink":{"link_type":"Web","url":"https://prismic.io"}},{"tagType":"Client","tagName":"harness plug-and-play convergence","caseStudy":false,"caseStudyLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"tagType":"Client","tagName":"reinvent world-class architectures","caseStudy":false,"caseStudyLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"tagType":"Media","tagName":"engage user-centric eyeballs","caseStudy":false,"caseStudyLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
