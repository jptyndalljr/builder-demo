import MyComponent from '../../../../slices/CaseStudies';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CaseStudies'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"case_studies","items":[{"type":"grow synergistic paradigms","subType":"grow next-generation applications","headline":"extend vertical partnerships","description":[{"type":"paragraph","text":"Duis elit ad ea nisi eiusmod ullamco. Magna anim ad fugiat exercitation ea excepteur laborum elit proident ut ullamco sit. Nisi excepteur id voluptate ullamco nisi nostrud sint eu quis qui reprehenderit laborum.","spans":[]}],"embedMedia":{"url":"https://twitter.com/prismicio/status/1356293316158095361","author_name":"Prismic","author_url":"https://twitter.com/prismicio","html":"<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Gatsby is a popular choice for Prismic users and we work hard on delivering a CMS that plays to its strengths.<br><br>But, what makes <a href=\"https://twitter.com/GatsbyJS?ref_src=twsrc%5Etfw\">@GatsbyJS</a> so popular?<br><br>Here are some of <a href=\"https://twitter.com/mxstbr?ref_src=twsrc%5Etfw\">@mxstbr</a>&#39;s thoughts on Gatsby&#39;s success and how they&#39;re improving developer experience.<a href=\"https://t.co/ZjCPvsWWUD\">https://t.co/ZjCPvsWWUD</a> <a href=\"https://t.co/EQqzJpeNKl\">pic.twitter.com/EQqzJpeNKl</a></p>&mdash; Prismic (@prismicio) <a href=\"https://twitter.com/prismicio/status/1356293316158095361?ref_src=twsrc%5Etfw\">February 1, 2021</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n","width":550,"height":null,"type":"rich","cache_age":"3153600000","provider_name":"Twitter","provider_url":"http://www.twitter.com/","version":"1.0"}},{"type":"embrace next-generation convergence","subType":"drive transparent architectures","headline":"exploit interactive e-markets","description":[{"type":"paragraph","text":"Mollit dolore nisi cupidatat laborum reprehenderit ut cillum anim duis velit. Anim qui pariatur commodo in occaecat veniam laboris tempor quis ullamco. Ipsum culpa consequat ullamco deserunt eiusmod consectetur consectetur magna dolore sint minim.","spans":[]}],"embedMedia":{"title":"Introducing Slice Machine","author_name":"Prismic","author_url":"https://www.youtube.com/channel/UCJq6AEgtWeZt7ziQ-fLKOeA","type":"video","height":113,"width":200,"version":"1.0","provider_name":"YouTube","provider_url":"https://www.youtube.com/","thumbnail_height":360,"thumbnail_width":480,"thumbnail_url":"https://i.ytimg.com/vi/iewZXv94XGY/hqdefault.jpg","html":"<iframe width=\"200\" height=\"113\" src=\"https://www.youtube.com/embed/iewZXv94XGY?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"}}],"primary":{"title":[{"type":"heading1","text":"Strategize customized bandwidth","spans":[]}],"description":[{"type":"paragraph","text":"Magna consectetur labore quis do tempor qui nostrud. Est sunt sit enim cupidatat sit id proident veniam.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
