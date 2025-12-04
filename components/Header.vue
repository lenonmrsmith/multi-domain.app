<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import useApplication from "~/composables/application";
  import type {CityInfo} from "~/utils/types";
  const localePath = useLocalePath();

  const { locale, t, setLocale } = useI18n();

  const { cityInfoRef, langRef, setCityInfoData } = useApplication();

  const cityCode = cityRef();
  const langCode = ref('');
  const route = useRoute();

  const lang = route.params.lang;
  switchLang(lang);

  function switchLang(lang: string){
    if(lang === 'en'){
      langCode.value = 'en';
      setLocale('en');
    }else{
      langCode.value = '';
      setLocale('ru');
    }
  }

  function makePageLink(page: string, cityName: string, langCode: string){
    langCode = langCode === 'ru' ? '' : langCode;
    if(page === '/'){
      return localePath({ name: 'lang-city', params: { lang: langCode }});
    }
    return localePath({ name: page + '-lang-city', params: { lang: langCode }});
  }

  const {data: cityInfoDate} = await useAsyncData<CityInfo>('city-' + cityCode.value, async () =>
      $fetch<CityInfo, any, any>("http://localhost:3000/api/load-city-info/", {query: {city: cityCode.value, 'lang': langRef.value}, server: true})
  );

  useSeoMeta({
    title: cityInfoDate.value?.seo_meta.title,
    ogTitle: cityInfoDate.value?.seo_meta.title,
    description: cityInfoDate.value?.seo_meta.description
  });

  await setCityInfoData(cityInfoDate);

  onMounted(async () => {
    await refreshNuxtData('city-' + cityCode.value);
  });
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="header-menu">
        <div class="header-main-info">
          <div>{{ t(cityCode) }} : {{ locale }}</div>
        </div>
        <div class="header-city-info">
          <div>{{ cityInfoRef?.phone }}</div>
          <div>{{ cityInfoRef?.address }}</div>
          <div>{{ cityInfoRef?.schedule }}</div>
        </div>
      </div>
      <div class="header-menu">
        <NuxtLink :to="makePageLink('/', cityCode, langCode)">{{ t('menu_home') }}</NuxtLink>
        <NuxtLink :to="makePageLink('about', cityCode, langCode)">{{ t('menu_about') }}</NuxtLink>
        <NuxtLink :to="makePageLink('contacts', cityCode, langCode)">{{ t('menu_contact') }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .header{
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 4rem 0;
    border: 1px solid #fefefe;

    &-main-info{
      display: flex;
      gap: 16px;
    }

    &-city-info{
      display: flex;
      gap: 16px;
    }
  }

  .header-menu{
    border: 1px solid #d5d5d5;
    margin: 8px 0;
    display: flex;
    gap: 8px;

    .header-menu a{
      padding: 4px 8px;

      &:hover{

      }
    }
  }
</style>