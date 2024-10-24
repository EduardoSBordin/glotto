import '../css/NavStudent.css'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import profileBadge from '../contentGraph/profileBadge2.png'

export function NavStudent({ setActiveComponent }) {


    let navigate = useNavigate();

    function backClick() {
        navigate(-1);
    }

    const [active, setActive] = useState(false);

    function activeMenu() {
        setActive(!active);
    }


    return (
        <section className="menuBar">

            <button onClick={activeMenu} className={`btnMenuBarMobile ${active ? 'activeMenuStudent' : ''}`}></button>

            <div className={`menuBarDesk ${active ? 'activeMenuStudent' : ''}`}>

                <img src={profileBadge} alt="Not Suported" className='profileImgBadge' />
                <br />
                <button className='linkMenuBar' onClick={() => setActiveComponent('HomeStudent')}>
                    <span className="material-symbols-outlined"> home </span>Inicio</button>

                <button className='linkMenuBar' onClick={() => setActiveComponent('GameStudent')}>
                    <span className="material-symbols-outlined">joystick</span>Jogos</button>

                <button className='linkMenuBar' onClick={() => setActiveComponent('GameStudent')}>
                    <span className="material-symbols-outlined">school</span>Curso</button>

                <button className='linkMenuBar' onClick={() => setActiveComponent('GameStudent')}>
                    <span className="material-symbols-outlined">book</span>Histórias</button>

                <button className='linkMenuBar' onClick={() => setActiveComponent('GameStudent')}>
                    <span className="material-symbols-outlined">draw</span>Atividades</button>

                <button className='linkMenuBar' onClick={() => setActiveComponent('GameStudent')}>
                    <span className="material-symbols-outlined">supervisor_account</span>Professores</button>

                <button className='linkMenuBar' onClick={backClick}>
                    <span className="material-symbols-outlined">logout</span>Sair</button>
            </div>
        </section >
    )
}