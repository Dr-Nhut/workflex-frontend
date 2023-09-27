function Avatar({ image, type = 'mediumImage', center }) {
    return (
        <img
            src={image}
            alt="avt"
            className={`${
                center ? 'mx-auto block' : 'inline-block'
            } rounded-full p-2 ring-2 ${type}`}
        />
    )
}

export default Avatar
