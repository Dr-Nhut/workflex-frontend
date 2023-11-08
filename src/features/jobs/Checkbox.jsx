import { useSearchParams } from 'react-router-dom'

function Checkbox({ item }) {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleOnChange = (e) => {
        const budget = searchParams.get('budget')
        let categories = searchParams.getAll('category')
        categories = e.target.checked
            ? [...categories, item.id]
            : categories.filter((category) => {
                  console.log(category, item.id)
                  category !== item.id
              })

        const query = `${budget ? `budget=${budget}&` : ''}${categories
            .map((category) => `category=${category}`)
            .join('&')}`

        setSearchParams(query)
    }

    return (
        <div className="p-2">
            <input
                id={item.name}
                checked={searchParams.getAll('category').includes(item.id)}
                type="checkbox"
                onChange={handleOnChange}
            />
            <label htmlFor={item.name} className="px-2 text-sm">
                {item.name}
            </label>
        </div>
    )
}

export default Checkbox
