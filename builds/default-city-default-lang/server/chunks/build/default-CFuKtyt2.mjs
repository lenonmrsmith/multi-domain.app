import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-DG2QWU9E.mjs';
import { u as useApplication, w as withAsyncContext, a as useAsyncData } from './application-BSVyF3gh.mjs';
import { u as useHead, _ as _export_sfc, d as useLocalePath, a as useI18n, c as cityRef, e as useRoute, b as useSeoMeta } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vue-router';
import 'node:url';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const localePath = useLocalePath();
    const { locale, t, setLocale } = useI18n();
    const { cityInfoRef, langRef, setCityInfoData } = useApplication();
    const cityCode = cityRef();
    const langCode = ref("");
    const route = useRoute();
    const lang = route.params.lang;
    switchLang(lang);
    function switchLang(lang2) {
      if (lang2 === "en") {
        langCode.value = "en";
        setLocale("en");
      } else {
        langCode.value = "";
        setLocale("ru");
      }
    }
    function makePageLink(page, cityName, langCode2) {
      langCode2 = langCode2 === "ru" ? "" : langCode2;
      if (page === "/") {
        return localePath({ name: "lang-city", params: { lang: langCode2 } });
      }
      return localePath({ name: page + "-lang-city", params: { lang: langCode2 } });
    }
    const { data: cityInfoDate } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "city-" + cityCode.value,
      async () => $fetch("/api/load-city-info/", { query: { city: cityCode.value, "lang": langRef.value }, server: true }),
      "$Ua-Ps96Cta"
    )), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: (_a = cityInfoDate.value) == null ? void 0 : _a.seo_meta.title,
      ogTitle: (_b = cityInfoDate.value) == null ? void 0 : _b.seo_meta.title,
      description: (_c = cityInfoDate.value) == null ? void 0 : _c.seo_meta.description
    });
    [__temp, __restore] = withAsyncContext(() => setCityInfoData(cityInfoDate)), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-9e44aa6c><div class="header" data-v-9e44aa6c><div class="header-menu" data-v-9e44aa6c><div class="header-main-info" data-v-9e44aa6c><div data-v-9e44aa6c>${ssrInterpolate(unref(t)(unref(cityCode)))} : ${ssrInterpolate(unref(locale))}</div></div><div class="header-city-info" data-v-9e44aa6c><div data-v-9e44aa6c>${ssrInterpolate((_a2 = unref(cityInfoRef)) == null ? void 0 : _a2.phone)}</div><div data-v-9e44aa6c>${ssrInterpolate((_b2 = unref(cityInfoRef)) == null ? void 0 : _b2.address)}</div><div data-v-9e44aa6c>${ssrInterpolate((_c2 = unref(cityInfoRef)) == null ? void 0 : _c2.schedule)}</div></div></div><div class="header-menu" data-v-9e44aa6c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: makePageLink("/", unref(cityCode), unref(langCode))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("menu_home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("menu_home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: makePageLink("about", unref(cityCode), unref(langCode))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("menu_about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("menu_about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: makePageLink("contacts", unref(cityCode), unref(langCode))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("menu_contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("menu_contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9e44aa6c"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    useApplication();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>Footer</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CFuKtyt2.mjs.map
