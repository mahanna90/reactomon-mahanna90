import React from 'react';
import title from '../../images/download.png';
import pikachu from '../../images/pikachuball.png';
import bulbasaur from '../../images/Bulbasaur.png';

const Header = () => {
  return (
    <>
      <div className="headerpika">
        <img src={pikachu} alt="pikachu_with_ball" />
      </div>
      <header className="App-header">
        <img src={title} alt="pikachu_title_image" />
      </header>
      <div className="bulbasaur">
        <img src={bulbasaur} alt="bulbasaur" />
      </div>
    </>
  )
}

export default Header;