import makeRequest from '@/api/helpers/makeRequest'

const getList = (): Promise<unknown> => makeRequest({
    url: '/products'
})
