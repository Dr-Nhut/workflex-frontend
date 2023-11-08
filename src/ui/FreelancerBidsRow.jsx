import Button from '../common/buttons/Button'
import Rectangle from './Rectangle'
import Table from './Table'
import { UilEdit, UilTimesSquare } from '@iconscout/react-unicons'
import formatCurrency from '../utils/formatCurrency'
import Modal from './Modal-v1'
import EditOfferForm from '../features/offers/EditOfferForm'
import ConfirmDeleteOffer from '../features/offers/ConfirmDeleteOffer'

function FreelancerBidsRow({ offer }) {
    const { categoryName, jobName, price, maxBudget, status } = offer
    return (
        <Table.Row>
            <td className="col-span-2">{categoryName}</td>
            <td className="col-span-5 line-clamp-1 text-left">{jobName}</td>
            <td className="col-span-1">{formatCurrency(price)}</td>
            <td className="col-span-1">{formatCurrency(maxBudget)}</td>
            <td className="col-span-2">
                <Rectangle background="bg-teal-500">{status}</Rectangle>
            </td>
            <td className="col-span-1 flex text-stone-500">
                <Modal>
                    <Modal.Open opens="edit-my-offer">
                        <Button
                            type="btn-text"
                            className="rounded"
                            size="small"
                        >
                            <UilEdit />
                        </Button>
                    </Modal.Open>
                    <Modal.Window
                        name="edit-my-offer"
                        title="Chỉnh sửa lời chào giá"
                    >
                        <EditOfferForm offer={offer} />
                    </Modal.Window>
                </Modal>

                <Modal>
                    <Modal.Open opens="delete-my-offer">
                        <Button
                            type="btn-text"
                            className="rounded"
                            size="small"
                        >
                            <UilTimesSquare />
                        </Button>
                    </Modal.Open>
                    <Modal.Window
                        title="Xóa chào giá cho công việc"
                        name="delete-my-offer"
                    >
                        <ConfirmDeleteOffer offerId={offer.id} />
                    </Modal.Window>
                </Modal>
            </td>
        </Table.Row>
    )
}

export default FreelancerBidsRow
