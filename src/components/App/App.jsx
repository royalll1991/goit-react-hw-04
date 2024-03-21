import  { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import { searchImage } from '../../serch-image';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

function App() {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);

    const handleSubmit = async (query, page) => {
        try {
            setIsLoading(true);
            setError(false);
            setImages([]);
            const data = await searchImage(query, page);
            
             setImages([...images, ...data.results]);
             
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLoadMore = () => {
      setPage(prevPage => prevPage + 1);
   };

    useEffect(() => {
        if (!query) {
            return;
        }
        handleSubmit(query,page);
    }, [query,page]);

    return (
        <div>
            <SearchBar onSubmit={setQuery} />
            {isLoading && <Loader />}
            {error && <ErrorMessage />}
            {images.length > 0 && <ImageGallery images={images} />}
            {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
        </div>
    );
}

export default App;
