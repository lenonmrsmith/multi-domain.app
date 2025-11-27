<script setup>
  import { useI18n } from 'vue-i18n';
  const { locale, t } = useI18n();

  useSeoMeta({
    title: t('about_h1') + " | Title",
    ogTitle: t('about_h1') + " | Title",
    description: t('about_h1') + " | Description"
  });
</script>

<template>
  <div class="container">
    <h1>{{ t('about_h1') }}</h1>
  </div>
</template>

<style scoped lang="scss">

</style>