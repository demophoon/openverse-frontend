<template>
  <div>
    <h5 class="mb-4 text-base md:text-2xl font-semibold">
      {{ $t('media-details.reuse.copy-license.title') }}
    </h5>

    <nav class="flex borber-b-none" role="tablist">
      <button
        v-for="(tab, idx) in tabs"
        :key="idx"
        role="tab"
        :aria-controls="`tab-${tab}`"
        :aria-selected="activeTab === tab"
        class="py-3 md:py-4 px-4 md:px-6 border-t border-x rounded-t-sm bg-white text-sm md:text-base font-semibold relative focus:border-tx focus:outline-none focus:shadow-[0_0_0_1.5px_#c52b9b_inset]"
        :class="[
          activeTab === tab
            ? 'border-t-dark-charcoal-20 border-x-dark-charcoal-20 -mb-[1px]'
            : 'border-tx',
        ]"
        @click.prevent="setActiveTab(tab)"
        @keyup.enter.prevent="setActiveTab(tab)"
      >
        {{ $t(`media-details.reuse.copy-license.${tab}`) }}
      </button>
    </nav>

    <div
      v-for="(tab, idx) in tabs"
      :id="`tab-${tab}`"
      :key="idx"
      :aria-labelledby="tab"
      role="tabpanel"
      tabindex="0"
      class="border border-dark-charcoal-20 p-4 md:p-6 text-sm md:text-base foxus:border-tx focus:outline-none focus:shadow-[0_0_0_1.5px_#c52b9b_inset]"
      :class="{ hidden: activeTab !== tab }"
    >
      <i18n
        v-if="tab === 'rich'"
        id="attribution-rich"
        path="media-details.reuse.credit.text"
        tag="p"
      >
        <template #title>
          <a
            :href="media.foreign_landing_url"
            target="_blank"
            rel="noopener"
            @click="onSourceLinkClicked"
            @keyup.enter="onSourceLinkClicked"
            >{{ media.title }}</a
          ></template
        >
        <template #creator>
          <i18n
            v-if="media.creator"
            path="media-details.reuse.credit.creator-text"
            tag="span"
          >
            <template #creator-name>
              <a
                v-if="media.creator_url"
                :href="media.creator_url"
                target="_blank"
                rel="noopener"
                @click="onCreatorLinkClicked"
                @keyup.enter="onCreatorLinkClicked"
                >{{ media.creator }}</a
              >
              <span v-else>{{ media.creator }}</span>
            </template>
          </i18n>
        </template>
        <template #marked-licensed>
          {{
            isPDM
              ? $t('media-details.reuse.credit.marked')
              : $t('media-details.reuse.credit.licensed')
          }}
        </template>
        <template #license>
          <a
            class="uppercase"
            :href="licenseUrl"
            target="_blank"
            rel="noopener"
            >{{ fullLicenseName }}</a
          >
        </template>
      </i18n>

      <label v-if="tab === 'html'" for="attribution-html">
        <textarea
          id="attribution-html"
          class="w-full font-mono h-auto resize-none"
          :value="attributionHtml"
          rows="4"
          dir="ltr"
          readonly
        />
      </label>

      <i18n
        v-if="tab === 'plain'"
        id="attribution-plain"
        path="media-details.reuse.credit.text"
        tag="p"
      >
        <template #title>{{ media.title }}</template>
        <template #creator>
          <i18n
            v-if="media.creator"
            path="media-details.reuse.credit.creator-text"
          >
            <template #creator-name>{{ media.creator }}</template>
          </i18n>
        </template>
        <template #marked-licensed>
          {{
            isPDM
              ? $t('media-details.reuse.credit.marked')
              : $t('media-details.reuse.credit.licensed')
          }}
        </template>
        <template #license> {{ fullLicenseName }}</template>
        <template #view-legal>
          <i18n path="media-details.reuse.credit.view-legal-text">
            <template #terms-copy>
              {{
                isPDM
                  ? $t('media-details.reuse.credit.terms-text')
                  : $t('media-details.reuse.credit.copy-text')
              }}
            </template>
            <template v-if="licenseUrl" #URL>
              {{ licenseUrl }}
            </template>
          </i18n>
        </template>
      </i18n>

      <CopyButton
        :id="`copyattr-${tab}`"
        :el="`#attribution-${tab}`"
        class="mt-6 md:mt-10"
        @copied="(e) => onCopyAttribution(tab, e)"
      />
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import CopyButton from '~/components/CopyButton.vue'
import { COPY_ATTRIBUTION } from '~/constants/action-types'
import { ATTRIBUTION, USAGE_DATA } from '~/constants/store-modules'
import {
  SEND_DETAIL_PAGE_EVENT,
  DETAIL_PAGE_EVENTS,
} from '~/constants/usage-data-analytics-types'
import getAttributionHtml from '~/utils/attribution-html'
import { isPublicDomain } from '~/utils/license'

const VCopyLicense = defineComponent({
  name: 'VCopyLicense',
  components: { CopyButton },
  props: {
    media: {
      type: Object,
    },
    fullLicenseName: {
      type: String,
    },
  },
  setup(props) {
    const { store } = useContext()

    const activeTab = ref('rich')
    const tabs = ['rich', 'html', 'plain']

    const setActiveTab = (tabIdx) => (activeTab.value = tabIdx)

    const licenseUrl = computed(
      () => `${props.media.license_url}?ref=openverse`
    )

    const isPDM = () => isPublicDomain(props.fullLicenseName)

    const attributionHtml = computed(() => {
      const licenseUrl = `${props.media.license_url}&atype=html`
      return getAttributionHtml(props.media, licenseUrl, props.fullLicenseName)
    })

    const sendDetailPageEvent = (eventType) => {
      const eventData = {
        eventType,
        resultUuid: props.media.id,
      }
      store.dispatch(`${USAGE_DATA}/${SEND_DETAIL_PAGE_EVENT}`, eventData)
    }

    const onCreatorLinkClicked = () => {
      sendDetailPageEvent(DETAIL_PAGE_EVENTS.CREATOR_CLICKED)
    }

    const onSourceLinkClicked = () =>
      sendDetailPageEvent(DETAIL_PAGE_EVENTS.SOURCE_CLICKED)

    const onCopyAttribution = (type, event) => {
      store.dispatch(`${ATTRIBUTION}/${COPY_ATTRIBUTION}`, {
        type,
        content: event.content,
      })
      sendDetailPageEvent(DETAIL_PAGE_EVENTS.ATTRIBUTION_CLICKED)
    }

    return {
      activeTab,
      attributionHtml,
      isPDM,
      licenseUrl,
      onCreatorLinkClicked,
      onSourceLinkClicked,
      onCopyAttribution,
      tabs,
      setActiveTab,
    }
  },
})
export default VCopyLicense
</script>
