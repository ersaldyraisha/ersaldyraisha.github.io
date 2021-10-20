<template>
  <div class="footer">
    <div class="container">
      <p class="footer__text">Let's work together</p>
      <button class="footer__button">
        <span> Write an email </span>
        <img
          class="footer__image"
          src="@/assets/img/icons/arrow.png"
          alt="arrow"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import ScrollReveal from 'scrollreveal';
import { onMounted } from 'vue';

const ScrollInstance = ScrollReveal();
const scrollOptions = { distance: '30px' };

onMounted(() => {
  ScrollInstance.reveal('.footer');
  ScrollInstance.reveal('.footer__text', { delay: 100, ...scrollOptions });
  ScrollInstance.reveal('.footer__button', { delay: 300, ...scrollOptions });
});
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  display: flex;
  justify-content: center;
  background: $color-base;
  height: 1000px;
  padding-top: 550px;
  background: url('@/assets/img/figures/contour.jpg') no-repeat right;
  background-size: cover;

  &__text {
    font-size: 35px;
    margin-bottom: 20px;
  }

  &__image {
    height: 20px;
    vertical-align: middle;
    transform: rotate(90deg);
    margin-left: 10px;
  }

  &__button {
    background: $color-overlay;
    color: $color-base;
    padding: 15px 30px;
    border-radius: 100px;
    font-size: 20px;
  }
}
</style>
