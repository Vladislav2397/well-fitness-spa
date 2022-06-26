import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PaginationMixin extends Vue {
    pagination = {
        currentPage: 1,
        total: 1,
        limit: 10,
    }

    private get isNextPage(): boolean {
        return (
            this.pagination.currentPage * this.pagination.limit
        ) < this.pagination.total
    }
    private get isPrevPage(): boolean {
        return this.pagination.currentPage > 1
    }

    get paginationOffset(): number {
        return (this.pagination.currentPage - 1) * this.pagination.limit
    }

    get paginationQuantity(): number {
        return Math.ceil(this.pagination.total / this.pagination.limit)
    }

    get paginationLimit(): number {
        return this.pagination.limit
    }

    get currentPage(): number {
        return this.pagination.currentPage
    }

    setCurrentPage(value: PaginationMixin['pagination']['currentPage']): void {
        this.pagination.currentPage = value
    }

    setNextPage() {
        if (this.isNextPage) {
            this.pagination.currentPage++
        }
    }

    setPrevPage() {
        if (this.isPrevPage) {
            this.pagination.currentPage--
        }
    }
}
