import '../css/Nav.css'
import React, { useState } from 'react'
export function Nav() {

    const [active, setActive] = useState(false);
    const [iconBtn, setIconBtn] = useState(false);

    const changeClass = () => {
        setActive(!active);
        setIconBtn(!iconBtn);
    }



    return (
        <div className='container'>
            <span className='logoText'>Glo<span className='logoTextColor'>tto</span></span>

            <div className="links">
                <a href="#navHome">
                    Inicio
                    <span className="material-symbols-outlined">home</span></a>

                <a href="#course">
                    Curso
                    <span className="material-symbols-outlined">school</span></a>

                <a href="#aboutUs">
                    Sobre nós
                    <span className="material-symbols-outlined"> description</span></a>
            </div>

            <div className='linksMobile'>
                <button onClick={changeClass} className={`btnMenuModal ${iconBtn ? 'icon' : ''}`}></button>

                <div className={`modal ${active ? "" : "open"}`}>
                    <a href="#navHome">
                        Inicio
                        <span className="material-symbols-outlined">home</span></a>

                    <a href="#course">
                        Curso
                        <span className="material-symbols-outlined">school</span></a>

                    <a href="#aboutUs">
                        Sobre nós
                        <span className="material-symbols-outlined"> description</span></a>
                </div>
            </div>
        </div>
    )
}