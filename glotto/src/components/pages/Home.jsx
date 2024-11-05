import { Nav } from "../scripts/Nav"
import '../css/Home.css'
import '../css/Course.css'
import '../css/AboutUs.css'
import { Link } from 'react-router-dom'
import svgHome from '../contentGraph/svgHome.svg'
import Typewriter from "../scripts/Typewriter"

export function Home() {



    return (
        <div className="containerHome">
            <nav id="navHome">{<Nav />}</nav>

            <section className="home" id="home">

                <div className="group">

                    <div className="content">
                        {/* <p className="pTextHome">O <span className="logoTextColor">melhor</span> lugar para <span className='logoTextColor'> aprender </span> um novo <span className='logoTextColor'>idioma</span>.</p> */}
                        <p className="pTextHome">
                            <Typewriter text={`O melhor lugar para aprender um novo idioma.`} speed={60} />
                        </p>

                        <div className="linksHome">
                            <Link to='/' className="signUp">Começar curso</Link>
                            <Link to='/login' className="login">Continuar curso</Link>
                        </div>


                    </div>

                    <img src={svgHome} alt="Not Suported" className="svgHome" />
                </div>

                <div className="svgDiv">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 310">
                        <path
                            fill="#fd5d19"
                            fillOpacity="1"
                            d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                        </path></svg>
                </div>
            </section>


            <section className="course" id="course">
                <p className="pTextCourse">O que nós <span className="logoTextColorCourse">oferecemos</span></p>

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
                <p className="pTextAboutUs">Um pouco sobre <span className="logoTextColorAboutUs">nós</span>.</p>

                <p className="pAboutUs">Aprender um novo idioma nunca foi tão fácil e divertido! No Glotto, oferecemos uma abordagem interativa e personalizada para que você domine o idioma dos seus sonhos, no seu próprio ritmo. Com lições práticas, desafios diários e uma plataforma gamificada, você poderá aprender desde o básico até níveis avançados de forma envolvente e eficiente.</p>
            </section>

            {/* <footer>Fim</footer> */}
        </div >
    )
}