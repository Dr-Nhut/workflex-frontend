import Button from '../../common/buttons/Button'
function Intro() {
    //Giới thiệu homepage
    return (
        <div className="flex h-[calc(100%-81px)] flex-col items-center justify-center text-brand_stone">
            <h1 className="mb-8 text-5xl font-semibold capitalize">
                Tìm kiếm công việc và freelancer
            </h1>
            <p className="mb-12 text-xl font-light">
                Kết nối với các đối tác hoàn hảo của bạn ngay hôm nay một cách
                linh hoạt và hiện đại.
            </p>
            <Button type="btn-primary" size="large" className="rounded-xl">
                Bắt đầu ngay
            </Button>
        </div>
    )
}

export default Intro
