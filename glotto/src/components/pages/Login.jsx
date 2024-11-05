import '../css/Login.css'
import { NavStudent } from '../scripts/NavStudent'
import { HomeStudent } from './HomeStudent';
import { GameStudent } from './GameStudent';
import { QuizGameTranslate } from './QuizGameTranslate';
import CourseStudent from './CourseStudent';
import { useState } from 'react';

export function Login() {

    const [activeComponent, setActiveComponent] = useState('GameStudent');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'HomeContent':
                return <HomeStudent />

            case 'GameStudent':
                return <GameStudent />

            case 'CourseStudent':
                return <CourseStudent />

            // case 'QuizGameTranslate':
            //     return <QuizGameTranslate />

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