function Avatar({ image, type = 'mediumImage' }) {
    return (
        <img
            src={image}
            alt="avt"
            className={`inline-block rounded-full p-2 ring-2 ${type}`}
        />
    )
}

export default Avatar
