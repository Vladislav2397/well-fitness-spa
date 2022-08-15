import {Product} from "@/domain/product"
import {User} from "@/domain/user"

export class Cart {
    products: Product[]
    user: User

    constructor(products: Product[], user: User) {
        this.products = products
        this.user = user
    }

    add(...products: Product[]): void {
        this.products.push(...products)
    }

    contains(product: Product): boolean {
        return this.products.some(({ id }) => product.id === id)
    }
}
