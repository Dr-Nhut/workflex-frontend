import { useQuery } from '@tanstack/react-query'
import HeaderDetailPage from '../ui/HeaderDetailPage'
import { getOfferProcessing } from '../services/apiOffer'
import { getPaymentByOffer } from '../services/apiPayment'
import { useParams } from 'react-router-dom'
import { getDetailJob } from '../services/apiJob'
import PaymentDetail from '../payment/PaymentDetail'

function AdminPaymentDetailJob() {
    const jobId = useParams().jobId

    const { isLoading, data: job } = useQuery({
        queryKey: ['jobDetail', jobId],
        queryFn: () => getDetailJob(jobId),
    })

    const { data: offer } = useQuery({
        queryKey: ['offer', jobId],
        queryFn: () => getOfferProcessing(jobId),
    })

    const { status, data: payment } = useQuery({
        queryKey: ['payment', offer?.id],
        queryFn: () => getPaymentByOffer(offer.id),
        enabled: !!offer?.id,
    })

    if (isLoading || status === 'loading') return null

    return (
        <div className="m-8">
            <HeaderDetailPage>Chi tiết thanh toán</HeaderDetailPage>
            <PaymentDetail job={job} offer={offer} payment={payment} />
        </div>
    )
}

export default AdminPaymentDetailJob
