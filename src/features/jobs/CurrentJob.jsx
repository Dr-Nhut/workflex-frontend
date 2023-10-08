import Table from '../../ui/Table'
import Rectangle from '../../ui/Rectangle'
import { useNavigate } from 'react-router-dom'

function CurrentJob() {
    const navigate = useNavigate()
    return (
        <Table columns="grid-cols-12">
            <Table.Header>
                <th className="col-span-2">Lĩnh vực</th>
                <th className="col-span-6">Tên công việc</th>
                <th className="col-span-2">Thời hạn</th>
                <th className="col-span-1">Tiến độ</th>
                <th className="col-span-1"></th>
            </Table.Header>

            <Table.Body>
                <Table.Row onClick={() => navigate('/contract')}>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-6 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">Còn 2 tuần</td>
                    <td className="col-span-1">
                        <Rectangle background="bg-green-500">7/15</Rectangle>
                    </td>
                    <td className="col-span-1">
                        <span className="rounded-xl bg-red-600 px-2 text-stone-50">
                            2
                        </span>
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-6 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">Còn 2 tuần</td>
                    <td className="col-span-1">
                        <Rectangle background="bg-green-500">7/15</Rectangle>
                    </td>
                    <td className="col-span-1">
                        <span className="rounded-xl bg-red-600 px-2 text-stone-50">
                            5
                        </span>
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-6 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">Còn 2 tuần</td>
                    <td className="col-span-1">
                        <Rectangle background="bg-green-500">7/15</Rectangle>
                    </td>
                    <td className="col-span-1">
                        <span className="rounded-xl bg-red-600 px-2 text-stone-50">
                            1
                        </span>
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-6 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">Còn 2 tuần</td>
                    <td className="col-span-1">
                        <Rectangle background="bg-green-500">7/15</Rectangle>
                    </td>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default CurrentJob
