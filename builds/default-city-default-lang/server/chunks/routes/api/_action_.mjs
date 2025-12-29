import { d as defineEventHandler, g as getQuery, a as getRouterParam, u as useRuntimeConfig } from '../../nitro/nitro.mjs';
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

const _action_ = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  const action = getRouterParam(event, "action");
  const lang = query.lang;
  const city = config.public.city || query.city;
  if (action === "load-catalog") {
    if (lang === "en") {
      return {
        products: {
          1: [
            {
              title: "Product 1",
              id: 1
            },
            {
              title: "Product 2",
              id: 2
            },
            {
              title: "Product 3",
              id: 3
            }
          ],
          2: [
            {
              title: "Product 21",
              id: 21
            },
            {
              title: "Product 22",
              id: 22
            },
            {
              title: "Product 23",
              id: 23
            }
          ],
          3: [
            {
              title: "Product 31",
              id: 31
            },
            {
              title: "Product 32",
              id: 32
            },
            {
              title: "Product 33",
              id: 33
            }
          ]
        },
        categories: [
          {
            title: "Category 1",
            id: 1
          },
          {
            title: "Category 2",
            id: 2
          },
          {
            title: "Category 3",
            id: 2
          }
        ]
      };
    }
    return {
      products: {
        1: [
          {
            title: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 1",
            id: 1
          },
          {
            title: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 2",
            id: 2
          },
          {
            title: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 3",
            id: 3
          }
        ],
        2: [
          {
            title: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 21",
            id: 21
          },
          {
            title: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 22",
            id: 22
          },
          {
            title: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 23",
            id: 23
          }
        ],
        3: [
          {
            title: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 31",
            id: 31
          },
          {
            title: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 32",
            id: 32
          },
          {
            title: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 33",
            id: 33
          }
        ]
      },
      categories: [
        {
          title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F 1",
          id: 1
        },
        {
          title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F 2",
          id: 2
        },
        {
          title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F 3",
          id: 2
        }
      ]
    };
  }
  if (action === "load-city-info") {
    if (city === "city1") {
      if (lang === "en") {
        return {
          phone: "222-333",
          address: "Address 1, 2",
          schedule: "10:00 - 22:00",
          seo_meta: {
            title: "City 1 | Title",
            description: "City 1 | Description"
          }
        };
      }
      return {
        phone: "222-333",
        address: "\u0410\u0434\u0440\u0435\u0441 1, 2",
        schedule: "10:00 - 22:00",
        seo_meta: {
          title: "\u0413\u043E\u0440\u043E\u0434 1 | Title",
          description: "\u0413\u043E\u0440\u043E\u0434 1 | Description"
        }
      };
    }
    if (city === "city2") {
      if (lang === "en") {
        return {
          phone: "555-333",
          address: "Moyakovscay 1",
          schedule: "10:00 - 22:00",
          seo_meta: {
            title: "City 2 | Title",
            description: "City 2 | Description"
          }
        };
      }
      return {
        phone: "555-333",
        address: "\u041C\u041E\u042F\u041A\u041E\u0412\u0421\u041A\u0410\u042F \u0414.1",
        schedule: "10:00 - 22:00",
        seo_meta: {
          title: "\u0413\u043E\u0440\u043E\u0434 2 | Title",
          description: "\u0413\u043E\u0440\u043E\u0434 2 | Description"
        }
      };
    }
    if (lang === "en") {
      return {
        phone: "222-333",
        address: "Address 1, 2",
        schedule: "10:00 - 22:00",
        seo_meta: {
          title: "City Default | Title",
          description: "City Default | Description"
        }
      };
    }
    return {
      phone: "222-333",
      address: "\u0410\u0434\u0440\u0435\u0441 1, 2",
      schedule: "10:00 - 22:00",
      seo_meta: {
        title: "\u0413\u043E\u0440\u043E\u0434 1 | Title",
        description: "\u0413\u043E\u0440\u043E\u0434 1 | Description"
      }
    };
  }
});

export { _action_ as default };
//# sourceMappingURL=_action_.mjs.map
