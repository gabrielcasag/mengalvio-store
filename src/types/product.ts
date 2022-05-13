export type ProductImage = {
  url: string
  altText?: string
  width?: number
  height?: number
}

export type ProductPrice = {
  value: number
  currencyCode?: 'BRL' | 'EUR' | 'USD' | string
  retailPrice?: number
  salePrice?: number
  listPrice?: number
  extendedSalePrice?: number
  extendedListPrice?: number
}

export type Product = {
  id: string
  name: string
  description: string
  rating: number
  descriptionHtml?: string
  sku?: string
  slug?: string
  path?: string
  images: ProductImage[]
  // variants: ProductVariant[]
  price: ProductPrice
  // options: ProductOption[]
  vendor?: string
}
