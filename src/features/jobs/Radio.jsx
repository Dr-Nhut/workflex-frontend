function Radio({ item, checked }) {
    return (
        <div className="p-2">
            <input
                id={item.name}
                type="radio"
                name="category"
                value={item.id}
                defaultChecked={checked}
            />
            <label htmlFor={item.name} className="px-2 text-sm">
                {item.name}
            </label>
        </div>
    )
}

export default Radio
