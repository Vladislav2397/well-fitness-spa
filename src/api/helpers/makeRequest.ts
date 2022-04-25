type RequestOptions = {
    url: string
    method?: 'get' | 'post' | 'put' | 'delete'
}

async function makeRequest({ url, method = 'get' }: RequestOptions) {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method,
        })

        if (response.status > 400) {
            throw new Error(
                `Bad request ${response.status}: ${response.statusText}`,
            )
        } else {
            return response.json()
        }
    } catch (error) {
        console.error(error)
    }
}

export default makeRequest
