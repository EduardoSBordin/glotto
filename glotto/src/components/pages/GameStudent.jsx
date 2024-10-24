import '../css/HomeStudent.css'
import quizTranslate from '../contentGraph/quizTranslate.png'
import completePhrases from '../contentGraph/completePhrases.png'
import memoryGame from '../contentGraph/memoryGame.png'
import chooseIMG from '../contentGraph/chooseIMG.png'
import trueOrFalse from '../contentGraph/trueOrFalse.png'
import timer from '../contentGraph/timer.png'
import { QuizGameTranslate } from './QuizGameTranslate'
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
                        <button>Começar tarefa</button>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={chooseIMG} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Escolha a imagem</h1>
                        <button>Começar tarefa</button>
                    </div>
                </div>

            </div>

            <div className="containerHomeStudent">

                <div className='cardHomeStudent'>
                    <img src={trueOrFalse} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Verdadeiro ou Falso.</h1>
                        <button onClick={() => setActiveComponent('QuizGameTranslate')}>Começar tarefa</button>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={timer} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Quiz de Cronómetro</h1>
                        <button>Começar tarefa</button>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={memoryGame} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Jogo da memória</h1>
                        <button>Começar tarefa</button>
                    </div>
                </div>
            </div>

        </div>
    )
}