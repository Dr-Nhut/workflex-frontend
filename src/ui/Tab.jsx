function Tab({ tabs, active, onClick, children }) {
    return (
        <>
            <ul className="flex border-b px-6 text-center text-lg font-semibold text-stone-400">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={`cursor-pointer p-4 hover:text-sky-500 ${
                            active === tab.id && 'activeTab'
                        }`}
                        onClick={() => onClick(tab.id)}
                    >
                        {tab.name}
                    </li>
                ))}
            </ul>
            {children}
        </>
    )
}

export default Tab
