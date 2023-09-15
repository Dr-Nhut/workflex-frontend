import Button from '../../Button/Button'

function Blog({ thumbnail, title, description }) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 p-2 mt-3 bg-white rounded shadow-lg shadow-gray-200">
            <img src={thumbnail} />
            <div className="mx-3">
                <h2 className="my-2 text-gray-900 text-xl font-semibold">
                    {title}
                </h2>
                <p className="text-gray-500">{description}</p>
            </div>
            <Button type="btn-text">Xem chi tiết &#8594;</Button>
        </div>
    )
}

export default Blog
