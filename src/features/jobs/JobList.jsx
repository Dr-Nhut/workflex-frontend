import { useQuery } from '@tanstack/react-query'
import { getBiddingJob } from '../../services/apiJob'
import Pagination from '../../ui/Pagination'
import Spinner from '../../ui/Spinner'
import JobItem from './JobItem'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function JobList() {
    const [searchParams] = useSearchParams()
    const [page, setPage] = useState(1)

    const {
        isLoading,
        data: jobs,
        error,
    } = useQuery({
        queryKey: ['acceptingBidsJob', searchParams.toString()],
        queryFn: () => getBiddingJob(searchParams.toString()),
    })

    if (isLoading) return <Spinner />

    return (
        <>
            {jobs.length > 0 ? (
                <>
                    <ul className="mt-8 flex list-none flex-wrap justify-between gap-8">
                        {[...jobs]
                            .slice(0 + (page - 1) * 10, 10 * page)
                            .map((job) => (
                                <JobItem key={job.id} job={job} />
                            ))}
                    </ul>
                    <Pagination
                        length={Math.ceil(jobs.length / 10)}
                        currentPage={page}
                        onClick={setPage}
                    />
                </>
            ) : (
                <span>Không tìm thấy công việc.</span>
            )}
        </>
    )
}

export default JobList
