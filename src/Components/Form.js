import React from 'react';

function Form() {
  return (
    <div>
      <form>
        <label htmlFor="search">
          Busca
          <input id="search" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
