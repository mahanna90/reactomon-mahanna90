import React, { useContext } from 'react';
import title from '../../images/download.png';
import pikachu from '../../images/pikachuball.png';
import bulbasaur from '../../images/Bulbasaur.png';
import togepi from '../../images/togepisleep.png';
import styled from 'styled-components';
import ClosedBall from '../../images/closed2.png';
import {DragContext} from '../../context/DragContext';

const Togepi = styled.div`
    position: fixed;
    bottom: -10px;
    left: 50px;
    max-width: 300px;
`;

const Pikachu = styled.div`
    position: fixed;
    top: 20px;
    left: 90px;
    max-width: 250px;
`;

const Bulbasaur = styled.div`
    position: fixed;
    bottom: 15px;
    right: 80px;
    max-width: 250px;
`;

const PokeBall = styled.div`
    position: fixed;
    top: 30px;
    right: 80px;
    max-width: 200px;
    transition: all .2s ease-in-out; 
    cursor: pointer;
    /* background: none; */
    background: rgba(0, 0, 0, 0.0);
    &:hover {
      transform: scale(1.1); 
    } 
`;

const Header = () => {

  const [isDragging, setIsDragging] = useContext(DragContext);

  const dragStart = (e) => {
      const target = e.target;
      setIsDragging(true);

      setTimeout(() => {
        target.style.display = "none";
      }, 0)
  }

  const dragEnd = (e) => {
    const target = e.target;
    target.style.display = "block";
    setIsDragging(false);
  }

  return (
    <>
      <header className="App-header">
        <Pikachu>
          <img src={pikachu} alt="pikachu_with_ball" />
        </Pikachu>
          <img src={title} alt="pikachu_title_image" />
        <Bulbasaur>
          <img src={bulbasaur} alt="bulbasaur" />
        </Bulbasaur>
        <Togepi>
          <img src={togepi} alt="togepi" />
        </Togepi>
        <PokeBall draggable="true" onDragStart={dragStart} onDragEnd={dragEnd} style={{userSelect:"none", background: "transparent"}}>
          <img src={ClosedBall} alt="ball"  style={{userSelect:"none", pointerEvents: "none", background: "transparent"}} />
        </PokeBall>
      </header>
      
    </>
  )
}

export default Header;