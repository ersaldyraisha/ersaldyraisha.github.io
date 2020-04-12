<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <h1 class="sidebar__head">ANDI<br>ERSALDY<br>RAISHA</h1>
    </div>
    <ul class="sidebar__links nav">
      <li class="nav__item">
        <router-link class="nav__anchor" :to="{ name: 'Home' }">/home</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__anchor" :to="{ name: 'Projects' }">/projects</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__anchor" :to="{ name: 'Blog' }">/blog</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__anchor" :to="{ name: 'Resume' }">/resume</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: $color-base-dark-4;
    color: $color-light;
    width: 200px;

    &__logo {
      background: $color-base-dark-5;
      padding: 24px;
    }

    &__head {
      margin: 0;
      font-size: var(--font-lg);
      flex-shrink: 0;
      font-weight: 700;
      line-height: 1.6;
    }

    &__links {
      display: flex;
      flex-direction: column;
      padding: 24px;
    }
  }

  .nav {
    margin-top: auto;

    &__item {
      margin-bottom: 10px;
    }

    &__anchor{
      font-size: var(--font-sm);

      &--active {
        color: $color-accent;
      }
    }
  }
</style>
