import { useQuery } from '@tanstack/react-query'
import Table from '../ui/Table'
import Spinner from '../ui/Spinner'
import PageHeader from '../ui/PageHeader'
import Pagination from '../ui/Pagination'
import { useEffect, useState } from 'react'
import SearchBar from '../common/SearchBar'
import Button from '../common/buttons/Button'
import Modal from '../ui/Modal-v1'
import { getAllSkills } from '../services/apiSkill'
import AddSkillForm from '../admin/skill/AddSkillForm'
import SkillRow from '../admin/skill/SkillRow'

function SkillCategory() {
    const [page, setPage] = useState(1)
    const [value, setValue] = useState('')
    const [skillsSearch, setSkillsSearch] = useState([])

    const {
        isLoading,
        data: skills,
        // error,
    } = useQuery({
        queryKey: ['all-skills'],
        queryFn: () => getAllSkills(),
        onSuccess: (data) => setSkillsSearch(data),
    })

    useEffect(() => {
        if (isLoading) return
        if (!value) return setSkillsSearch(skills)
        const result = skills.filter((item) => item.name.includes(value))
        setSkillsSearch(result)
    }, [value])

    if (isLoading) return <Spinner />

    return (
        <>
            <PageHeader title="Quản lý ngôn ngữ lập trình" />
            <div className="mb-2 flex items-center justify-between">
                <Modal>
                    <Modal.Open opens="add-category">
                        <Button
                            type="btn-primary"
                            size="small"
                            className="rounded-lg"
                        >
                            + Thêm ngôn ngữ lập trình
                        </Button>
                    </Modal.Open>
                    <Modal.Window
                        name="add-category"
                        title="Thêm ngôn ngữ lập trình"
                    >
                        <AddSkillForm />
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
                    <th className="col-span-6">Tên ngôn ngữ lập trình</th>
                    <th className="col-span-2"></th>
                </Table.Header>

                <Table.Body>
                    {[...skillsSearch]
                        .slice(0 + 10 * (page - 1), 10 * page)
                        .map((item) => (
                            <SkillRow key={item.id} skill={item} />
                        ))}
                </Table.Body>
            </Table>

            <Pagination
                length={skillsSearch.length}
                currentPage={page}
                onClick={setPage}
            />
        </>
    )
}

export default SkillCategory
