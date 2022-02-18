import MyComponent from '../../../../slices/VideoSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/VideoSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"video_slice","items":[],"primary":{"video":{"type":"video","version":"1.0","provider_name":"Vimeo","provider_url":"https://vimeo.com/","title":"22_LA Pride_Launch Video.mp4","author_name":"22Squared","author_url":"https://vimeo.com/22squared","is_plus":"0","account_type":"business","html":"<iframe src=\"https://player.vimeo.com/video/591644655?h=7f75685a61&amp;app_id=122963\" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen title=\"22_LA Pride_Launch Video.mp4\"></iframe>","width":640,"height":360,"duration":15,"description":"This video shows all the work 22squared did for the LA Pride Launch.","thumbnail_url":"https://i.vimeocdn.com/video/1223007501-fcb2a1dbfe1e655125361d0623e8e4312a15237d31033a6d918b112ecaa04feb-d_640","thumbnail_width":640,"thumbnail_height":360,"thumbnail_url_with_play_button":"https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1223007501-fcb2a1dbfe1e655125361d0623e8e4312a15237d31033a6d918b112ecaa04feb-d_640&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png","upload_date":"2021-08-24 11:12:04","video_id":591644655,"uri":"/videos/591644655"},"description":[{"type":"paragraph","text":"Ad eiusmod ea dolor mollit velit exercitation nostrud ut in magna commodo.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
