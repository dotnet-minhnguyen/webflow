export interface IWiley {
    upComing: false
    start_time: Date
    end_time: Date
    close_registration: boolean
}

export interface ICountry {
    menuSlug: string
}

export interface ISubCategory {
    name: string
    title: string
    slug: string
    description: string
}

export interface IContentType {
    name: string
    slug: string
}

export interface IProduct extends IWiley {
    name: string
    slug: string
    contentTypes: IContentType[],
    subCategory: ISubCategory,
}

