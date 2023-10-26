import Tab from '../ui/Tab'
import { useState } from 'react'
import CurrentJob from '../features/jobs/CurrentJob'
import PendingJob from '../features/jobs/PendingJob'
import RefusedJob from '../features/jobs/RefusedJob'
import AcceptingBidsJob from '../features/jobs/AcceptingBidsJob'
import EmployerCompleteJob from '../features/jobs/EmployerCompleteJob'

function EmployerJob() {
    const [isActive, setIsActive] = useState(0)
    return (
        <div className="h-[calc(100vh-194px)]">
            <Tab
                tabs={[
                    {
                        id: 0,
                        name: 'Đang chờ duyệt',
                    },
                    {
                        id: 1,
                        name: 'Đang nhận chào giá',
                    },
                    {
                        id: 2,
                        name: 'Đăng thất bại',
                    },
                    {
                        id: 3,
                        name: 'Đang thực hiện',
                    },
                    {
                        id: 4,
                        name: 'Đã hoàn thành',
                    },
                ]}
                active={isActive}
                onClick={setIsActive}
            >
                <div className="mx-10 mt-6">
                    {isActive === 0 && <PendingJob />}
                    {isActive === 1 && <AcceptingBidsJob />}
                    {isActive === 2 && <RefusedJob />}
                    {isActive === 3 && <CurrentJob />}
                    {isActive === 4 && <EmployerCompleteJob />}
                </div>
            </Tab>
        </div>
    )
}

export default EmployerJob
