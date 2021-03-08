import React from 'react';
import title from '../../images/download.png';
import pikachu from '../../images/pikachuball.png';
import bulbasaur from '../../images/Bulbasaur.png';

const Header = () => {
  return (
    <>
      
      <header className="App-header">
        <div className="headerpika">
          <img src={pikachu} alt="pikachu_with_ball" />
        </div>
          <img src={title} alt="pikachu_title_image" />
          <div className="bulbasaur">
          <img src={bulbasaur} alt="bulbasaur" />
        </div>
      </header>
      
    </>
  )
}

export default Header;