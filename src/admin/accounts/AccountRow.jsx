import Table from '../../ui/Table'
import { URL_SERVER_SIMPLE } from '../../constants'
import { UilLockAlt, UilLockOpenAlt } from '@iconscout/react-unicons'
import Modal from '../../ui/Modal-v1'
import ConfirmBlockAccount from './ConfirmBlockAccount'
import ConfirmUnblockAccount from './ConfirmUnblockAccount'

function AccountRow({ account }) {
    return (
        <Table.Row disabled={account.status === 1 ? true : false}>
            <td className="col-span-2">
                <img
                    className="mx-auto h-16 w-16"
                    src={`${URL_SERVER_SIMPLE}${account.avatar}`}
                    alt={account.id}
                />
            </td>
            <td className="col-span-2 line-clamp-1 text-left">
                {account.fullname}
            </td>
            <td className="col-span-4">{account.email}</td>
            <td className="col-span-2">
                {account.role === 'emp' ? 'Quản trị viên' : 'Freelancer'}
            </td>
            <td className="col-span-2">
                <Modal>
                    <Modal.Open opens="block-account">
                        {account.status === 1 ? (
                            <UilLockOpenAlt />
                        ) : (
                            <UilLockAlt />
                        )}
                    </Modal.Open>
                    <Modal.Window
                        title={
                            account.status === 1
                                ? 'Mở khóa tài khoản'
                                : 'Khoá tài khoản'
                        }
                        name="block-account"
                    >
                        {account.status === 1 ? (
                            <ConfirmUnblockAccount accountId={account.id} />
                        ) : (
                            <ConfirmBlockAccount accountId={account.id} />
                        )}
                    </Modal.Window>
                </Modal>
            </td>
        </Table.Row>
    )
}

export default AccountRow
