/*
interface IJsonResponse {
    status: string,
    body: ObjectProps,
    errors?: Array<{message: string}>
}


interface IFetchAPI {
    (endpoint: IEndpoint, requestOptions: ObjectProps): Promise<ObjectProps | undefined>
}

const fetchApi: IFetchAPI = async (endpoint, requestOptions) => {

    const apiURL = process.env.REACT_APP_API_URL

    console.log('apiurl',`${apiURL}/${endpoint}`)
    
    if (!apiURL) return

    const response = await fetch(`${apiURL}/${endpoint}`, requestOptions)

    console.log('response', response.json())
    const {body, errors}: IJsonResponse = await response.json()

    console.log('error: ', errors)

    console.log('data', body)

    return body    

}

export default fetchApi
*/