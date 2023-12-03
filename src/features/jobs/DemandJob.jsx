import { useQueries } from '@tanstack/react-query'
import DemandJobChart from '../../ui/DemandJobChart'
import { getJobByStatus } from '../../services/apiJob'

function DemandJob() {
    const [
        { isLoading: loadingPending, data: pendingJobs },
        { isLoading: loadingWorking, data: workingJobs },
    ] = useQueries({
        queries: [
            {
                queryKey: ['all-pending-jobs'],
                queryFn: () => getJobByStatus(3),
            },
            {
                queryKey: ['all-working-jobs'],
                queryFn: () => getJobByStatus(5),
            },
            // { queryKey: ['post', 2], queryFn: fetchPost, staleTime: Infinity },
        ],
    })

    if (loadingPending || loadingWorking) return null
    return (
        <section className="my-10 rounded-lg bg-stone-100 px-4">
            <header className="flex items-center justify-between py-4">
                <h4 className="text-xl font-semibold capitalize text-stone-700">
                    Thống kê
                </h4>
            </header>
            <main>
                <div className="flex items-center justify-between">
                    <span className="text-lg text-green-500">
                        Đang nhận chào giá: <b>{pendingJobs.length}</b> việc
                    </span>
                    <span className="text-lg text-green-500">
                        Đang thực hiện: {workingJobs.length} việc
                    </span>
                </div>

                <div>
                    <h2 className="py-4 font-bold">
                        Thống kê việc làm trong 5 tuần gần nhất
                    </h2>
                    <DemandJobChart />
                </div>
            </main>
        </section>
    )
}

export default DemandJob
