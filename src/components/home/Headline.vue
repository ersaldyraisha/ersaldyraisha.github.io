<template>
  <section class="headline">
    <div class="container">
      <div class="headline__content">
        <h1 class="headline__name">Andi Ersaldy Raisha Pakki</h1>
        <h2 class="headline__title">Frontend Engineer</h2>
        <h2 class="headline__title">UI/UX Designer</h2>
      </div>
      <div class="social">
        <a
          target="_blank"
          href="mailto:andi.ersaldy@gmail.com"
          class="social__button social__button--gmail"
        >
          <img
            class="social__icon"
            src="@/assets/img/icons/gmail.svg"
            alt="gmail"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ersaldyraisha"
          class="social__button social__button--linkedin"
        >
          <img
            class="social__icon"
            src="@/assets/img/icons/linkedin.svg"
            alt="linkedin"
          />
        </a>
        <a
          target="_blank"
          href="https://dribbble.com/ersaldyraisha"
          class="social__button social__button--dribbble"
        >
          <img
            class="social__icon"
            src="@/assets/img/icons/dribbble.svg"
            alt="dribbble"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@keyframes slide-left {
  from {
    background-position: right -200px bottom 50%;
  }

  to {
    background-position: right 0px bottom 50%;
  }
}

@keyframes reveal {
  from {
    transform: translateY(30%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.headline {
  display: flex;
  justify-content: center;
  height: 1300px;
  background: url('@/assets/img/figures/contour.jpg') no-repeat right;
  background-size: cover;
  animation: slide-left 2s both;

  &__content {
    margin-top: calc(50vh - 180px);

    @media screen and (max-width: 960px) {
      margin-top: calc(50vh - 220px);
    }
  }

  &__name {
    font-size: 32px;
    margin-bottom: 20px;
    animation: reveal 0.5s ease 0.1s both;

    @media screen and (max-width: 960px) {
      font-size: 20px;
      margin-bottom: 8px;
      animation: none;
    }
  }

  &__title {
    font-size: 70px;
    animation: reveal 0.8s ease 0.2s both;

    @media screen and (max-width: 960px) {
      font-size: 34px;
      animation: none;
    }
  }

  @media screen and (max-width: 960px) {
    height: 55vh;
    animation: none;
    background: none;
  }
}

.social {
  margin-top: 50px;
  margin-left: -8px;
  display: flex;

  &__button {
    position: relative;
    margin-right: 10px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      border-radius: 100px;
      transform: scale(0);
      opacity: 0;
      transition: all 0.2s ease;
    }

    &:hover,
    &:focus {
      &:before {
        transform: scale(1);
        opacity: 1;
      }
    }

    &--gmail {
      animation: reveal 0.5s ease 0.4s both;

      &:before {
        background-color: #e138342a;
      }
    }

    &--linkedin {
      animation: reveal 0.5s ease 0.5s both;

      &:before {
        background-color: #0287cf2a;
      }
    }

    &--dribbble {
      animation: reveal 0.5s ease 0.6s both;

      &:before {
        background-color: #ea35742a;
      }
    }

    @media screen and (max-width: 960px) {
      margin-right: 0;
    }
  }

  &__icon {
    z-index: z-index(content);
    width: 50%;
  }

  @media screen and (max-width: 960px) {
    margin-top: 10px;
  }
}
</style>
