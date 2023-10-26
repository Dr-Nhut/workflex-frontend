import { useNavigate } from 'react-router-dom'
import Button from '../common/buttons/Button'
import TitleSection from './Section/TitleSection'
import { UilArrowRight } from '@iconscout/react-unicons'

function HeaderDetailPage({ children }) {
    const navigate = useNavigate()
    return (
        <div className=" mr-2 mt-2 flex items-center justify-between">
            <TitleSection>{children}</TitleSection>
            <Button
                onClick={() => navigate(-1)}
                icon={<UilArrowRight />}
                type="btn-text"
            >
                Quay lại
            </Button>
        </div>
    )
}

export default HeaderDetailPage
