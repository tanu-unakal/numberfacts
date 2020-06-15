import React from 'react';

const Searchbar= ({onSearch}) =>{
	return(
		<form onSubmit={onSearch}>
        <input placeholder="enter the number" id="number" name="number" type="text" />
        <button>Search!</button>
      </form>
		);
}

export default Searchbar;