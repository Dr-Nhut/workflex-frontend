import { createPortal } from 'react-dom'
import Overlay from './Overlay'
import Button from '../common/buttons/Button'
import {
    useState,
    cloneElement,
    useContext,
    createContext,
    useRef,
} from 'react'
import { UilMultiply } from '@iconscout/react-unicons'
import { useEffect } from 'react'

const ModalContext = createContext()

function Modal({ children }) {
    const [openName, setOpenName] = useState('')

    const close = () => setOpenName('')
    const open = setOpenName

    return (
        <ModalContext.Provider value={{ openName, close, open }}>
            {children}
        </ModalContext.Provider>
    )
}

function Open({ children, opens: opensWindowName }) {
    const { open } = useContext(ModalContext)
    return cloneElement(children, { onClick: () => open(opensWindowName) })
}

function Window({ children, name, title }) {
    const { openName, close } = useContext(ModalContext)

    const ref = useRef()
    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) close()
        }

        document.addEventListener('click', handleClick, true)

        return () => document.removeEventListener('click', handleClick, true)
    }, [close])
    if (name !== openName) return null
    return createPortal(
        <Overlay>
            <div
                ref={ref}
                className="scrollbar fixed left-1/2 top-1/2 max-h-[700px] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg bg-stone-50 px-16 py-12 shadow-lg transition-all duration-500"
            >
                <div className="absolute right-0 top-0">
                    <Button type="btn-text" onClick={close}>
                        <UilMultiply />
                    </Button>
                </div>

                <h4 className="text-center text-2xl font-semibold capitalize">
                    {title}
                </h4>
                <div>
                    {cloneElement(children, {
                        onCloseModal: close,
                    })}
                </div>
            </div>
        </Overlay>,
        document.body
    )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
