import Select from 'react-select'
import useOptions from '../hooks/useOptions'

function SelectFetching({ value, onChange, placeholder, urlOptions }) {
    const options = useOptions(urlOptions)

    console.log(options)
    return (
        <Select
            className="mt-4"
            // defaultValue={selectedOption}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            options={options}
            isMulti
        />
    )
}

export default SelectFetching
