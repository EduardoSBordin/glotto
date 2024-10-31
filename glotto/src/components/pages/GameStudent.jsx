import '../css/HomeStudent.css'
import quizTranslate from '../contentGraph/quizTranslate.png'
import completePhrases from '../contentGraph/completePhrases.png'
import memoryGame from '../contentGraph/memoryGame.png'
import chooseIMG from '../contentGraph/chooseIMG.png'
import trueOrFalse from '../contentGraph/trueOrFalse.png'
import timer from '../contentGraph/timer.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function GameStudent() {

    const navigate = useNavigate();

    return (
        <div className='divHomeStudent'>
            <div className="containerHomeStudent">

                <div className='cardHomeStudent '>
                    <img src={quizTranslate} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent cardPurple'>
                        <h1>Quiz de Tradução</h1>
                        <Link to='/quizgametranslate' className='btnGameStudent'>Começar tarefa</Link>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={completePhrases} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Complete a frase</h1>
                        <Link to='/completephrase' className='btnGameStudent'>Começar tarefa</Link>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={chooseIMG} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Escolha a imagem</h1>
                        <Link to='/ChooseImage' className='btnGameStudent'>Começar tarefa</Link>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={trueOrFalse} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Verdadeiro ou Falso.</h1>
                        <Link to='/trueorfalse' className='btnGameStudent'>Começar tarefa</Link>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={timer} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Quiz de Cronómetro</h1>
                        <Link to='/timergame' className='btnGameStudent'>Começar tarefa</Link>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={memoryGame} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Jogo da memória</h1>
                        <Link to='/' className='btnGameStudent'>Começar tarefa</Link>
                    </div>
                </div>

            </div>

            {/* <div className="containerHomeStudent">

                <div className='cardHomeStudent'>
                    <img src={trueOrFalse} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Verdadeiro ou Falso.</h1>
                        <Link to='/' className='btnGameStudent'>Começar tarefa</Link>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={timer} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Quiz de Cronómetro</h1>
                        <Link to='/' className='btnGameStudent'>Começar tarefa</Link>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={memoryGame} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Jogo da memória</h1>
                        <Link to='/' className='btnGameStudent'>Começar tarefa</Link>
                    </div>
                </div>
            </div> */}

        </div>
    )
}