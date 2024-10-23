import '../css/Login.css'
import { NavStudent } from '../scripts/layout/NavStudent'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { HomeStudent } from './HomeStudent';
import { GameStudent } from './GameStudent';
import { useState } from 'react';



export function Login() {

    const [activeComponent, setActiveComponent] = useState('HomeStudent');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'HomeContent':
                return <HomeStudent />
            case 'GameStudent':
                return <GameStudent />
            default:
                return <HomeStudent />
        }
    }

    return (
        <section className='containerLogin'>
            <nav><NavStudent setActiveComponent={setActiveComponent} /></nav>

            <div className='contentLogin'>
                {renderComponent()}
            </div>
        </section>
    )
}