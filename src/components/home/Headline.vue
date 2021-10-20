<template>
  <section class="headline">
    <div class="container">
      <div class="headline__content">
        <p class="headline__name">Andi Ersaldy Raisha</p>
        <h1 class="headline__title">Frontend Engineer</h1>
        <h1 class="headline__title">UI/UX Designer</h1>
      </div>
      <div class="social">
        <button class="social__button">
          <img
            class="social__icon"
            src="@/assets/img/icons/gmail.svg"
            alt="gmail"
          />
        </button>
        <button class="social__button">
          <img
            class="social__icon"
            src="@/assets/img/icons/linkedin.svg"
            alt="linkedin"
          />
        </button>
        <button class="social__button">
          <img
            class="social__icon"
            src="@/assets/img/icons/dribbble.svg"
            alt="dribbble"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import ScrollReveal from 'scrollreveal';
import { onMounted } from 'vue';

const ScrollInstance = ScrollReveal();
const scrollOptions = { distance: '30px' };

onMounted(() => {
  ScrollInstance.reveal('.headline');
  ScrollInstance.reveal('.headline__name', { delay: 100, ...scrollOptions });
  ScrollInstance.reveal('.headline__title', { delay: 300, ...scrollOptions });
  ScrollInstance.reveal('.social', { delay: 500, ...scrollOptions });
});
</script>

<style lang="scss" scoped>
.headline {
  display: flex;
  justify-content: center;
  height: 1300px;
  background: url('@/assets/img/figures/contour.jpg') no-repeat right;
  background-size: cover;

  &__content {
    margin-top: calc(50vh - 180px);
  }

  &__name {
    font-size: 32px;
    margin-bottom: 20px;
  }

  &__title {
    font-size: 70px;
  }
}

.social {
  margin-top: 50px;
  display: flex;

  &__button {
    margin-right: 40px;
    width: 40px;
  }

  &__icon {
    width: 100%;
  }
}
</style>
