import Label from './Label'

function Input({ type, value, onChange, label }) {
    return (
        <>
            <Label>{label}</Label>
            <input
                id={label}
                className="my-2 w-full rounded-xl bg-stone-200 p-2 pl-4 outline-none ring-primary ring-offset-1 focus:ring-2 "
                type={type}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default Input
