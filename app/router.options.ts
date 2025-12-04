// @ts-ignore
import type {RouterOptions} from "#vue-router";
import {cityRef} from "~/composables/city";

export default <RouterOptions>{
    routes: (_routes: any) => {
        const { ssrContext } = useNuxtApp()
        const city = cityRef();

        console.log('routes', _routes);

        if (ssrContext?.event.context.city) city.value = ssrContext?.event.context.city;

        const cityRoute = _routes.filter((i:any) => i.path.includes("/:city()"));
        if (city.value) {
            return cityRoute.map((i: any) => ({
                ...i,
                path: i.path.replace("/:city()", "/"),
            }));
        }
    }
}