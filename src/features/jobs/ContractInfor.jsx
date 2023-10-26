import { UilClockThree } from '@iconscout/react-unicons'

import JobName from '../../ui/JobName'
import Rectangle from '../../ui/Rectangle'
import Tab from '../../ui/Tab'
import { useState } from 'react'
import TaskProject from './TaskProject'
import PlanProject from './PlanProject'
import formatTime from '../../utils/formatTime'
import formatCurrency from '../../utils/formatCurrency'

function ContractInfor({ jobName, offer }) {
    const [isActive, setIsActive] = useState(1)
    return (
        <div>
            <Rectangle background="bg-green-500">
                <UilClockThree className="inline-block" />{' '}
                {formatTime(offer.dateEnd)}
            </Rectangle>
            <header className="mt-4 flex items-center justify-between">
                <JobName>{jobName}</JobName>

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
                    {isActive === 1 && <TaskProject />}
                    {isActive === 2 && <PlanProject plan={offer.plan} />}
                </Tab>
            </main>
        </div>
    )
}

export default ContractInfor
