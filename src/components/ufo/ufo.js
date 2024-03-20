import React, { useState, useEffect } from 'react';
import './ufo.css';
//images
import ufoImage from '../../assets/ufo.png';
import happyrick from '../../assets/happyrick.png';
import handsomerick from '../../assets/handsomerick.png';
import cucumber from '../../assets/cucumber.png';
import dog from '../../assets/dog.png';
import yellow from '../../assets/yellow.png';
import angryMorty from '../../assets/angryMorty.png';
import dance from '../../assets/dance.png';
import psycho from '../../assets/psycho.png';
import space from '../../assets/space.png';
import yellow2 from '../../assets/yellow2.png';

const UFO = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [images] = useState([ufoImage, happyrick, handsomerick, cucumber, dog, yellow, angryMorty, dance, psycho, space, yellow2]);

    useEffect(() => {
        const moveUFO = () => {
            const maxX = window.innerWidth - 200;
            const maxY = window.innerHeight - 200;

            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;

            setPosition({ x: newX, y: newY });
        };

        const intervalId = setInterval(moveUFO, 3000);

        return () => clearInterval(intervalId);
    }, []);
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return (
        <img
            className="ufo"
            src={randomImage}
            alt="UFO"
            style={{ top: position.y, left: position.x, objectFit: 'contain' }}
        />
    );
};

export default React.memo(UFO);