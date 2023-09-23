function UserName({ children, dark = false }) {
    return (
        <h2
            className={`p-px text-lg font-bold ${
                dark ? 'text-stone-900' : 'text-slate-200'
            }`}
        >
            {children}
        </h2>
    )
}

export default UserName
{
    name
}
