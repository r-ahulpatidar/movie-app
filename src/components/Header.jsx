import { useState } from 'react';
import { SEARCH_API, getMovies } from '../api/api';

const Header = (props) => {
  const { onSearch } = props;

  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim() !== '') {
      const searchUrl = SEARCH_API + searchValue;
      getMovies(searchUrl).then((data) => {
        onSearch(data);
      });
      setSearchValue('');
    } else {
      window.location.reload();
    }
  };

  return (
    <header className="flex justify-end p-4 bg-indigo-900">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={handleChange}
          className="bg-transparent border-2 border-black rounded-3xl text-base text-white px-4 py-2 placeholder:bg-indigo-900 focus:outline-none focus:bg-blue-950"
        />
      </form>
    </header>
  );
};

export default Header;
