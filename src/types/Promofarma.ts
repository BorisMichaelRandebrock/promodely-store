export interface Product extends SearchData {
  product_id: string
  updated_at: string
  name: string
  has_stock: boolean
  recommended_prices: {
    amount?: number | undefined
    currency?: string
    country?: string
  }[]
  manofacturer: {
    manofacturer_name: string
  }
  brand?: {
    brand_id: string
    name?: string
  }
  main_category: {
    category_id: string
    category_name: string
  }
}

export interface SearchData {
  response: {
    products: Product[]
    metadata: {
      totalProducts: number
    }
  }
}
