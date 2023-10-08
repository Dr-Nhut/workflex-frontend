import Table from '../../ui/Table'
import { UilTimesCircle, UilPadlock } from '@iconscout/react-unicons'

function AcceptingBidsJob() {
    return (
        <Table columns="grid-cols-12">
            <Table.Header>
                <th className="col-span-2">Lĩnh vực</th>
                <th className="col-span-4">Tên công việc</th>
                <th className="col-span-2">Hạn chào giá</th>
                <th className="col-span-2">Lượt chào giá</th>
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
                    <td className="col-span-2">00:00 10/10/23</td>
                    <td className="col-span-2">5 chào giá</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-1 flex justify-center gap-x-2 text-stone-500 ">
                        <UilPadlock className="hover:text-stone-800" />
                        <UilTimesCircle className="hover:text-stone-800" />
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-4 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">00:00 10/10/23</td>
                    <td className="col-span-2">5 chào giá</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-1 flex justify-center gap-x-2 text-stone-500 ">
                        <UilPadlock className="hover:text-stone-800" />
                        <UilTimesCircle className="hover:text-stone-800" />
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-4 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">00:00 10/10/23</td>
                    <td className="col-span-2">5 chào giá</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-1 flex justify-center gap-x-2 text-stone-500 ">
                        <UilPadlock className="hover:text-stone-800" />
                        <UilTimesCircle className="hover:text-stone-800" />
                    </td>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default AcceptingBidsJob
