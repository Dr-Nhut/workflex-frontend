import { useState } from 'react'
import PageHeader from '../ui/PageHeader'
import { useSearchParams } from 'react-router-dom'
import Spinner from '../ui/Spinner'
import { useQuery } from '@tanstack/react-query'
import FreelancerItem from '../features/user/FreelancerItem'
import Pagination from '../ui/Pagination'
import { getAllFreelancers } from '../services/apiUser'

function FreelancerResult() {
    const [page, setPage] = useState(1)
    const [freelancerList, setFreelancerList] = useState([])

    const searchParams = useSearchParams()[0]

    const { isLoading } = useQuery({
        queryKey: ['result-freelancers', searchParams.get('q')],
        queryFn: () => getAllFreelancers(),
        onSuccess: (data) => {
            data = data.filter((freelancer) =>
                freelancer.email.includes(searchParams.get('q'))
            )
            setFreelancerList(data)
        },
    })

    if (isLoading) return <Spinner />

    return (
        <div>
            <PageHeader title="Kết quả tìm kiếm Freelancer" />
            <div className="mr-8">
                <ul className="mt-8">
                    {freelancerList.map((freelancer) => (
                        <FreelancerItem
                            key={freelancer.id}
                            freelancerId={freelancer.id}
                        />
                    ))}
                </ul>
                <Pagination
                    length={freelancerList.length}
                    currentPage={page}
                    onClick={setPage}
                />
            </div>
        </div>
    )
}

export default FreelancerResult
