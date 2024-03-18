import { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import { searchImage } from '../../serch-image';
// import Loader from '../Loader/Loader';






function App() {
  const [query, setQuery] = useState('')
  const [image, setImage] = useState([]);

  const handleQuery = (event) => { setQuery(event.target.value)
 };


const handleSubmit = async (query) => {
  const data = await searchImage(query);
setImage(data) };

  return (
    <div>
      <h1>Welkom</h1>
      <SearchBar query = {query}
      onChange = {handleQuery}
      onSubmit = {handleSubmit}
      />
    </div>
  );
}

export default App; 