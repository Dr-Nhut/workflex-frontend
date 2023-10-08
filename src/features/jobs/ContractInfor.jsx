import { UilClockThree } from '@iconscout/react-unicons'

import JobName from '../../ui/JobName'
import Rectangle from '../../ui/Rectangle'
import Tab from '../../ui/Tab'
import { useState } from 'react'
import TaskProject from './TaskProject'
import PlanProject from './PlanProject'

function ContractInfor() {
    const [isActive, setIsActive] = useState(1)
    return (
        <div>
            <Rectangle background="bg-green-500">
                <UilClockThree className="inline-block" /> 01/11/2023
            </Rectangle>
            <header className="mt-4 flex items-center justify-between">
                <JobName>Cần thiết kế website bán hàng</JobName>

                <span className="font-bold">12.5 triệu đồng</span>
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
                    {isActive === 2 && <PlanProject />}
                </Tab>
            </main>
        </div>
    )
}

export default ContractInfor
