function Input({ type, value, onChange, label }) {
    return (
        <>
            <label
                className="px-2 text-stone-500 font-semibold"
                htmlFor={label}
            >
                {label}
            </label>
            <input
                id={label}
                className="w-full my-2 p-2 pl-4 bg-stone-200 outline-none ring-primary ring-offset-1 focus:ring-2 rounded-xl "
                type={type}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default Input
