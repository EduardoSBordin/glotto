import '../css/HomeStudent.css'
import whats from '../contentGraph/whats.png'
import achievements from '../contentGraph/achievements.png'
import talk from '../contentGraph/talk.png'
import translate from '../contentGraph/translate.png'
import trails from '../contentGraph/trails.png'
import small from '../contentGraph/small.png'

export function HomeStudent() {
    return (
        <div className='divHomeStudent'>
            <div className="containerHomeStudent">

                <div className='cardHomeStudent '>
                    <img src={whats} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent cardPurple'>
                        <h1>Qual é o animal ?</h1>
                        <button>Começar tarefa</button>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={small} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Pequenos diálogos.</h1>
                        <button>Começar tarefa</button>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={translate} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Traduza a questão.</h1>
                        <button>Começar tarefa</button>
                    </div>
                </div>

            </div>

            <div className="containerHomeStudent">

                <div className='cardHomeStudent'>
                    <img src={trails} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Siga a trilha.</h1>
                        <button>Começar tarefa</button>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={achievements} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Suas conquistas.</h1>
                        <button>Começar tarefa</button>
                    </div>
                </div>

                <div className='cardHomeStudent'>
                    <img src={talk} alt="" className='imgCardHomeStudent' />

                    <div className='cardContent'>
                        <h1>Conversar com a IA</h1>
                        <button>Começar tarefa</button>
                    </div>
                </div>
            </div>

        </div>
    )
}