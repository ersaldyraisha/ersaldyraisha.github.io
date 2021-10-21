<template>
  <div class="project">
    <div
      v-if="projectDetail"
      class="project__wrapper"
      :style="{ backgroundColor: projectDetail.backgroundColor || '#000' }"
    >
      <div class="container">
        <router-link to="/" class="back-button">
          <img
            src="@/assets/img/icons/arrow.png"
            alt="back"
            class="back-button__icon"
          />
        </router-link>
        <h1 class="project__title">{{ projectDetail.name }}</h1>
        <p class="project__type">{{ projectDetail.type }}</p>
        <p class="project__detail">
          {{ projectDetail.desc }}
        </p>
        <p class="project__detail">
          <strong>Role: {{ projectDetail.role }}</strong>
        </p>
        <masonry-wall
          class="project__images"
          :items="projectDetail.img || []"
          :gap="30"
          :column-width="300"
        >
          <template #default="{ item, index }">
            <img
              :src="item"
              :alt="`project-image-${index}`"
              class="project__image"
            />
          </template>
        </masonry-wall>
      </div>
      <div
        class="project__ornament"
        :style="{ backgroundColor: projectDetail.backgroundColor }"
      />
    </div>
    <ui-footer />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    'ui-footer': Footer,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const projectDetail = computed(() => store.getters.selectedWork);

    onMounted(async () => {
      if (!store.getters.selectedWork) {
        store.commit('setSelectedWorkId', route.query.id);
        await store.dispatch('fetchWorks');
      }
    });

    return { projectDetail };
  },
};
</script>

<style lang="scss" scoped>
.project {
  &__wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    height: fit-content;
    color: $color-base;
    padding-bottom: 50px;
  }

  &__title {
    margin-bottom: 5px;
    font-size: 70px;
  }

  &__type {
    font-size: 25px;
  }

  &__detail {
    margin-top: 40px;
    margin-bottom: 20px;
    line-height: 1.5;
    font-weight: 400;
    width: 70%;
  }

  &__images {
    margin-top: 75px;
  }

  &__image {
    width: 100%;
    display: block;
    border-radius: 30px;
  }

  &__ornament {
    position: absolute;
    left: 0;
    top: 99%;
    width: 100%;
    height: 1000px;
    background-size: contain;
    pointer-events: none;
    z-index: z-index(main);
    mask: url('@/assets/img/figures/wave-bottom.svg') no-repeat top;
    -webkit-mask: url('@/assets/img/figures/wave-bottom.svg') no-repeat top;
  }
}

.back-button {
  display: block;
  margin-top: 100px;
  margin-bottom: 30px;

  &__icon {
    width: 70px;
    transform: rotate(-90deg);
  }
}
</style>
