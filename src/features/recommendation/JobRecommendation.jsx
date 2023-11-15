import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../user/userSlice'
import { getJobRecommendation } from '../../services/apiRecommendation'
import Button from '../../common/buttons/Button'
import JobCard from './JobCard'

function JobRecommendation() {
    const { user } = useContext(UserContext)
    const [showJob, setShowJob] = useState(0)
    const { isLoading, data: jobRecommmendations } = useQuery({
        queryKey: ['job-recommendations', user.id],
        queryFn: getJobRecommendation,
    })

    useEffect(() => {
        if (jobRecommmendations?.length > 5) {
            const timer1 = setTimeout(
                () => setShowJob((pre) => (pre === 0 ? 5 : 0)),
                60000
            )
            return () => clearTimeout(timer1)
        }
    }, [showJob, jobRecommmendations?.length])

    if (isLoading) return null

    return (
        <section>
            <header className="mb-4 flex items-center justify-between">
                <h4 className="text-xl font-semibold capitalize text-stone-700">
                    Có thể bạn quan tâm
                </h4>
                <Button type="btn-primary" size="small" className="rounded-xl">
                    Xem tất cả
                </Button>
            </header>
            <ul>
                {jobRecommmendations
                    .slice(0 + showJob, 5 + showJob)
                    .map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
            </ul>
        </section>
    )
}

export default JobRecommendation
