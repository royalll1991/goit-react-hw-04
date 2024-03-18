
// import toast, { Toaster } from 'react-hot-toast';

function SearchBar ({query, onChange, onSubmit }) {
    

    // const notify = () => toast('no image to find, put text');
   
    
   

    return (
        <header>
            <form onSubmit={onSubmit}>
                <input
                    value={query}
                    onChange={onChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
                {/* <Toaster /> */}
            </form>
        </header>
    );
}

export default SearchBar;