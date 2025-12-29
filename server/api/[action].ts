import {CityInfo, SeoMeta} from "~/utils/types";

export default defineEventHandler(async (event: any) => {
    const config = useRuntimeConfig()
    const query = getQuery(event);
    const action = getRouterParam(event, 'action');
    const lang = query.lang;
    const city = config.public.city || query.city;

    // const runtimeConfig = await useRuntimeConfig();
    // // @ts-ignore
    // return event.$fetch<CityInfo, any, any>(runtimeConfig.private.externalApiUrl, {params: {"action": "load-app-info", "city": city, "version": "v2"}});
    //

    if(action === "load-catalog"){
        if(lang === "en"){
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
                        title: "Продукт 1",
                        id: 1
                    },
                    {
                        title: "Продукт 2",
                        id: 2
                    },
                    {
                        title: "Продукт 3",
                        id: 3
                    }
                ],
                2: [
                    {
                        title: "Продукт 21",
                        id: 21
                    },
                    {
                        title: "Продукт 22",
                        id: 22
                    },
                    {
                        title: "Продукт 23",
                        id: 23
                    }
                ],
                3: [
                    {
                        title: "Продукт 31",
                        id: 31
                    },
                    {
                        title: "Продукт 32",
                        id: 32
                    },
                    {
                        title: "Продукт 33",
                        id: 33
                    }
                ]
            },
            categories: [
                {
                    title: "Категория 1",
                    id: 1
                },
                {
                    title: "Категория 2",
                    id: 2
                },
                {
                    title: "Категория 3",
                    id: 2
                }
            ]
        };
    }

    if(action === "load-city-info") {
        if (city === "city1") {
            if (lang === "en") {
                return {
                    phone: "222-333",
                    address: "Address 1, 2",
                    schedule: "10:00 - 22:00",
                    seo_meta: {
                        title: "City 1 | Title",
                        description: "City 1 | Description",
                    }
                };
            }

            return {
                phone: "222-333",
                address: "Адрес 1, 2",
                schedule: "10:00 - 22:00",
                seo_meta: {
                    title: "Город 1 | Title",
                    description: "Город 1 | Description",
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
                        description: "City 2 | Description",
                    }
                };
            }

            return {
                phone: "555-333",
                address: "МОЯКОВСКАЯ Д.1",
                schedule: "10:00 - 22:00",
                seo_meta: {
                    title: "Город 2 | Title",
                    description: "Город 2 | Description",
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
                    description: "City Default | Description",
                }
            };
        }

        return {
            phone: "222-333",
            address: "Адрес 1, 2",
            schedule: "10:00 - 22:00",
            seo_meta: {
                title: "Город 1 | Title",
                description: "Город 1 | Description",
            }
        };
    }
})