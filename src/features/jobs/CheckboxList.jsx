function CheckboxList({ items }) {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id} className="p-2">
                    <input id={item.name} type="checkbox" />
                    <label htmlFor={item.name} className="px-2">
                        {item.name}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default CheckboxList
