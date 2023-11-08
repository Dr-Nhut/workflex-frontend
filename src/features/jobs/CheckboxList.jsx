import Checkbox from './Checkbox'

function CheckboxList({ items }) {
    return (
        <div>
            {items.map((item) => (
                <Checkbox key={item.id} item={item} />
            ))}
        </div>
    )
}

export default CheckboxList
