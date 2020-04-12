<template>
  <div class="blog">
    <h1 class="blog__head">The <span class="text--accent">Blog</span></h1>
    <p class="blog__subtitle">
      Some says: to fully understand a knowledge, one must <span class="text--accent">write.</span>
      And to broaden the knowledge even more, one must <span class="text--accent">share.</span>
      So... here are some words of “wisdom” from a junior developer/designer.
    </p>
  </div>
</template>

<script>

export default {
  name: 'Blog',
};
</script>

<style lang="scss" scoped>
.blog {
  background: $color-base;
  color: $color-light;
  padding: 40px;

  &__head {
    margin: 0;
    font-size: 70px;
    margin-top: 150px;
    margin-bottom: 10px;
  }

  &__subtitle {
    max-width: 700px;
    font-weight: 400;
    font-size: var(--font-lg);
    line-height: 1.5;
  }
}
</style>
