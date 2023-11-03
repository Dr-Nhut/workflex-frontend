import { useQuery } from '@tanstack/react-query'
import Label from '../../ui/Label'
import Progress from '../../ui/Progress'
import { UilEnvelopeCheck } from '@iconscout/react-unicons'
import { getOffersByFreelancer } from '../../services/apiOffer'

function OfferAcceptanceRate({ userId }) {
    const { isLoading, data: offered } = useQuery({
        queryKey: ['offeredByFreealncer', userId],
        queryFn: () => getOffersByFreelancer(userId, 1),
    })

    const offerAcceptanceRate = (offers) => {
        const numAccept = offers.filter(
            (offer) => offer.status === 'Đang thực hiện'
        ).length
        return Math.round((numAccept / offers.length) * 100)
    }

    if (isLoading) return null

    return (
        <>
            <Progress
                percent={offerAcceptanceRate(offered)}
                content="Tỉ lệ được chấp nhận chào giá"
            />
            <Label>
                <UilEnvelopeCheck />
                Chào giá
            </Label>
        </>
    )
}

export default OfferAcceptanceRate
