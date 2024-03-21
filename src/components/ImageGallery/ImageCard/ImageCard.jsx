function ImageCard ({small,description,likes}) {
    return (<div>
        <img src={small} alt={description} />
        <p>likes {likes}</p>
      </div>);
}
export default ImageCard;
