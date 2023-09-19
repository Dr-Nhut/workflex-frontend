import Button from '../../common/buttons/Button'

function Blog({ thumbnail, title, description }) {
    return (
        <div className="col-span-12 mt-3 rounded bg-white p-2 shadow-lg shadow-gray-200 md:col-span-6 lg:col-span-4">
            <img src={thumbnail} />
            <div className="mx-3">
                <h2 className="my-2 text-xl font-semibold text-gray-900">
                    {title}
                </h2>
                <p className="text-gray-500">{description}</p>
            </div>
            <Button type="btn-text">Xem chi tiết &#8594;</Button>
        </div>
    )
}

export default Blog
