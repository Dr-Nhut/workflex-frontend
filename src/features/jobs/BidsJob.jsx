import Table from '../../ui/Table'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'
import { getOffersByFreelancer } from '../../services/apiOffer'
import Spinner from '../../ui/Spinner'
import FreelancerBidsRow from '../../ui/FreelancerBidsRow'

function BidsJob() {
    const { user } = useContext(UserContext)
    const {
        isLoading,
        data: offers,
        // error,
    } = useQuery({
        queryKey: ['offersByFreelancer', user.id],
        queryFn: () => getOffersByFreelancer(user.id),
    })

    if (isLoading) return <Spinner />

    return (
        <Table columns="grid-cols-12">
            <Table.Header>
                <th className="col-span-2">Lĩnh vực</th>
                <th className="col-span-5">Tên công việc</th>
                <th className="col-span-1">Giá đã gửi</th>
                <th className="col-span-1">Ngân sách</th>
                <th className="col-span-2">Tình trạng</th>
                <th className="col-span-1"></th>
                <th className="col-span-1"></th>
            </Table.Header>

            <Table.Body>
                {offers.map((offer) => (
                    <FreelancerBidsRow key={offer.id} offer={offer} />
                ))}
            </Table.Body>
        </Table>
    )
}

export default BidsJob
