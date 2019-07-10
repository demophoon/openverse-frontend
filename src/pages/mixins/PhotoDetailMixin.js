import featureFlags from '@/featureFlags';
import { FETCH_IMAGE, FETCH_RELATED_IMAGES } from '@/store/action-types';
import { SET_IMAGE } from '@/store/mutation-types';

const PhotoDetailPage = {
  name: 'photo-detail-page',
  props: {
    id: '',
  },
  data: () => ({
    breadCrumbURL: '',
    hasClarifaiTags: false,
    imagecountseparator: 'of',
    isPrimaryImageLoaded: false,
    shouldShowBreadcrumb: false,
    imageWidth: 0,
    imageHeight: 0,
    watermarkEnabled: featureFlags.watermark,
    socialSharingEnabled: featureFlags.socialSharing,
  }),
  computed: {
    filter() {
      return this.$store.state.query.filter;
    },
    images() {
      return this.$store.state.images;
    },
    imagesCount() {
      return this.$store.state.imagesCount;
    },
    query() {
      return this.$store.state.query;
    },
    relatedImages() {
      return this.$store.state.relatedImages;
    },
    tags() {
      return this.$store.state.image.tags;
    },
    image() {
      return this.$store.state.image;
    },
  },
  watch: {
    image() {
      this.getRelatedImages();
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.resetImageOnRouteChanged();
    this.loadImage(to.params.id);
    next();
  },
  beforeRouteLeave(to, from, next) {
    this.resetImageOnRouteChanged();
    next();
  },
  beforeRouteEnter(to, previousPage, nextPage) {
    nextPage((_this) => {
      if (previousPage.name === 'browse-page') {
        _this.shouldShowBreadcrumb = true; // eslint-disable-line no-param-reassign
        _this.breadCrumbURL = `/search?q=${previousPage.query.q}`; // eslint-disable-line no-param-reassign
      }
    });
  },
  methods: {
    resetImageOnRouteChanged() {
      this.imageHeight = 0;
      this.imageWidth = 0;
      this.$store.commit(SET_IMAGE, { image: {} });
    },
    onImageLoaded(event) {
      this.imageWidth = event.target.naturalWidth;
      this.imageHeight = event.target.naturalHeight;
      this.isPrimaryImageLoaded = true;
    },
    getRelatedImages() {
      if (this.image && this.image.id) {
        this.$store.dispatch(FETCH_RELATED_IMAGES, { id: this.image.id });
      }
    },
    loadImage(id) {
      return this.$store.dispatch(FETCH_IMAGE, { id });
    },
  },
  mounted() {
    return this.loadImage(this.$route.params.id);
  },
  serverPrefetch() {
    return this.loadImage(this.$route.params.id);
  },
};

export default PhotoDetailPage;
