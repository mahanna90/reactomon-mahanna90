import React from 'react';
import title from '../../images/download.png';
import pikachu from '../../images/pikachuball.png';
import bulbasaur from '../../images/Bulbasaur.png';
import togepi from '../../images/togepisleep.png';
import styled from 'styled-components';

const Togepi = styled.div`
    position: absolute;
    top: 660px;
    left: -370px;
    max-width: 300px;
`;

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
        <Togepi className="togepi">
          <img src={togepi} alt="togepi" />
        </Togepi>
      </header>
      
    </>
  )
}

export default Header;