<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import type {Catalog} from "~/utils/types";
  import useApplication from "~/composables/application";

  const { setCatalog, langRef, catalogRef } = useApplication();

  const cityCode = cityRef();

  const { locale, t } = useI18n();

  const {data: catalog} = await useAsyncData<Catalog>('catalog-' + cityCode.value, async () =>
      $fetch<Catalog, any, any>("http://localhost:3000/api/load-catalog/", {query: {city: cityCode.value, 'lang': langRef.value}, server: true})
  );

  await setCatalog(catalog);

  onMounted(async () => {
    await refreshNuxtData('catalog-' + cityCode.value);
  });
</script>

<template>
  <div class="container">
      <h1>{{ t('main_h1') }}</h1>

      <div v-for="group in catalogRef?.categories" >
          <h3 class="category-title">{{ group.title }}</h3>

          <div class="catalog-product-container">
            <div v-for="product in catalogRef?.products[group.id]" class="product">
              <div>{{ product.title }}</div>
            </div>
          </div>
      </div>
  </div>
</template>

<style scoped>
  .category-title{
    padding: 8px 0;
  }

  .catalog-product-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;

    .product{
      padding: 8px;
      border: 1px solid #eeeeee;
    }
  }
</style>