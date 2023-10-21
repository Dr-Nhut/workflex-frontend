import { useParams } from 'react-router-dom'
import { getOffersForJob } from '../../services/apiOffer'
import { useQuery } from '@tanstack/react-query'
import OfferItemCard from './OfferItemCard'

function OfferList() {
    const id = useParams().id
    const { data: offers, error } = useQuery({
        queryKey: ['offersForJob'],
        queryFn: () => getOffersForJob(id),
    })

    return (
        <div>
            {offers.map((offer) => (
                <OfferItemCard key={offer.id} offer={offer} />
            ))}
        </div>
    )
}

export default OfferList
