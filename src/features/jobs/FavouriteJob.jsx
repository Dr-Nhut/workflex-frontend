import { useContext, useEffect, useState } from 'react'
import Table from '../../ui/Table'
import { UserContext } from '../user/userSlice'
import FavouriteJobRow from '../../ui/FavoriteJobRow'

function FavouriteJob() {
    const { user } = useContext(UserContext)
    const [favouriteJobs, setFavouriteJobs] = useState([])

    useEffect(() => {
        setFavouriteJobs(JSON.parse(localStorage.getItem(user.id)) || [])
    }, [user.id])

    return (
        <Table columns="grid-cols-12">
            <Table.Header>
                <th className="col-span-2">Lĩnh vực</th>
                <th className="col-span-4">Tên công việc</th>
                <th className="col-span-2">Hạn chào giá</th>
                <th className="col-span-2">Ngân sách</th>
                <th className="col-span-1"></th>
                <th className="col-span-1"></th>
            </Table.Header>

            <Table.Body>
                {favouriteJobs.map((job) => (
                    <FavouriteJobRow
                        key={job}
                        id={job}
                        onChange={setFavouriteJobs}
                    />
                ))}
            </Table.Body>
        </Table>
    )
}

export default FavouriteJob
