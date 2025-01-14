<template>
  <section class="">
    <header
      v-if="query.q && isSupported"
      class="mt-4"
      :class="isAllView ? 'mb-10' : 'mb-8'"
    >
      <VSearchResultsTitle
        class="leading-10"
        :size="isAllView ? 'large' : 'default'"
      >
        {{ query.q }}
      </VSearchResultsTitle>
    </header>

    <slot name="media" />

    <VMetaSearchForm
      v-if="!fetchState.isFetching"
      :type="metaSearchFormType"
      :noresult="noresult"
      :query="query"
      :supported="isSupported"
    />
  </section>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'
import { supportedContentTypes } from '~/constants/media'

import VMetaSearchForm from '~/components/VMetaSearch/VMetaSearchForm.vue'

export default {
  name: 'VSearchGrid',
  components: { VMetaSearchForm },
  props: {
    supported: {
      type: Boolean,
      required: true,
    },
    query: {
      type: Object,
      required: true,
    },
    searchType: {
      type: String,
      required: true,
    },
    fetchState: {
      required: true,
    },
    resultsCount: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const noresult = computed(() => {
      // noresult is hard-coded for search types that are not currently
      // supported by Openverse built-in search
      return props.supported
        ? props.query.q !== '' && props.resultsCount === 0
        : false
    })
    const isSupported = computed(() => {
      return supportedContentTypes.includes(props.searchType)
    })
    const metaSearchFormType = computed(() => {
      return props.searchType === 'all' ? 'image' : props.searchType
    })
    const isAllView = computed(() => {
      return props.searchType === 'all'
    })

    return {
      noresult,
      isSupported,
      metaSearchFormType,
      isAllView,
    }
  },
}
</script>
