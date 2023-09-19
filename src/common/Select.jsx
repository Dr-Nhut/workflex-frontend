import Label from './Label'

function Select({ label, options, icon }) {
    return (
        <>
            {label != undefined && <Label>{label}</Label>}
            <div className="relative">
                <span className="absolute left-2 top-5 text-primary">
                    {icon}
                </span>
                <select
                    className="my-4 block w-full cursor-pointer  rounded-xl bg-stone-400/70 p-2 pl-8 font-semibold outline-none ring-primary ring-offset-1 focus:ring-2"
                    id={label}
                >
                    {options.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default Select
