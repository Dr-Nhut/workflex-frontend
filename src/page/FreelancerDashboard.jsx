import UserName from '../ui/UserName'
import StatOverview from '../ui/StatOverview'
import Rectangle from '../ui/Rectangle'
import CardContainer from '../ui/CardContainer'
import SidebarLayout from '../layouts/SidebarLayout'
import Button from '../common/buttons/Button'
import Progress from '../ui/Progress'
import Partner from '../features/user/Partner'
import { useState } from 'react'

function FreelancerDashboard() {
    const [employer] = useState(true)
    return (
        <div className="bg-slate-100 pl-10 pt-4">
            <SidebarLayout
                right
                fullWidth
                mainWidth="col-span-6"
                sidebar={<Partner />}
            >
                <UserName dark>Hi, John</UserName>

                {!employer && (
                    <div className="mt-2 flex justify-between">
                        <StatOverview
                            title="Đang thực hiện"
                            number={5}
                            className="bg-orange-500"
                        />

                        <StatOverview
                            title="Đang chào giá"
                            number={10}
                            className="bg-blue-500"
                        />

                        <StatOverview
                            title="Đã hoàn thành"
                            number={26}
                            className="bg-green-500"
                        />
                    </div>
                )}

                <section>
                    <header>
                        <h4 className="text-xl font-semibold capitalize text-stone-700">
                            {employer
                                ? 'Dự án của bạn'
                                : 'Dự án đang thực hiện'}
                        </h4>
                        <Button
                            type="btn-primary"
                            size="small"
                            className="rounded-xl"
                        >
                            Xem tất cả
                        </Button>
                    </header>

                    <CardContainer>
                        <Rectangle background="bg-teal-500">
                            Lập trình web
                        </Rectangle>
                        <div className="my-2 flex items-center justify-between">
                            <h2 className="font-semibold text-stone-900">
                                Auto content generator script in nodejs
                            </h2>

                            <span>Thời hạn: 31/10/2023</span>
                        </div>
                        <span>
                            <Progress
                                percent={60}
                                content="Tiến độ thực hiện"
                            />
                        </span>
                    </CardContainer>

                    <CardContainer>
                        <Rectangle background="bg-teal-500">
                            Lập trình web
                        </Rectangle>
                        <div className="my-2 flex items-center justify-between">
                            <h2 className="font-semibold text-stone-900">
                                Auto content generator script in nodejs
                            </h2>

                            <span>Thời hạn: 31/10/2023</span>
                        </div>
                        <span>
                            <Progress
                                percent={60}
                                content="Tiến độ thực hiện"
                            />
                        </span>
                    </CardContainer>

                    <CardContainer>
                        <Rectangle background="bg-teal-500">
                            Lập trình web
                        </Rectangle>
                        <div className="my-2 flex items-center justify-between">
                            <h2 className="font-semibold text-stone-900">
                                Auto content generator script in nodejs
                            </h2>

                            <span>Thời hạn: 31/10/2023</span>
                        </div>
                        <span>
                            <Progress
                                percent={60}
                                content="Tiến độ thực hiện"
                            />
                        </span>
                    </CardContainer>
                </section>
            </SidebarLayout>
        </div>
    )
}

export default FreelancerDashboard
