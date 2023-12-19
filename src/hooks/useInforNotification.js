import {
    useEffect,
    useState
} from "react"

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
            case 4:
                setNotificationInfor(`Gửi chào giá đến việc làm mới vừa đăng: <b>${description}</b>`)
                setLocationInfor(`/freelancer-findwork`)
                break
            case 5:
                setNotificationInfor(`Bạn đã được chọn thực hiện công việc: <b>${description}</b>.`)
                setLocationInfor(`/freelancer-jobs/current`)
                break
            case 6:
                setNotificationInfor(`Lời chào giá của bạn cho công việc: <b>${description}</b>. đã không được chấp nhận. Đừng nản lòng, hãy nhanh chóng gửi lời chào giá hấp dẫn đến công việc tiếp theo!`)
                setLocationInfor(`/freelancer-findwork`)
                break
            case 7:
                setNotificationInfor(`<b>${fullname}</b> vừa thêm một nhiệm vụ: <b>${description}</b>`)
                setLocationInfor(`/employer-job/current`)
                break
            case 8:
                setNotificationInfor(`<b>${fullname}</b> đã thanh toán cho công việc của họ.`)
                setLocationInfor(`/admin/job-payment`)
                break
            case 9:
                setNotificationInfor(`Bạn đã được thanh toán cho <b>${description}</b>. Xác nhận và đánh giá cho đối tác ngay.`)
                setLocationInfor(`/freelancer-jobs/paid`)
                break
            case 10:
                setNotificationInfor(`<b>${fullname}</b> vừa thêm một đánh giá về bạn.`)
                setLocationInfor(`/my-profile`)
                break
            default:
                throw new Error('Not Notification')
        }

    }, [fullname, description, type])

    return [notificationInfor, locationInfor]
}