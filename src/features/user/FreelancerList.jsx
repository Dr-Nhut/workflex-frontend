import FreelancerItem from './FreelancerItem'
import Pagination from '../../ui/Pagination'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../../ui/Spinner'
import { getAllFreelancersByCategory } from '../../services/apiUser'
import { useState } from 'react'

function FreelancerList() {
    const [page, setPage] = useState(1)
    const searchParams = useSearchParams()[0]

    const { isLoading, data: freelancerList } = useQuery({
        queryKey: ['allFreelancers', searchParams.get('category')],
        queryFn: () =>
            getAllFreelancersByCategory(searchParams.get('category')),
    })

    if (isLoading) return <Spinner />

    return (
        <div className="mr-8">
            <ul className="mt-8">
                {[...freelancerList]
                    .slice(0 + (page - 1) * 10, 10 * page)
                    .map((freelancer) => (
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
    )
}

export default FreelancerList
