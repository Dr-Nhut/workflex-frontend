import { useQueries } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getDetailJob } from '../services/apiJob'
import { getOfferProcessing } from '../services/apiOffer'
import Spinner from '../ui/Spinner'
import HeaderDetailPage from '../ui/HeaderDetailPage'
import SidebarLayout from '../layouts/SidebarLayout'
import ContractSidebar from '../features/jobs/ContractSidebar'
import ContractInfor from '../features/jobs/ContractInfor'
import Button from '../common/buttons/Button'
import axios from 'axios'

function EmployerPayment() {
    const jobId = useParams().id

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(
                `http://localhost:3000/api/stripe/checkout-session/${jobId}`,
                {}
            )
            .then((response) => {
                if (response.data.url) {
                    window.location.href = response.data.url
                }
            })
            .catch((err) => console.error(err))
    }

    const [
        { isLoading: loadingJobDetail, data: job },
        { isLoading: loadingOfferProcessing, data: offer },
    ] = useQueries({
        queries: [
            {
                queryKey: ['jobDetail'],
                queryFn: () => getDetailJob(jobId),
            },
            {
                queryKey: ['offerDetail'],
                queryFn: () => getOfferProcessing(jobId),
            },
        ],
    })

    if (loadingJobDetail || loadingOfferProcessing) return <Spinner />
    return (
        <div className="m-8">
            <HeaderDetailPage>Chi tiết hợp tác</HeaderDetailPage>
            <SidebarLayout
                mainWidth="col-span-9"
                fullWidth
                right
                sidebar={<ContractSidebar job={job} offer={offer} />}
            >
                <ContractInfor job={job} offer={offer} />
                <form onSubmit={handleSubmit}>
                    <Button type="btn-primary" className="mx-auto rounded-lg">
                        Thanh toán
                    </Button>
                </form>
            </SidebarLayout>
        </div>
    )
}

export default EmployerPayment
