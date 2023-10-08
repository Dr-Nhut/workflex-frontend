import { createContext, useContext } from 'react'

const TableContext = createContext()

function Table({ columns, children }) {
    return (
        <TableContext.Provider value={columns}>
            <table className="border-grey-200 bg-grey-100 w-full overflow-hidden rounded-lg border">
                {children}
            </table>
        </TableContext.Provider>
    )
}

function Header({ children }) {
    const columns = useContext(TableContext)
    return (
        <thead>
            <tr
                className={`grid items-center gap-x-2 bg-slate-200 py-2 transition-none ${columns}`}
            >
                {children}
            </tr>
        </thead>
    )
}

function Row({ children, onClick }) {
    const columns = useContext(TableContext)
    return (
        <tr
            onClick={onClick}
            className={`grid cursor-pointer items-center gap-x-2 border py-2 text-center transition-none hover:bg-slate-100 ${columns}`}
        >
            {children}
        </tr>
    )
}

function Body({ children }) {
    return <tbody>{children}</tbody>
}

Table.Header = Header
Table.Row = Row
Table.Body = Body

export default Table
