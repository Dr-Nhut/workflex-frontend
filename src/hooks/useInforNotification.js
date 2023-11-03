import { useEffect, useState } from "react"

export default function useInforNotification(fullname, description, type) {
    const [notificationInfor, setNotificationInfor] = useState();
    const [locationInfor, setLocationInfor] = useState();

    useEffect(() => {
        switch (type) {
            case 1:
                setNotificationInfor(`Việc bạn đã đăng: <b>${description}</b> đã được duyệt.`)
                setLocationInfor('/employer-job/accepting-bids')
                break
            case 2:
                setNotificationInfor(`Việc bạn đã đăng: <b>${description}</b> đã bị từ chối.`)
                setLocationInfor('/employer-job/refused')
                break
            case 3:
                setNotificationInfor(`<b>${fullname}</b> đã gửi lời chào giá cho <b>${description}<b>.`)
                setLocationInfor(`/employer-job/accepting-bids`)
                break
            default:
                throw new Error('Not Notification')
        }

    }, [fullname, description, type])

    return [notificationInfor, locationInfor]
}