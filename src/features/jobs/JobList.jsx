import { useQuery } from '@tanstack/react-query'
import Pagination from '../../ui/Pagination'
import JobItem from './JobItem'
import { getBiddingJob } from '../../services/apiJob'
import Spinner from '../../ui/Spinner'

function JobList() {
    const {
        isLoading,
        data: jobs,
        error,
    } = useQuery({
        queryKey: ['acceptingBidsJob'],
        queryFn: getBiddingJob,
    })

    if (isLoading) return <Spinner />

    return (
        <>
            <ul className="mt-8 flex list-none flex-wrap justify-between gap-8">
                {jobs.map((job) => (
                    <JobItem key={job.id} job={job} />
                ))}
            </ul>
            <Pagination length={10} />
        </>
    )
}

export default JobList
