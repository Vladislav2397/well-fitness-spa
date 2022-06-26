type PaginatorOptions = {
    currentPage: number
    total: number
    limit: number
}

export class Paginator {
    currentPage: PaginatorOptions['currentPage'] = 1
    total: PaginatorOptions['total'] = 10
    limit: PaginatorOptions['limit'] = 10

    constructor(params?: PaginatorOptions) {
        if (params) {
            this.currentPage = params.currentPage
            this.total = params.total
            this.limit = params.limit
        }
    }

    private get isNextPage() {
        return this.currentPage * this.limit < this.total
    }
    private get isPrevPage() {
        return this.currentPage > 1
    }

    get offset() {
        return (this.currentPage - 1) * this.limit
    }

    get quantity() {
        return Math.floor(this.total / this.limit)
    }

    set(params: PaginatorOptions): void {
        this.currentPage = params.currentPage
        this.total = params.total
        this.limit = params.limit
    }

    setCurrentPage(value: Paginator['currentPage']): void {
        this.currentPage = value
    }

    nextPage() {
        if (this.isNextPage) {
            this.currentPage++
        }
    }

    prevPage() {
        if (this.isPrevPage) {
            this.currentPage--
        }
    }
}
