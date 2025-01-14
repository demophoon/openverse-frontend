<template>
  <div class="global-audio sticky sm:hidden bottom-0">
    <VGlobalAudioTrack v-if="audio" layout="global" :audio="audio" />
    <VIconButton
      v-if="audio"
      class="absolute top-0 rtl:left-0 ltr:right-0 border-none z-10"
      :icon-props="{ iconPath: icons.closeIcon }"
      @click="handleClose"
    />
  </div>
</template>

<script>
import { useStore, useRoute, watch, computed } from '@nuxtjs/composition-api'

import { ACTIVE } from '~/constants/store-modules'
import {
  SET_MESSAGE,
  EJECT_ACTIVE_MEDIA_ITEM,
} from '~/constants/mutation-types'

import closeIcon from '~/assets/icons/close-small.svg'
import { useActiveAudio } from '~/composables/use-active-audio'

export default {
  name: 'VGlobalAudioSection',
  setup() {
    const store = useStore()
    const route = useRoute()

    const activeAudio = useActiveAudio()

    /* Active audio track */

    const audio = computed(() => {
      const trackId = store.state.active.id
      if (trackId) {
        return store.state.media.results.audio.items[trackId]
      }
      return null
    })

    /* Message */

    const handleError = (event) => {
      const error = event.target.error
      let errorMsg
      switch (error.code) {
        case error.MEDIA_ERR_ABORTED:
          errorMsg = 'err_aborted'
          break
        case error.MEDIA_ERR_NETWORK:
          errorMsg = 'err_network'
          break
        case error.MEDIA_ERR_DECODE:
          errorMsg = 'err_decode'
          break
        case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          errorMsg = 'err_unsupported'
          break
      }
      store.commit(`${ACTIVE}/${SET_MESSAGE}`, {
        message: errorMsg,
      })
    }

    watch(
      activeAudio.obj,
      (audio, _, onInvalidate) => {
        if (!audio) return
        audio.addEventListener('error', handleError)

        onInvalidate(() => {
          audio.removeEventListener('error', handleError)
        })
      },
      { immediate: true }
    )

    const handleClose = () => {
      store.commit(`${ACTIVE}/${EJECT_ACTIVE_MEDIA_ITEM}`)
    }

    /* Router observation */

    const routeName = computed(() => route.value.name)
    watch(routeName, (routeNameVal, oldRouteNameVal) => {
      if (
        oldRouteNameVal.includes('audio') &&
        !routeNameVal.includes('audio')
      ) {
        activeAudio.obj.value?.pause()
        store.commit(`${ACTIVE}/${EJECT_ACTIVE_MEDIA_ITEM}`)
      }
    })

    return {
      icons: {
        closeIcon,
      },

      audio,

      handleError,
      handleClose,
    }
  },
}
</script>
