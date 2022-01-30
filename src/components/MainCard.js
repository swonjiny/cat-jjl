const MainCard = ({ img, onHeartClick, alreadyFavorite }) => {
    const heartIcon = alreadyFavorite ? "💖" : "🤍";
    return (
        <div>
            <img src={img} alt="그림" width="400" />
            <button onClick={onHeartClick}>{heartIcon}</button>
        </div>
    )
}

export default MainCard;
