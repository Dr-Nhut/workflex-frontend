import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../user/userSlice'
import { getFreelancerRecommendation } from '../../services/apiRecommendation'
import Button from '../../common/buttons/Button'
import 'animate.css'
import { UilAngleRight } from '@iconscout/react-unicons'
import { getCategoryByUser } from '../../services/apiCategory'
import FreelancerItem from './FreelancerItem'

function FreelancerRecommendation() {
    const { user } = useContext(UserContext)
    const [showJob, setShowJob] = useState(0)
    const [isAnimation, setIsAnimation] = useState('')

    const { data: categories } = useQuery({
        queryKey: ['categories', user.id],
        queryFn: () => getCategoryByUser(user.id),
    })

    const { data: freelancerRecommendation } = useQuery({
        queryKey: ['freelancer-recommendations', user.id],
        queryFn: () => getFreelancerRecommendation(categories[0].categoryId),
        enabled: !!categories,
    })

    useEffect(() => {
        let animationTimeout
        if (freelancerRecommendation?.length > 5) {
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
        }
    }, [showJob, freelancerRecommendation?.length])

    const handleOnClick = () => {
        if (freelancerRecommendation.length > 5)
            setShowJob((pre) => (pre === 0 ? 5 : 0))
    }

    return (
        <section>
            <header className="mb-4 flex items-center justify-between">
                <h4 className="text-xl font-semibold capitalize text-stone-700">
                    Freelancer nổi bật
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
                {freelancerRecommendation
                    ?.slice(0 + showJob, 5 + showJob)
                    .map((freelancer) => (
                        <FreelancerItem
                            key={freelancer.freelancerId}
                            freelancerId={freelancer.freelancerId}
                        />
                    ))}
            </ul>
        </section>
    )
}

export default FreelancerRecommendation
