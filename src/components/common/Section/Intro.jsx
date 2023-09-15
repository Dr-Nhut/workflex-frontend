import Button from '../../Button/Button'
function Intro() {
    //Giới thiệu homepage
    return (
        <div className="flex flex-col justify-center items-center h-[calc(100%-81px)] text-brand_stone">
            <h1 className="text-5xl font-semibold capitalize mb-8">
                Tìm kiếm công việc và freelancer
            </h1>
            <p className="text-xl font-light mb-12">
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
