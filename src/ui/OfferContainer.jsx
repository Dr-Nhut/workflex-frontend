import { useQuery } from '@tanstack/react-query'
import OfferList from '../features/offers/OfferList'
import TitleSection from './TitleSection'
import { getOffersForJob } from '../services/apiOffer'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'

function OfferContainer() {
    const id = useParams().id
    const {
        isLoading,
        data: offers,
        error,
    } = useQuery({
        queryKey: ['offersForJob', id],
        queryFn: () => getOffersForJob(id),
    })

    if (isLoading) return <Spinner />
    return (
        <div className="mt-4 bg-stone-50 px-8 py-8">
            <TitleSection>
                Thông tin chào giá
                <span className="rounded-full bg-teal-500 px-2 text-stone-100">
                    {offers.length}
                </span>
            </TitleSection>

            <OfferList offers={offers} />
        </div>
    )
}

export default OfferContainer
