import { StateCreator } from 'zustand'

// TODO - create a type for the product
type TemporaryProductType = {
  id: string
  amount: number
}

export interface CartSliceProps {
  products: TemporaryProductType[]
  loadProducts: () => Promise<void>
  findProduct: (id: string) => TemporaryProductType | null

  // Cart being managed by the backend
  incrementProduct: (id: string) => Promise<void>
  decrementProduct: (id: string) => Promise<void>
}

export const cartSlice: StateCreator<CartSliceProps> = (set, get) => ({
  products: [],
  loadProducts: async () => {},
  findProduct: (id: string) => {
    const { products } = get()

    const product = products.find((product) => product.id === id)

    if (!product) return null
    return product
  },
  incrementProduct: async (id: string) => {
    const { products: oldProducts, findProduct } = get()
    const product = findProduct(id)

    if (!product) {
      // Fetch product
      return
    }

    const productIndex = oldProducts.findIndex((item) => item.id === id)

    if (productIndex < 0) {
      // Something broke
      return
    }

    product.amount += 1

    oldProducts[productIndex] = product
    const products = [...oldProducts]

    set(() => ({ products }))
  },
  decrementProduct: async (id: string) => {
    const { products: oldProducts, findProduct } = get()
    const product = findProduct(id)

    if (!product) {
      return
    }

    const productIndex = oldProducts.findIndex((item) => item.id === id)

    if (productIndex < 0) {
      // Something broke
      return
    }

    product.amount -= 1

    if (product.amount <= 0) {
      // Remove product
      oldProducts.splice(productIndex, 1)
    } else {
      oldProducts[productIndex] = product
    }

    const products = [...oldProducts]
    set(() => ({ products }))
  },
})
