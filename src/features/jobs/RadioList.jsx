import { useEffect, useState } from 'react'
import Radio from './Radio'
import { useSearchParams } from 'react-router-dom'

function RadioList({ items }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [isChecked, setIsChecked] = useState(
        searchParams.get('category') || items[0].id
    )

    useEffect(() => {
        setSearchParams({ category: isChecked })
    }, [isChecked, setSearchParams])

    return (
        <div onChange={(e) => setIsChecked(e.target.value)}>
            {items.map((item) => (
                <Radio
                    key={item.id}
                    item={item}
                    checked={item.id === isChecked}
                />
            ))}
        </div>
    )
}

export default RadioList
