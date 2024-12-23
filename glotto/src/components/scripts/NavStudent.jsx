import '../css/NavStudent.css'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import profileBadge from '../contentGraph/profileBadge2.png'
import ButtonMenu from './ButtonMenu';

export function NavStudent({ setActiveComponent }) {


    let navigate = useNavigate();

    function backClick() {
        navigate('/');
    }

    const [active, setActive] = useState(false);

    function activeMenu() {
        setActive(!active);
        document.querySelector('.menuBarDesk').classList.add('activeMenuStudent');
        document.querySelector('.btnMenuBarMobile').classList.add('activeMenuStudent');
    }

    function close() {
        document.querySelector('.menuBarDesk').classList.remove('activeMenuStudent');
        document.querySelector('.btnMenuBarMobile').classList.remove('activeMenuStudent');
    }

    return (
        <section className="menuBar">

            <button onClick={activeMenu} className={`btnMenuBarMobile ${active ? 'activeMenuStudent' : ''}`}></button>

            <div className={`menuBarDesk ${active ? 'activeMenuStudent' : ''} `}>

                <img src={profileBadge} alt="Not Suported" className='profileImgBadge' />
                <br />

                {/* <ButtonMenu
                    className='linkMenuBar'
                    onClick={() => setActiveComponent('HomeStudent')}
                    nameBtn='Inicio'
                    iconCode="material-symbols-outlined"
                    iconName='home'
                /> */}

                <ButtonMenu
                    className='linkMenuBar'
                    onClick={() => {
                        setActiveComponent('GameStudent')
                        close()
                    }}
                    nameBtn='Jogos'
                    iconCode="material-symbols-outlined"
                    iconName='joystick'
                />

                <ButtonMenu
                    className='linkMenuBar'
                    onClick={() => {
                        setActiveComponent('CourseStudent')
                        close()
                    }}
                    nameBtn='Curso'
                    iconCode="material-symbols-outlined"
                    iconName='school'
                />

                <ButtonMenu
                    className='linkMenuBar'
                    onClick={() => {
                        setActiveComponent('HistoriesStudent')
                        close()
                    }}
                    nameBtn='Histórias'
                    iconCode="material-symbols-outlined"
                    iconName='book'
                />

                <ButtonMenu
                    className='linkMenuBar'
                    onClick={() => {
                        setActiveComponent('CourseStudent')
                        close()
                    }}
                    nameBtn='Atividades'
                    iconCode="material-symbols-outlined"
                    iconName='draw'
                />

                {/* <ButtonMenu
                    className='linkMenuBar'
                    onClick={() => setActiveComponent('GameStudent')}
                    nameBtn='Professores'
                    iconCode="material-symbols-outlined"
                    iconName='supervisor_account'
                /> */}

                <ButtonMenu
                    className='linkMenuBar'
                    onClick={(backClick)}
                    nameBtn='Sair'
                    iconCode="material-symbols-outlined"
                    iconName='logout'
                />

            </div>
        </section >
    )
}