import { useEffect, useState } from 'react';
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
const [isLoader, setIsLoader] = useState(false);
const [error, setError] = useState(false);
const [page, setPage] = useState(1);


  const handleQuery = (event) => { setQuery(event.target.value)
 };

const handleSubmit = async ( query) => {
 try {setIsLoader(true);
  setError(false);
  setImages([]);
  const data = await searchImage(query);
  
setImages(data.results) ;
  
 } catch (error) {
  setError(true);
 } finally {
  setIsLoader(false);} }

const handleLoadMore = () => {
  setPage(page + 1);
}

useEffect(() => {
  if (query === "") {
    return;
  }
  handleSubmit(query); 
}, [query, page]);

  return (
    <div>
      <SearchBar query = {query}
      onChange = {handleQuery}
      onSubmit = {handleSubmit}
      />
      {isLoader && <Loader/>}
      {error && <ErrorMessage/>}
      {images.length > 0 && <ImageGallery
      images = {images}/>}
      {images.length > 0 && <LoadMoreBtn onClick = {handleLoadMore}/>}
    </div>
  );
}

export default App; 