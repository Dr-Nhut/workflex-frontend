import { useQuery } from '@tanstack/react-query'
import Button from '../common/buttons/Button'
import Table from './Table'
import { UilTimesCircle } from '@iconscout/react-unicons'
import { getDetailJob } from '../services/apiJob'
import formatTime from '../utils/formatTime'
import formatCurrency from '../utils/formatCurrency'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../features/user/userSlice'

function FavouriteJobRow({ id, onChange }) {
    const { user } = useContext(UserContext)

    const { isLoading, data: jobDetail } = useQuery({
        queryKey: ['jobDetail', id],
        queryFn: () => getDetailJob(id),
    })

    const handleOnClick = () => {
        const currentFavourite = JSON.parse(localStorage.getItem(user.id))
        localStorage.setItem(
            user.id,
            JSON.stringify(currentFavourite.filter((job) => job !== id))
        )

        onChange(currentFavourite.filter((job) => job !== id))
    }

    if (isLoading || jobDetail?.status !== 3) return null

    return (
        <Table.Row>
            <td className="col-span-2">{jobDetail.category}</td>
            <td className="col-span-4 line-clamp-1 text-left">
                {jobDetail.name}
            </td>
            <td className="col-span-2">{formatTime(jobDetail.bidDeadline)}</td>
            <td className="col-span-2">
                {formatCurrency(jobDetail.maxBudget)}
            </td>
            <td className="col-span-1">
                <Button type="btn-primary" className="rounded" size="small">
                    <Link to={`/freelancer-bids/${id}`}>Chào giá</Link>
                </Button>
            </td>
            <td className="col-span-1">
                <Button onClick={handleOnClick}>
                    <UilTimesCircle className="mx-auto text-stone-500 hover:text-stone-800" />
                </Button>
            </td>
        </Table.Row>
    )
}

export default FavouriteJobRow
