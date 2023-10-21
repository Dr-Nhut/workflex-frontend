import Select from 'react-select'
import useOptions from '../hooks/useOptions'

function SelectFetching({
    value,
    onChange,
    placeholder,
    urlOptions,
    isMulti = false,
    isSearchable = true,
}) {
    const options = useOptions(urlOptions)

    return (
        <Select
            className="mt-4"
            // defaultValue={selectedOption}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            options={options}
            isMulti={isMulti}
            isSearchable={isSearchable}
        />
    )
}

export default SelectFetching
