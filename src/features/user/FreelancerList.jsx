import FreelancerItem from './FreelancerItem'
import Pagination from '../../ui/Pagination'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getFreelancerRecommendation } from '../../services/apiRecommendation'
import Spinner from '../../ui/Spinner'

function FreelancerList() {
    const searchParams = useSearchParams()[0]

    const { isLoading, data: freelancerList } = useQuery({
        queryKey: ['recommendation', searchParams.get('category')],
        queryFn: () =>
            getFreelancerRecommendation(searchParams.get('category')),
    })

    if (isLoading) return <Spinner />

    return (
        <div className="mr-8">
            <ul className="mt-8">
                {freelancerList.map((freelancer) => (
                    <FreelancerItem
                        key={freelancer.freelancerId}
                        freelancerId={freelancer.freelancerId}
                    />
                ))}
            </ul>
            <Pagination length={5} />
        </div>
    )
}

export default FreelancerList
