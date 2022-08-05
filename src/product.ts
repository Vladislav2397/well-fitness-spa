import Vue from "vue"

export class BaseEntity {
    state

    constructor(props) {
        this.state = Vue.observable(props)
    }
}

export class Product extends BaseEntity {
    counter = 1

    increment(): void {
        console.log(this.state)

        this.state.name = `product ${++this.counter}`
    }

    toSelectOption() {
        return {
            id: this.state.id,
            name: this.state.name,
            is_active: this.state.isActive,
        }
    }
}
