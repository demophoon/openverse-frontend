<template>
  <NuxtLink
    itemprop="contentUrl"
    :title="image.title"
    :to="localePath('/image/' + image.id)"
    class="group block focus:bg-white focus:ring focus:ring-pink focus:outline-none focus:shadow-ring focus:text-black rounded-sm"
    @click="onGotoDetailPage($event, image)"
  >
    <figure
      itemprop="image"
      itemscope=""
      itemtype="https://schema.org/ImageObject"
      class="aspect-square relative rounded-sm"
    >
      <img
        ref="img"
        class="w-full h-full object-cover rounded-sm"
        loading="lazy"
        :alt="image.title"
        :src="getImageUrl(image)"
        :width="image.width"
        :height="image.height"
        itemprop="thumbnailUrl"
        @error="onImageLoadError($event, image)"
      />
      <figcaption
        class="absolute left-0 bottom-0 invisible group-hover:visible group-focus:visible bg-white p-1"
      >
        <span class="sr-only">{{ image.title }}</span>
        <VLicense
          :license="image.license"
          :bg-filled="true"
          :hide-name="true"
        />
      </figcaption>
    </figure>
  </NuxtLink>
</template>

<script>
import VLicense from '~/components/License/VLicense.vue'
const errorImage = require('~/assets/image_not_available_placeholder.png')

const toAbsolutePath = (url, prefix = 'https://') => {
  if (url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0) {
    return url
  }
  return `${prefix}${url}`
}

export default {
  name: 'VImageCell',
  components: { VLicense },
  props: ['image'],
  methods: {
    getImageUrl(image) {
      if (!image) return ''
      const url = image.thumbnail || image.url
      return toAbsolutePath(url)
    },
    getImageForeignUrl(image) {
      return toAbsolutePath(image.foreign_landing_url)
    },
    onImageLoadError(event, image) {
      const element = event.target
      if (element.src !== image.url) {
        element.src = image.url
      } else {
        element.src = errorImage
      }
    },
    onFocusLeave(event) {
      this.$emit('focus-leave', event)
    },
  },
}
</script>
