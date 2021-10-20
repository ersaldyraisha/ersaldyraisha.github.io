<template>
  <div class="footer">
    <div class="container">
      <p class="footer__text">Let's work together</p>
      <a
        target="_blank"
        href="mailto:andi.ersaldy@gmail.com"
        class="footer__button"
      >
        <span> Send an email </span>
        <img
          class="footer__image"
          src="@/assets/img/icons/arrow.png"
          alt="arrow"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import ScrollReveal from 'scrollreveal';
import { onMounted } from 'vue';

onMounted(() => {
  const ScrollInstance = ScrollReveal();
  ScrollInstance.reveal('.footer__text', { delay: 100, distance: '30px' });
  ScrollInstance.reveal('.footer__button', { delay: 200, distance: '30px' });
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
    transition: transform 0.2s ease;
  }

  &__button {
    display: inline-block;
    background: $color-overlay;
    color: $color-base;
    padding: 15px 30px;
    border-radius: 100px;
    font-size: 20px;
    outline: solid 0px #bbb;
    transition: outline 0.2s ease;

    &:hover {
      outline: solid 10px #00000022;

      .footer__image {
        transform: translateX(10px) rotate(90deg);
      }
    }
  }
}
</style>
