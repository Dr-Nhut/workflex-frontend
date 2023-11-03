import { useQuery } from '@tanstack/react-query'
import OfferItemCard from './OfferItemCard'
import { getDetailJob } from '../../services/apiJob'
import { useParams } from 'react-router-dom'

function OfferList({ offers }) {
    const jobId = useParams().id
    const { isLoading, data: jobDetail } = useQuery({
        queryKey: ['jobDetail', jobId],
        queryFn: () => getDetailJob(jobId),
    })

    if (isLoading) return null

    return (
        <div>
            {offers.map((offer) => (
                <OfferItemCard
                    key={offer.id}
                    offers={offers}
                    offer={offer}
                    dateStart={jobDetail.dateStart}
                />
            ))}
        </div>
    )
}

export default OfferList
