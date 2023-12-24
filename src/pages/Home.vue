<template>
  <div ref="homepageRef" class="homepage">
    <ui-headline />
    <ui-works />
    <ui-footer />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Headline from '@/components/home/Headline.vue';
import Works from '@/components/home/Works.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    'ui-headline': Headline,
    'ui-works': Works,
    'ui-footer': Footer,
  },
  setup() {
    const homepageRef = ref(undefined);
    const store = useStore();

    onMounted(async () => {
      if (store.state.works.length === 0) {
        await store.dispatch('fetchWorks');
      }

      homepageRef.value.scrollTo({
        top: store.state.lastScroll,
      });
    });

    return { homepageRef };
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  height: 100vh;
  overflow-y: auto;
}
</style>
