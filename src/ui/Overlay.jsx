function Overlay({ children }) {
    return (
        <div className="fixed left-0 top-0 z-[1000] h-screen w-full bg-stone-600/30 backdrop-blur-sm backdrop-opacity-5 backdrop-sepia-0 transition-all duration-500">
            {children}
        </div>
    )
}

export default Overlay
