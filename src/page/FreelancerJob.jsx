import Tab from '../ui/Tab'
import FavouriteJob from '../features/jobs/FavouriteJob'
import { useState } from 'react'
import BidsJob from '../features/jobs/BidsJob'
import CurrentJob from '../features/jobs/CurrentJob'

function FreelancerJob() {
    const [isActive, setIsActive] = useState(1)
    return (
        <div className="h-[calc(100vh-194px)]">
            <Tab
                tabs={[
                    { id: 0, name: 'Đang quan tâm' },
                    {
                        id: 1,
                        name: 'Đang chào giá',
                    },
                    {
                        id: 2,
                        name: 'Đang thực hiện',
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
                    {isActive === 0 && <FavouriteJob />}
                    {isActive === 1 && <BidsJob />}
                    {isActive === 2 && <CurrentJob />}
                </div>
            </Tab>
        </div>
    )
}

export default FreelancerJob
