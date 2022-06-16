import { useState, useEffect } from "react"

const fetchData: IFetchData = async (endpoint, setResponseData) => {

    const apiURL = process.env.REACT_APP_API_URL

    if (!apiURL) return

    const response = await fetch(`${apiURL}/${endpoint}`)
    const {data, errors}: IJsonResponse = await response.json()
    setResponseData(data)
    console.log('error', errors)

}

const useFetch: IUseFetch = (endpoint) => {
    
    const [responseData, setResponseData] = useState({} as ObjectProps)

    useEffect(() => {
        fetchData(endpoint, setResponseData)
    }, [endpoint])

    return responseData

}

export default useFetch