import { useQuery } from '@tanstack/react-query'
import Table from '../ui/Table'
import Spinner from '../ui/Spinner'
import PageHeader from '../ui/PageHeader'
import AccountRow from '../admin/accounts/AccountRow'
import { getAllAccount } from '../services/apiUser'
import Pagination from '../ui/Pagination'
import { useEffect, useState } from 'react'
import SearchBar from '../common/SearchBar'

function ManagerAccount() {
    const [page, setPage] = useState(1)
    const [value, setValue] = useState('')
    const [accountsSearch, setAccountsSearch] = useState([])

    const {
        isLoading,
        data: accounts,
        error,
    } = useQuery({
        queryKey: ['all-account'],
        queryFn: () => getAllAccount(),
        onSuccess: (data) => setAccountsSearch(data),
    })

    useEffect(() => {
        if (isLoading) return
        if (!value) return setAccountsSearch(accounts)
        const result = accounts.filter((account) =>
            account.email.includes(value)
        )
        setAccountsSearch(result)
    }, [value])

    if (isLoading) return <Spinner />

    return (
        <>
            <PageHeader title="Quản lý tài khoản người dùng" />
            <SearchBar
                placeholder="Tìm kiếm bằng email"
                value={value}
                onChange={setValue}
            />
            <Table columns="grid-cols-12">
                <Table.Header>
                    <th className="col-span-2">Avatar</th>
                    <th className="col-span-2">Tên người dùng</th>
                    <th className="col-span-4">Email</th>
                    <th className="col-span-2">Loại tài khoản</th>
                    <th className="col-span-2"></th>
                </Table.Header>

                <Table.Body>
                    {[...accountsSearch]
                        .slice(0 + 10 * (page - 1), 10 * page)
                        .map((account) => (
                            <AccountRow key={account.id} account={account} />
                        ))}
                </Table.Body>
            </Table>

            <Pagination
                length={accountsSearch.length}
                currentPage={page}
                onClick={setPage}
            />
        </>
    )
}

export default ManagerAccount
