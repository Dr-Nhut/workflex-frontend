function Contact() {
    return (
        <>
            <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
                Liên hệ
            </h4>
            <div className="flex pb-2">
                <span className="w-32 font-semibold">Email</span>
                <span className="text-stone-500">john@gmail.com</span>
            </div>
            <div className="flex pb-2">
                <span className="w-32 font-semibold">Số điện thoại</span>
                <span className="text-stone-500">0123456789</span>
            </div>
            <div className="flex pb-2">
                <span className="w-32 font-semibold">Địa chỉ</span>
                <span className="text-stone-500">Cần Thơ, Việt Nam</span>
            </div>
        </>
    )
}

export default Contact
