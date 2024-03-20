import React, { useState, useEffect } from 'react';
import './ufo.css';
import ufoImage from '../../assets/ufo.png'; // UFO görseli
const UFO = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveUFO = () => {
            const maxX = window.innerWidth - 100; // 100: UFO genişliği
            const maxY = window.innerHeight - 100; // 100: UFO yüksekliği

            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;

            setPosition({ x: newX, y: newY });
        };

        const intervalId = setInterval(moveUFO, 3000); // Her 3 saniyede bir hareket ettir

        return () => clearInterval(intervalId); // Component kaldırıldığında interval'i temizle
    }, []);

    return (
        <img
            className="ufo"
            src={ufoImage}
            alt="UFO"
            style={{ top: position.y, left: position.x, objectFit: 'contain' }}
        />
    );
};

export default UFO;