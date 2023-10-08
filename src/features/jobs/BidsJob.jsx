import Button from '../../common/buttons/Button'
import Table from '../../ui/Table'
import { UilEdit, UilTimesSquare } from '@iconscout/react-unicons'
import Rectangle from '../../ui/Rectangle'

function BidsJob() {
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
                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-5 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-1">12500000</td>
                    <td className="col-span-1">15000000</td>
                    <td className="col-span-2">
                        <Rectangle background="bg-teal-500">
                            Đang duyệt
                        </Rectangle>
                    </td>
                    <td className="col-span-1 flex text-stone-500">
                        <Button
                            type="btn-text"
                            className="rounded"
                            size="small"
                        >
                            <UilEdit />
                        </Button>
                        <Button
                            type="btn-text"
                            className="rounded"
                            size="small"
                        >
                            <UilTimesSquare />
                        </Button>
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-5 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-1">10.000.000</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-2">
                        <Rectangle background="bg-red-500">
                            Đã kết thúc
                        </Rectangle>
                    </td>
                    <td className="col-span-1 flex text-stone-500">
                        <Button
                            type="btn-text"
                            className="rounded"
                            size="small"
                        >
                            <UilEdit />
                        </Button>
                        <Button
                            type="btn-text"
                            className="rounded"
                            size="small"
                        >
                            <UilTimesSquare />
                        </Button>
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-5 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-1">11.000.000</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-2">
                        <Rectangle background="bg-teal-500">
                            Đang duyệt
                        </Rectangle>
                    </td>
                    <td className="col-span-1 flex text-stone-500">
                        <Button
                            type="btn-text"
                            className="rounded"
                            size="small"
                        >
                            <UilEdit />
                        </Button>
                        <Button
                            type="btn-text"
                            className="rounded"
                            size="small"
                        >
                            <UilTimesSquare />
                        </Button>
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-5 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-1">12.000.000</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-2">
                        <Rectangle background="bg-teal-500">
                            Đang duyệt
                        </Rectangle>
                    </td>
                    <td className="col-span-1 flex text-stone-500">
                        <Button
                            type="btn-text"
                            className="rounded"
                            size="small"
                        >
                            <UilEdit />
                        </Button>
                        <Button
                            type="btn-text"
                            className="rounded"
                            size="small"
                        >
                            <UilTimesSquare />
                        </Button>
                    </td>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default BidsJob
