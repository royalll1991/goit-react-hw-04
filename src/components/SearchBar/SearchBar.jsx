import  { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');
    const notify = () => toast('no image to find, put text');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!query) {
            notify();
            return;
        }
        onSubmit(query);
       
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    value={query}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
                <Toaster />
            </form>
        </header>
    );
}

export default SearchBar;
