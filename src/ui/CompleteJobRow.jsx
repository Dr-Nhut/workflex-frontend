import { useQuery } from '@tanstack/react-query'
import formatTime from '../utils/formatTime'
import Table from './Table'
import { getOfferProcessing } from '../services/apiOffer'
import formatCurrency from '../utils/formatCurrency'

function CompleteJobRow({ job }) {
    const { isLoading, data: offer } = useQuery({
        queryKey: ['offer', job.id],
        queryFn: () => getOfferProcessing(job.id),
    })
    if (isLoading) return null
    return (
        <Table.Row>
            <td className="col-span-2">{job.category}</td>
            <td className="col-span-4 line-clamp-1 text-left">{job.name}</td>
            <td className="col-span-2">{formatTime(job.completedAt)}</td>
            <td className="col-span-1">{formatTime(offer.dateEnd)}</td>
            <td className="col-span-1">{formatCurrency(offer.price)}</td>
            <td className="col-span-2">Chưa thanh toán</td>
        </Table.Row>
    )
}

export default CompleteJobRow
