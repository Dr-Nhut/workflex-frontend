function Avatar({ image, type = 'mediumImage', center }) {
    return (
        <img
            src={image}
            alt="avt"
            className={`${
                center ? 'mx-auto block' : 'inline-block'
            } rounded-full ring-2 ${type}`}
        />
    )
}

export default Avatar
