import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../user/userSlice'
import { getJobRecommendation } from '../../services/apiRecommendation'
import Button from '../../common/buttons/Button'
import 'animate.css'
import JobCard from './JobCard'
import { UilAngleRight } from '@iconscout/react-unicons'

function JobRecommendation() {
    const { user } = useContext(UserContext)
    const [showJob, setShowJob] = useState(0)
    const [isAnimation, setIsAnimation] = useState('')
    const { isLoading, data: jobRecommmendations } = useQuery({
        queryKey: ['job-recommendations', user.id],
        queryFn: getJobRecommendation,
    })

    useEffect(() => {
        let animationTimeout
        if (jobRecommmendations?.length > 5) {
            const timer = setTimeout(() => {
                setIsAnimation('')

                if (animationTimeout) {
                    clearTimeout(animationTimeout)
                }

                animationTimeout = setTimeout(() => {
                    setShowJob((pre) => (pre === 0 ? 5 : 0))
                    setIsAnimation('animate__animated animate__backInRight')
                }, 1000)
            }, 59000)
            return () => {
                clearTimeout(timer)
                clearTimeout(animationTimeout)
            }
            // const timer1 = setTimeout(() => {
            //     console.log('timeout')
            //     setShowJob((pre) => (pre === 0 ? 5 : 0))
            //     setIsAnimation('animate__animated animate__backInRight')
            // }, 10000)
            // return () => clearTimeout(timer1)
        }
    }, [showJob, jobRecommmendations?.length])

    const handleOnClick = () => {
        if (jobRecommmendations.length > 5)
            setShowJob((pre) => (pre === 0 ? 5 : 0))
    }

    if (isLoading) return null

    return (
        <section>
            <header className="mb-4 flex items-center justify-between">
                <h4 className="text-xl font-semibold capitalize text-stone-700">
                    Có thể bạn quan tâm
                </h4>
                <Button
                    type="btn-text"
                    onClick={handleOnClick}
                    size="small"
                    className="rounded-xl"
                >
                    <UilAngleRight />
                </Button>
            </header>
            <ul className={isAnimation}>
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
