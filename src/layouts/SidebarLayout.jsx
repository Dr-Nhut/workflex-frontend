function SidebarLayout({
    children,
    sidebar,
    right = false,
    fullWidth = false,
    mainWidth = 'col-span-9',
}) {
    return (
        <div className={`${fullWidth ? '' : 'mx-32'} grid grid-cols-12`}>
            {!right && sidebar}
            <div className={mainWidth}>{children}</div>
            {right && sidebar}
        </div>
    )
}

export default SidebarLayout
