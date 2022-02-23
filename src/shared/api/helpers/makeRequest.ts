type RequestOptions = {
    url: string,
    method?: 'get' | 'post' | 'put' | 'delete'
}

async function makeRequest (
    { url, method = 'get' }: RequestOptions
) {
    try {
        const response = await fetch(
            url,
            {
                method
            }
        )

        if (response.status !== 200) {
            throw new Error(
                `Bad request ${response.status}: ${response.statusText}`
            )
        } else {
            return response.json()
        }
    } catch (error) {
        console.error(error)
    }
}

export default makeRequest
