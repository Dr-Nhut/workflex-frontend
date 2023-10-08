import SidebarLayout from '../../layouts/SidebarLayout'
import ContractInfor from './ContractInfor'
import ContractSidebar from './ContractSidebar'

function Contract() {
    return (
        <div className="m-8">
            <SidebarLayout
                mainWidth="col-span-9"
                fullWidth
                right
                sidebar={<ContractSidebar />}
            >
                <ContractInfor />
            </SidebarLayout>
        </div>
    )
}

export default Contract
