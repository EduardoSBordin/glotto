import { Nav } from "../scripts/Nav"
import '../css/Home.css'
import '../css/Course.css'
import '../css/AboutUs.css'
import { Link } from 'react-router-dom'

import svgHome from '../contentGraph/svgHome.svg'

export function Home() {

    return (
        <div className="containerHome">
            <nav id="navHome">{<Nav />}</nav>

            <section className="home" id="home">

                <div className="content">
                    <p className="pTextHome">O <span className="logoTextColor">melhor</span> lugar para <span className='logoTextColor'>aprender</span> um novo<span className='logoTextColor'>idioma</span>.</p>

                    <div className="linksHome">
                        <Link to='/' className="signUp">Começar curso</Link>
                        <Link to='/login' className="login">Continuar curso</Link>
                    </div>
                </div>

                <img src={svgHome} alt="Not Suported" className="svgHome" />


            </section>


            <section className="course" id="course">
                <p className="pTextCourse">O que nós <span className="logoTextColorCourse">oferecemos</span>.</p>

                <div className="cards">
                    <div className="card1">
                        <span className="material-symbols-outlined iconCourse">note_stack</span>
                        <h1 className="h1Course">Aprendizado personalizado</h1>

                        <p className="pCourseCard">Lições customizadas para envolver você.</p>

                    </div>

                    <div className="card1">
                        <span className="material-symbols-outlined iconCourse">videogame_asset</span>
                        <h1 className="h1Course">Aprenda com jogos</h1>

                        <p className="pCourseCard">Aprenda novas coisas enquanto está jogando.</p>

                    </div>

                    <div className="card1">
                        <span className="material-symbols-outlined iconCourse">lightbulb</span>
                        <h1 className="h1Course">Atividades criativas</h1>

                        <p className="pCourseCard">Descrubra atividades como ciência e matemática.</p>

                    </div>
                </div>


            </section>


            <section className="aboutUs" id="aboutUs">
                <p className="pTextAboutUs">Um poucos sobre <span className="logoTextColorAboutUs">nós</span>.</p>

                <p className="pAboutUs">Aprender um novo idioma nunca foi tão fácil e divertido! No Glotto, oferecemos uma abordagem interativa e personalizada para que você domine o idioma dos seus sonhos, no seu próprio ritmo. Com lições práticas, desafios diários e uma plataforma gamificada, você poderá aprender desde o básico até níveis avançados de forma envolvente e eficiente.</p>
            </section>

            {/* <footer>Fim</footer> */}
        </div >
    )
}