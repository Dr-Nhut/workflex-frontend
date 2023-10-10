import Button from '../../common/buttons/Button'

function Verify() {
    return (
        <>
            <h4 className="text-center font-semibold">Xác thực Email</h4>
            <p className="my-4 px-4 text-justify text-stone-500">
                Thông tin xác thực đã gửi đến email của bạn, vui lòng xác thực
                email để tiếp tục thực hiện đăng ký
            </p>
            <Button type="btn-primary" className="mx-auto rounded-xl">
                Gửi lại
            </Button>
        </>
    )
}

export default Verify
