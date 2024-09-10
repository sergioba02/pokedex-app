function CardImg({url, alt}) {
    return (
        <>
            <div className="image-container">
                <div className="circular-progress">
                    <img
                        src={url}
                        alt={alt}
                        width="200"
                    />
                </div>
            </div>
        </>
    )
}

export default CardImg;