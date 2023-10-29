import { useQuery } from '@tanstack/react-query'
import Table from './Table'
import { getOfferProcessing } from '../services/apiOffer'
import { getPaymentByOffer } from '../services/apiPayment'
import Button from '../common/buttons/Button'
import formatCurrency from '../utils/formatCurrency'
import { useNavigate } from 'react-router-dom'

function PaidJobRow({ job }) {
    const { id, category, name, employerEmail } = job
    const navigate = useNavigate()

    const { data: offer } = useQuery({
        queryKey: ['offer', id],
        queryFn: () => getOfferProcessing(id),
    })

    const { data: payment } = useQuery({
        queryKey: ['payment', offer?.id],
        queryFn: () => getPaymentByOffer(offer.id),
        // The query will not execute until the userId exists
        enabled: !!offer?.id,
    })

    return (
        <Table.Row
            onClick={() => navigate(`/admin/job-manager/${job.id}/payment`)}
        >
            <td className="col-span-2">{category}</td>
            <td className="col-span-4 line-clamp-1 text-left">{name}</td>
            <td className="col-span-2">{employerEmail}</td>
            <td className="col-span-2">{offer?.freelancerEmail}</td>
            <td className="col-span-1">
                {offer ? formatCurrency(offer.price) : ''}
            </td>
            <td className="col-span-1">
                <Button
                    type="btn-text"
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation()
                        window.open(
                            `https://dashboard.stripe.com/test/payments/${payment?.paymentIntent}`,
                            '_blank'
                        )
                    }}
                >
                    Stripe
                </Button>
            </td>
        </Table.Row>
    )
}

export default PaidJobRow
