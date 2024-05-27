import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { URL_SERVER } from "../constants"
import formatKeyObject from "../utils/formatKeyObject"

export default function useOptions(urlOptions) {
    const [options, setOptions] = useState([])

    useEffect(() => {
        axios
            .get(`${URL_SERVER}${urlOptions}`)
            .then((res) => {
                const cateFormatted = formatKeyObject(res.data.data, [
                    { old: 'id', new: 'value' },
                    { old: 'name', new: 'label' },
                ])
                setOptions(cateFormatted)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [urlOptions])

    return options;
}
