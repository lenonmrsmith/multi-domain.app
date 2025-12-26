import { u as useApplication, w as withAsyncContext, a as useAsyncData } from './application-BSVyF3gh.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, c as cityRef, a as useI18n } from './server.mjs';
import 'perfect-debounce';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[city]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { setCatalog, langRef, catalogRef } = useApplication();
    const cityCode = cityRef();
    const { locale, t } = useI18n();
    const { data: catalog } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "catalog-" + cityCode.value,
      async () => $fetch("/api/load-catalog/", { query: { city: cityCode.value, "lang": langRef.value }, server: true }),
      "$wurAhiBbC7"
    )), __temp = await __temp, __restore(), __temp);
    [__temp, __restore] = withAsyncContext(() => setCatalog(catalog)), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-0cab443e><h1 data-v-0cab443e>${ssrInterpolate(unref(t)("main_h1"))}</h1><!--[-->`);
      ssrRenderList((_a = unref(catalogRef)) == null ? void 0 : _a.categories, (group) => {
        var _a2;
        _push(`<div data-v-0cab443e><h3 class="category-title" data-v-0cab443e>${ssrInterpolate(group.title)}</h3><div class="catalog-product-container" data-v-0cab443e><!--[-->`);
        ssrRenderList((_a2 = unref(catalogRef)) == null ? void 0 : _a2.products[group.id], (product) => {
          _push(`<div class="product" data-v-0cab443e><div data-v-0cab443e>${ssrInterpolate(product.title)}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[lang]]/[city].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _city_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0cab443e"]]);

export { _city_ as default };
//# sourceMappingURL=_city_-BNIUj6YC.mjs.map
