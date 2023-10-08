function ModalContainer({ children }) {
    return (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-stone-50 p-8 shadow-lg transition-all duration-500">
            {children}
        </div>
    )
}

export default ModalContainer
