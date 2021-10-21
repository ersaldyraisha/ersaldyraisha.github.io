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
import ScrollReveal from 'scrollreveal';
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

    const initScrollReveal = async () => {
      const scrollInstance = ScrollReveal();
      const getOption = (delay) => ({
        delay,
        distance: '30px',
        container: document.querySelector('.homepage'),
      });
      await scrollInstance.reveal('.works__title', { ...getOption(100) });
      await scrollInstance.reveal('.cards', { ...getOption(200) });
      await scrollInstance.reveal('.footer__text', { ...getOption(100) });
      await scrollInstance.reveal('.footer__button', { ...getOption(200) });
      await scrollInstance.reveal('.headline__name', { ...getOption(200) });
      await scrollInstance.reveal('.headline__title', { ...getOption(400) });
      await scrollInstance.reveal('.social__button--gmail', {
        ...getOption(500),
      });
      await scrollInstance.reveal('.social__button--linkedin', {
        ...getOption(600),
      });
      await scrollInstance.reveal('.social__button--dribbble', {
        ...getOption(700),
      });
    };

    onMounted(async () => {
      initScrollReveal();
      if (store.state.works.length === 0) {
        await store.dispatch('fetchWorks');
      }

      // to-do: find better solution: wait all cards to be rendered, then scroll
      setTimeout(() => {
        homepageRef.value.scrollTo({
          top: store.state.lastScroll,
        });
      }, 100);
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
