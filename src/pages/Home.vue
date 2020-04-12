<template>
  <div class="home">
    <section class="home__head head">
      <div class="head__figure"
        @mouseover="isImageOnHover = true"
        @mouseleave="isImageOnHover = false"
      >
        <img
          src="@/assets/img/raisha-the-css-guy.jpg"
          alt="raisha-the-css-guy"
          class="head__img"
          :class="{'head__img--active': isImageOnHover}"
        >
      </div>
      <h2 class="head__title">Hi!</h2>
      <h3 class="head__subtitle">I'm <span class="text text--accent">Raisha.</span></h3>
      <h4 class="head__info">
        <span class="text text--accent">Front-end</span> engineer +
        <span class="text text--accent">UI/UX</span> designer
      </h4>
    </section>
    <section class="home__nav">
      <ul class="nav">
        <li class="nav__item">
          <router-link :to="{ name: 'Projects' }" class="nav__anchor nav__anchor--dark">
            <div class="nav__text">
              Checkout my <br><span class="text text--accent">projects</span>
            </div>
          </router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{ name: 'Blog' }" class="nav__anchor nav__anchor--medium">
            <div class="nav__text">
              Read my <br><span class="text text--accent">blog</span>
            </div>
          </router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{ name: 'Resume' }" class="nav__anchor nav__anchor--light">
            <div class="nav__text">
              See my <br><span class="text text--accent">resume</span>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      isImageOnHover: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  background: $color-base;
  color: $color-light;
  overflow: hidden;

  &__head {
    display: flex;
    flex-direction: column;
    padding: 40px;
    flex-grow: 1;
  }

  &__nav {
    flex-shrink: 0;
    display: block;
  }
}

.head {
  &__title {
    font-size: 130px;
    margin-top: auto;
  }

  &__subtitle {
    font-size: 50px;
  }

  &__info {
    font-size: 30px;
    margin-bottom: 75px;
  }

  &__figure {
    position: absolute;
    top: 50px;
    right: 50px;
    background: #E8EBE7;
    height: 120px;
    width: 120px;
    border-radius: 100px;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    transform: translateY(45px);
    transition: transform .5s ease;

    &--active {
      transform: translateY(0);
    }
  }
}

.nav {
  display: flex;

  &__item {
    flex-grow: 1;
    font-size: 32px;
    width: 100%;
  }

  &__anchor {
    position: relative;
    display: block;
    height: 100%;
    padding: 40px 40px 180px 40px;
    overflow: hidden;

    &--dark {
      background: $color-base-dark-3;
    }

    &--medium {
      background: $color-base-dark-2;
    }

    &--light {
      background: $color-base-dark-1;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: $color-light;
      transform: translateX(-100%);
      opacity: 0;
      transition: all .2s ease;
    }

    &:after {
      content: '';
      position: absolute;
      display: block;
      bottom: 40px;
      right: 40px;
      height: 50px;
      width: 50px;
      border-style: solid;
      border-width: 0 7px 7px 0;
      transition: transform .2s ease;
      transform: rotate(0);
    }

    &:hover {
      color: $color-base;

      &:before {
        opacity: 1;
        transform: translateX(0);
      }

      &:after {
        transform: rotate(45deg);
      }
    }
  }

  &__text {
    position: relative;
    z-index: 1;
  }
}
</style>
