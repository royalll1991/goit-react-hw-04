import ImageCard from './ImageCard/ImageCard';

function ImageGallery ({images}) {
return (
<ul>
	<li>
	{images.map((image) => (
                <div  key={image.id} >
                    <ImageCard 
                        small = {image.urls.small}
                        // regular = {image.urls.regular}
						description = {image.description}
                        likes = {image.likes}
                        />
                </div>
            ))}        
	</li>
</ul>
);
}

export default ImageGallery;