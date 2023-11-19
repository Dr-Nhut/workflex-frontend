function SearchBar({ placeholder, value, onChange }) {
    return (
        <input
            className="p float-right m-2 mr-8 w-72 rounded-lg bg-stone-200 p-1 outline-none ring-blue-500 ring-offset-1 focus:ring-2"
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default SearchBar
