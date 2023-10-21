import { useQuery } from '@tanstack/react-query'
import Pagination from '../../ui/Pagination'
import JobItem from './JobItem'
import { getBiddingJob } from '../../services/apiJob'
import Spinner from '../../ui/Spinner'

// const joblist = [
//     {
//         id: 1,
//         employer: {
//             fullName: 'John',
//             avatarUrl: 'https://i.pravatar.cc/?u=a042581f4e29026704d',
//             address: 'Cần Thơ, Việt Nam',
//         },
//         name: 'Cần thiết kế website bán hàng',
//         description:
//             'Mình cần tìm freelancer làm một website bán hàng từ A-Z. Giao diện web có sẵn',
//         category: 'Lập trình web',
//         skills: ['WordPress', 'PHP', 'JavaScript'],
//         maxBudget: 15000000,
//         position: 'Toàn quốc',
//         experienceYear: '1',
//         numberBid: '3',
//         createdAt: '3',
//     }
// ]

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
