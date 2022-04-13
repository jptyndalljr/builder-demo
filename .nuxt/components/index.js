export { default as BuilderBlockStyles } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/components/block-styles.vue'
export { default as BuilderErrorBoundary } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/components/error-boundary.vue'
export { default as BuilderRenderBlock } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/components/render-block.vue'
export { default as BuilderRenderBlocks } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/components/render-blocks.vue'
export { default as BuilderRenderContent } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/components/render-content.vue'
export { default as BuilderButton } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/button.vue'
export { default as BuilderColumns } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/columns.vue'
export { default as BuilderCustomCode } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/custom-code.vue'
export { default as BuilderEmbed } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/embed.vue'
export { default as BuilderForm } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/form.vue'
export { default as BuilderFragment } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/fragment.vue'
export { default as BuilderImage } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/image.vue'
export { default as BuilderImg } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/img.vue'
export { default as BuilderInput } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/input.vue'
export { default as BuilderRawText } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/raw-text.vue'
export { default as BuilderSection } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/section.vue'
export { default as BuilderSelect } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/select.vue'
export { default as BuilderSubmitButton } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/submit-button.vue'
export { default as BuilderSymbol } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/symbol.vue'
export { default as BuilderText } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/text.vue'
export { default as BuilderTextarea } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/textarea.vue'
export { default as BuilderVideo } from '../../node_modules/@builder.io/sdk-vue/nuxt2/src/blocks/video.vue'
export { default as Button } from '../../components/Button.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HelloWorld } from '../../components/HelloWorld.vue'
export { default as HeroBanner } from '../../components/HeroBanner.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
