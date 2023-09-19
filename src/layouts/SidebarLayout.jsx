function SidebarLayout({ children, sidebar, right = false }) {
    return (
        <div className="mx-32 grid grid-cols-4">
            {!right && sidebar}
            <div className="col-span-3">{children}</div>
            {right && sidebar}
        </div>
    )
}

export default SidebarLayout
