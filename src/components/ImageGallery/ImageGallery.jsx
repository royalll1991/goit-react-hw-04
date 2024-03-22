import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css';

function ImageGallery ({images, onClick}) {
return (
<ul className={css.list}>
	<li className={css.listItem}>
	{images.map((image) => (
                <div className={css.box} key={image.id} onClick={() => onClick(image)}>
                    <ImageCard 
                        small = {image.urls.small}
                        // regular = {image.urls.regular}
						description = {image.description}
                        likes = {image.likes}
                        onClick = {onClick}
                        />
                </div>
            ))}        
	</li>
</ul>
);
}

export default ImageGallery;