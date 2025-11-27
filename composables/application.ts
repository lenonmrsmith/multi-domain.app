import type {Catalog, CityInfo} from "~/utils/types";

const useApplication = () => {

    const route = useRoute();
    const city = route.params.city;
    const lang = route.params.lang;
    const langRef = useState<string>('lang-code' + lang, () => lang);
    const cityInfoRef = useState<CityInfo>('city-info-' + city, () => {});
    const catalogRef = useState<Catalog>('catalog-' + city, () => {});

    const setCityInfoData = (cityInfo: CityInfo) => {
        cityInfoRef.value = cityInfo;
    }

    const setCatalog = (catalog: Catalog) => {
        catalogRef.value = catalog;
    }

    return {
        cityInfoRef,
        setCityInfoData,
        catalogRef,
        setCatalog,
        langRef
    }
}
export default useApplication