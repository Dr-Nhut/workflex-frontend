import Label from './Label'

function Input({
    type = 'text',
    label,
    placeholder = '',
    haft,
    register = null,
    error,
    messageError,
}) {
    return (
        <>
            {label && <Label>{label}</Label>}
            <input
                id={label}
                className={`my-2 ${
                    haft ? 'ml-2 w-2/5' : 'w-full'
                } rounded-xl bg-stone-200 p-2 pl-4 outline-none ${
                    error ? 'ring-2 ring-red-500' : 'ring-primary'
                } ring-offset-1 focus:ring-2`}
                type={type}
                {...register}
                placeholder={placeholder}
            />
            {error && (
                <p className=" px-2 text-red-500">
                    {error.message || messageError || 'Thông tin không hợp lệ'}
                </p>
            )}
        </>
    )
}

export default Input
