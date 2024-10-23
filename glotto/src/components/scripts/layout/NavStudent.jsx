import '../../css/NavStudent.css'
import { Link, useNavigate } from 'react-router-dom'

export function NavStudent({ setActiveComponent }) {


    let navigate = useNavigate();

    function backClick() {
        navigate(-1);
    }


    return (
        <section className="menuBar">
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

            {/* <Link to='/' className='linkMenuBar2'><span className="material-symbols-outlined">
                logout
            </span>Sair</Link> */}

            <button className='linkMenuBar' onClick={backClick}>
                <span className="material-symbols-outlined">logout</span>Sair</button>
        </section>
    )
}