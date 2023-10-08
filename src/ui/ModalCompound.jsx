import { createPortal } from 'react-dom'
import ModalContainer from './ModalContainer'
import Overlay from './Overlay'

function ModalCompound({ children }) {
    return createPortal(
        <Overlay>
            <ModalContainer>{children}</ModalContainer>
        </Overlay>,
        document.body
    )
}

export default ModalCompound
