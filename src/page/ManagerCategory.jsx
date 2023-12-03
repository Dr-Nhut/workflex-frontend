import { useQuery } from '@tanstack/react-query'
import Table from '../ui/Table'
import Spinner from '../ui/Spinner'
import PageHeader from '../ui/PageHeader'
import { getAllCategories } from '../services/apiCategory'
import Pagination from '../ui/Pagination'
import { useEffect, useState } from 'react'
import SearchBar from '../common/SearchBar'
import CategoryRow from '../admin/category/CategoryRow,'
import Button from '../common/buttons/Button'
import Modal from '../ui/Modal-v1'
import AddCategoryForm from '../admin/category/AddCategoryForm'

function ManagerAccount() {
    const [page, setPage] = useState(1)
    const [value, setValue] = useState('')
    const [categoriesSearch, setCategoriesSearch] = useState([])

    const {
        isLoading,
        data: categories,
        error,
    } = useQuery({
        queryKey: ['all-categories'],
        queryFn: () => getAllCategories(),
        onSuccess: (data) => setCategoriesSearch(data),
    })

    useEffect(() => {
        if (isLoading) return
        if (!value) return setCategoriesSearch(categories)
        const result = categories.filter((item) => item.name.includes(value))
        setCategoriesSearch(result)
    }, [value])

    if (isLoading) return <Spinner />

    return (
        <>
            <PageHeader title="Quản lý lĩnh vực" />
            <div className="mb-2 flex items-center justify-between">
                <Modal>
                    <Modal.Open opens="add-category">
                        <Button
                            type="btn-primary"
                            size="small"
                            className="rounded-lg"
                        >
                            + Thêm lĩnh vực
                        </Button>
                    </Modal.Open>
                    <Modal.Window name="add-category" title="Thêm lĩnh vực">
                        <AddCategoryForm />
                    </Modal.Window>
                </Modal>
                <SearchBar
                    placeholder="Tìm theo tên"
                    value={value}
                    onChange={setValue}
                />
            </div>

            <Table columns="grid-cols-12">
                <Table.Header>
                    <th className="col-span-4">Id</th>
                    <th className="col-span-6">Tên lĩnh vực</th>
                    <th className="col-span-2"></th>
                </Table.Header>

                <Table.Body>
                    {[...categoriesSearch]
                        .slice(0 + 10 * (page - 1), 10 * page)
                        .map((item) => (
                            <CategoryRow key={item.id} category={item} />
                        ))}
                </Table.Body>
            </Table>

            <Pagination
                length={categoriesSearch.length}
                currentPage={page}
                onClick={setPage}
            />
        </>
    )
}

export default ManagerAccount
