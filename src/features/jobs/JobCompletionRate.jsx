import { useQuery } from '@tanstack/react-query'
import Label from '../../ui/Label'
import Progress from '../../ui/Progress'
import { UilBriefcase } from '@iconscout/react-unicons'
import { getFreelancerCompletedAndFailJobs } from '../../services/apiJob'

function JobCompletionRate({ userId }) {
    const { isLoading, data: jobs } = useQuery({
        queryKey: ['get-freelancer-completed-fail-jobs', userId],
        queryFn: () => getFreelancerCompletedAndFailJobs(userId),
    })

    console.log(jobs)

    if (isLoading) return null

    return (
        <>
            <Progress
                percent={Math.round(
                    (jobs.filter((job) => job.status >= 6).length /
                        jobs.length) *
                        100
                )}
                content="Tỉ lệ dự án hoàn thành"
            />
            <Label>
                <UilBriefcase className="inline" /> {jobs.length} việc
            </Label>
        </>
    )
}

export default JobCompletionRate
