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

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  &__text {
    font-size: 35px;
    margin-bottom: 20px;

    @media screen and (max-width: 960px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
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
    outline: solid 0px #00000022;
    transition: all 0.2s ease;

    &:hover {
      outline: solid 10px #00000022;

      .footer__image {
        transform: translateX(10px) rotate(90deg);
      }
    }

    @media screen and (max-width: 960px) {
      padding: 10px 20px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 960px) {
    height: 500px;
    padding-top: 250px;
  }
}
</style>
