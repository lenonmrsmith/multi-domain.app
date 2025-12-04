
export interface Category{
    title: string,
    id: string
}
interface Categories extends Array<Category>{}

export interface Product{
    title: string,
    id: string
}

export interface Products {
    [key:number]: Product;
}

export interface GroupProducts {
    [key:number]: Products;
}
export interface Catalog {
    products: GroupProducts;
    categories: Categories;
}

export interface SeoMeta{
    title: string,
    description: string
}

export interface CityInfo{
    phone: string,
    address: string,
    schedule: string,
    seo_meta: SeoMeta
}
