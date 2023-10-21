import { useState } from 'react'
import Tab from '../ui/Tab'
import ManagerPendingJob from '../admin/job/ManagerPendingJob'

function ManagerJob() {
    const [isActive, setIsActive] = useState(0)
    return (
        <div className="h-[calc(100vh-194px)]">
            <Tab
                tabs={[
                    { id: 0, name: 'Duyệt công việc' },
                    {
                        id: 1,
                        name: 'Đang thực hiện',
                    },
                    {
                        id: 2,
                        name: 'Thanh toán',
                    },
                    {
                        id: 3,
                        name: 'Đã hoàn thành',
                    },
                ]}
                active={isActive}
                onClick={setIsActive}
            >
                <div className="mx-10 mt-6">
                    {isActive === 0 && <ManagerPendingJob />}
                    {/* {isActive === 1 && <BidsJob />}
                    {isActive === 2 && <CurrentJob />} */}
                </div>
            </Tab>
        </div>
    )
}

export default ManagerJob
