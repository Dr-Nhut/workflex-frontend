import Label from './Label'

function Input({
    type = 'text',
    value = '',
    onChange,
    label,
    placeholder = '',
    haft,
}) {
    return (
        <>
            {label && <Label>{label}</Label>}
            <input
                id={label}
                className={`my-2 ${
                    haft ? 'ml-2 w-2/5' : 'w-full'
                } rounded-xl bg-stone-200 p-2 pl-4 outline-none ring-primary ring-offset-1 focus:ring-2`}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}

export default Input
