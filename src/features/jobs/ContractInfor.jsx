import { UilClockThree } from '@iconscout/react-unicons'

import JobName from '../../ui/JobName'
import Rectangle from '../../ui/Rectangle'
import Tab from '../../ui/Tab'
import { useContext, useState } from 'react'
import TaskProject from './TaskProject'
import PlanProject from './PlanProject'
import formatTime from '../../utils/formatTime'
import formatCurrency from '../../utils/formatCurrency'
import { useQuery } from '@tanstack/react-query'
import { getContractByOffer } from '../../services/apiContact'
import Spinner from '../../ui/Spinner'
import Button from '../../common/buttons/Button'
import { UserContext } from '../user/userSlice'

import Modal from '../../ui/Modal-v1'
import ConfirmCompleteJob from './ConfirmCompleteJob'

function ContractInfor({ job, offer }) {
    const { user } = useContext(UserContext)
    const [isActive, setIsActive] = useState(1)

    const {
        isLoading: loadingContract,
        data: contract,
        // error,
    } = useQuery({
        queryKey: ['contract'],
        queryFn: () => getContractByOffer(offer.id),
    })

    if (loadingContract) return <Spinner />

    return (
        <div>
            <div className="flex items-center justify-between">
                <Rectangle background="bg-green-500">
                    <UilClockThree className="inline-block" />
                    {formatTime(offer.dateEnd)}
                </Rectangle>

                {user.role === 'emp' && (
                    <Modal>
                        <Modal.Open opens="completeJob">
                            <Button
                                className="bg-teal-500"
                                type="btn-primary rounded"
                                size="small"
                            >
                                Hoàn thành dự án
                            </Button>
                        </Modal.Open>
                        <Modal.Window
                            name="completeJob"
                            title="Xác nhận hoàn thành"
                        >
                            <ConfirmCompleteJob jobId={job.id} />
                        </Modal.Window>
                    </Modal>
                )}
            </div>

            <header className="mt-4 flex items-center justify-between">
                <JobName>{job.name}</JobName>

                <span className="font-bold">{formatCurrency(offer.price)}</span>
            </header>

            <main>
                <Tab
                    tabs={[
                        {
                            id: 1,
                            name: 'Nhiệm vụ',
                        },
                        {
                            id: 2,
                            name: 'Kế hoạch thực hiện',
                        },
                    ]}
                    active={isActive}
                    onClick={setIsActive}
                >
                    {isActive === 1 && <TaskProject contract={contract.id} />}
                    {isActive === 2 && <PlanProject plan={offer.plan} />}
                </Tab>
            </main>
        </div>
    )
}

export default ContractInfor
