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
                <a href="#navHome"><span className="material-symbols-outlined">home</span>Inicio</a>

                <a href="#course"><span className="material-symbols-outlined">school</span>Curso</a>

                <a href="#aboutUs"> <span className="material-symbols-outlined">description</span>Sobre nós</a>
            </div>

            <div className='linksMobile'>
                <button onClick={changeClass} className={`btnMenuModal ${iconBtn ? 'icon' : ''}`}></button>

                <div className={`modal ${active ? "" : "open"}`}>

                    <a href="#navHome"><span className="material-symbols-outlined">home</span>Inicio</a>

                    <a href="#course"><span className="material-symbols-outlined">school</span>Curso</a>

                    <a href="#aboutUs"> <span className="material-symbols-outlined">description</span>Sobre nós</a>

                </div>
            </div>
        </div>
    )
}