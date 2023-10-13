import Label from './Label'

function TextArea({ label, error, register, placeholder }) {
    return (
        <>
            {label && <Label>{label}</Label>}
            <textarea
                id={label}
                rows={6}
                className={`my-2 w-full rounded-xl bg-stone-200 p-2 pl-4 outline-none ${
                    error ? 'ring-2 ring-red-500' : 'ring-primary'
                } ring-offset-1 focus:ring-2`}
                {...register}
                placeholder={placeholder}
            />
            {error && (
                <p className=" px-2 text-red-500">
                    {error.message && 'Thông tin không hợp lệ'}
                </p>
            )}
        </>
    )
}

export default TextArea
