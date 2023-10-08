import Table from '../../ui/Table'
import { UilTimesCircle, UilEdit } from '@iconscout/react-unicons'

function PendingJob() {
    return (
        <Table columns="grid-cols-10">
            <Table.Header>
                <th className="col-span-2">Lĩnh vực</th>
                <th className="col-span-4">Tên công việc</th>
                <th className="col-span-2">Ngày đăng</th>
                <th className="col-span-1">Ngân sách</th>
                <th className="col-span-1"></th>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-4 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">14:52 05/10/23</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-1 flex justify-center gap-x-2 text-stone-500 ">
                        <UilEdit className="hover:text-stone-800" />
                        <UilTimesCircle className="hover:text-stone-800" />
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-4 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">14:52 05/10/23</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-1 flex justify-center gap-x-2 text-stone-500 ">
                        <UilEdit className="hover:text-stone-800" />
                        <UilTimesCircle className="hover:text-stone-800" />
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-4 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">14:52 05/10/23</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-1 flex justify-center gap-x-2 text-stone-500 ">
                        <UilEdit className="hover:text-stone-800" />
                        <UilTimesCircle className="hover:text-stone-800" />
                    </td>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default PendingJob
