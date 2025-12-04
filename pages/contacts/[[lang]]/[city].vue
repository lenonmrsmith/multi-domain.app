<script setup>
  import { useI18n } from 'vue-i18n';
  const { locale, t } = useI18n();

  useSeoMeta({
    title: t('contact_h1') + " | Title",
    ogTitle: t('contact_h1') + " | Title",
    description: t('contact_h1') + " | Description"
  });
</script>

<template>
  <div class="container">
    <h1>{{ t('contact_h1') }}</h1>
  </div>
</template>

<style scoped lang="scss">

</style>