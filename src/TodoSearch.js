import React from 'react';
import './css/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
  
    return(
       <section className='container-input'>
         <input 
         className='Search' 
         placeholder="--> Buscar <--"
         value={searchValue}
         onChange={(event) => {
          setSearchValue(event.target.value);
         }}
         />
       </section>
    );
}

export { TodoSearch };