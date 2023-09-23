function Modal({ children }) {
    return (
        <ul className="absolute right-0 top-14 w-36 rounded-md bg-stone-50 py-2 shadow-sm shadow-slate-300">
            {children}
        </ul>
    )
}

export default Modal
