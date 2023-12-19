import { UilLifeRing, UilMultiply } from '@iconscout/react-unicons'
import { PortalWithState } from 'react-portal'
import UserCard from './UserCard'
import MessageMainContainer from '../../ui/MessageMainContainer'
import SendMainMessage from '../jobs/SendMainMessage'

function Support() {
    return (
            <PortalWithState closeOnOutsideClick closeOnEsc>
                {({ openPortal, closePortal, isOpen, portal }) => (
                    <>
                        <div
                            className="relative cursor-pointer"
                            onClick={isOpen ? closePortal : openPortal}
                        >
                            <UilLifeRing className="relative text-stone-200 hover:text-stone-300" />
                        </div>
                        {portal(
                            <div className="animate__animated animate__fadeInRight fixed right-0 top-20 z-50 h-full w-[480px] rounded-lg bg-stone-50 p-4 shadow-lg">
                                <div className="flex items-center justify-between border-b border-stone-400 pb-2 font-semibold text-stone-800">
                                    <UserCard
                                        fullName="Hệ thống hỗ trợ"
                                        avatarUrl="http://localhost:3000/avatar-default/admin.png"
                                    />
                                    <UilMultiply
                                        className="cursor-pointer hover:text-stone-500"
                                        onClick={closePortal}
                                    />
                                </div>

                                <div className="p-4">
                                    <MessageMainContainer
                                        partner={{
                                            id: 'a68af9ff-7835-426e-b9e1-3c3dd081a40b',
                                        }}
                                    />
                                </div>

                                <SendMainMessage
                                    partner={{
                                        id: 'a68af9ff-7835-426e-b9e1-3c3dd081a40b',
                                    }}
                                />
                            </div>
                        )}
                    </>
                )}
            </PortalWithState>
    )
}

export default Support
