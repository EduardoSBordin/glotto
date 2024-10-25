import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Só continua se ainda houver texto a ser exibido
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText(prev => prev + text.charAt(index));
                setIndex(prev => prev + 1);
            }, speed);

            // Limpa o timeout na desmontagem ou atualização
            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed]);

    return (
        <span>{displayedText}<span className="cursor">|</span></span>
    );
};

export default Typewriter;