import Button from '../../common/buttons/Button'
import Table from '../../ui/Table'
import { UilTimesCircle } from '@iconscout/react-unicons'

function FavouriteJob() {
    return (
        <Table columns="grid-cols-12">
            <Table.Header>
                <th className="col-span-2">Lĩnh vực</th>
                <th className="col-span-4">Tên công việc</th>
                <th className="col-span-2">Hạn chào giá</th>
                <th className="col-span-1">Ngân sách</th>
                <th className="col-span-1">Tình trạng</th>
                <th className="col-span-1"></th>
                <th className="col-span-1"></th>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-4 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">Còn 3 ngày</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-1">3 chào giá</td>
                    <td className="col-span-1">
                        <Button
                            type="btn-primary"
                            className="rounded"
                            size="small"
                        >
                            Chào giá
                        </Button>
                    </td>
                    <td className="col-span-1">
                        <UilTimesCircle className="mx-auto text-stone-500 hover:text-stone-800" />
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-4 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">Còn 3 ngày</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-1">5 chào giá</td>
                    <td className="col-span-1">
                        <Button
                            type="btn-primary"
                            className="rounded"
                            size="small"
                        >
                            Chào giá
                        </Button>
                    </td>
                    <td className="col-span-1">
                        <UilTimesCircle className="mx-auto text-stone-500 hover:text-stone-800" />
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-4 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">Còn 3 ngày</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-1">19 chào giá</td>
                    <td className="col-span-1">
                        <Button
                            type="btn-primary"
                            className="rounded"
                            size="small"
                        >
                            Chào giá
                        </Button>
                    </td>
                    <td className="col-span-1">
                        <UilTimesCircle className="mx-auto text-stone-500 hover:text-stone-800" />
                    </td>
                </Table.Row>

                <Table.Row>
                    <td className="col-span-2">Lập trình web</td>
                    <td className="col-span-4 line-clamp-1 text-left">
                        Thiết kế website thương mại điện tử tích hợp tìm kiếm
                        sản phẩm thông minh
                    </td>
                    <td className="col-span-2">Còn 3 ngày</td>
                    <td className="col-span-1">15.000.000</td>
                    <td className="col-span-1">9 chào giá</td>
                    <td className="col-span-1">
                        <Button
                            type="btn-primary"
                            className="rounded"
                            size="small"
                        >
                            Chào giá
                        </Button>
                    </td>
                    <td className="col-span-1">
                        <UilTimesCircle className="mx-auto text-stone-500 hover:text-stone-800" />
                    </td>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default FavouriteJob
