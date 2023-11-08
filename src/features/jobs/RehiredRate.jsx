import { useQuery } from '@tanstack/react-query'
import { getFreelancerCurrentAndFailJobs } from '../../services/apiJob'
import Label from '../../ui/Label'
import Progress from '../../ui/Progress'
import { UilThumbsUp } from '@iconscout/react-unicons'

function RehiredRate({ userId }) {
    const { isLoading, data: jobs } = useQuery({
        queryKey: ['get-freelancer-current-fail-jobs', userId],
        queryFn: () => getFreelancerCurrentAndFailJobs(userId),
    })

    function rehiredRate(jobs) {
        let duplicate = 0
        const arr = jobs.filter((job, index) => {
            const findElement = [...jobs]
                .slice(0, index)
                .filter((item) => item.employerId === job.employerId)

            if (findElement.length === 0) return job
            else {
                duplicate += findElement.length
                console.log(index, duplicate)
            }
        })

        return { duplicate, sumElement: arr.length }
    }

    if (!isLoading) {
        const { duplicate, sumElement } = rehiredRate(jobs)
        var percent = Math.round((duplicate / sumElement) * 100)
    }

    if (isLoading) return null

    return (
        <>
            <Progress percent={percent || 0} content="Tỉ lệ được thuê lại" />
            <Label>
                <UilThumbsUp />
                Thuê lại
            </Label>
        </>
    )
}

export default RehiredRate
