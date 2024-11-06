import '../css/CourseStudent.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
function CourseStudent() {

    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(true);

    const [active3, setActive3] = useState(true);
    const [active4, setActive4] = useState(true);

    const changeClass1 = () => {
        setActive1(!active1);
        setActive3(!active3);
    }

    const changeClass2 = () => {
        setActive2(!active2);
        setActive4(!active4);
    }
    return (
        <section className='mainSectionCourseStudent'>

            <div className="divBeginner">
                <h1>Iniciante</h1>

                <div className={`classContent`}>
                    <div className={`classes ${active3 ? "" : "open1"}`}>
                        <button className='linkClass' onClick={changeClass1}>
                            <span className="material-symbols-outlined iconTextClassLink">book_2</span>
                            <span className='textClassLink'>Aula 1: Saudações e Introduções</span>
                        </button>
                        <div className={`classContentModal ${active1 ? "" : "open"}`}>

                            <h3>1. Saudações Comuns (Greetings)</h3>
                            <table>
                                <tr>
                                    <th>Inglês</th>
                                    <th>Português</th>
                                </tr>
                                <tr>
                                    <td>Hello</td>
                                    <td>Olá</td>
                                </tr>
                                <tr>
                                    <td>Hi</td>
                                    <td>Oi</td>
                                </tr>
                                <tr>
                                    <td>Good morning</td>
                                    <td>Bom dia</td>
                                </tr>
                                <tr>
                                    <td>Good afternoon</td>
                                    <td>Boa tarde</td>
                                </tr>
                                <tr>
                                    <td>Good evening</td>
                                    <td>Boa noite (usado ao encontrar alguém à noite)</td>
                                </tr>
                                <tr>
                                    <td>Good night</td>
                                    <td>Boa noite (usado ao se despedir à noite)</td>
                                </tr>
                            </table>


                            <h3>2. Apresentações Básicas (Basic Introductions)</h3>

                            <ul>
                                <li>My name is... – Meu nome é...</li>
                                <span>- Exemplo: “My name is Ana.” (Meu nome é Ana.)</span>
                                <br />
                                <li>I am... ou I'm... – Eu sou...</li>
                                <span>- Exemplo: “I am John.” ou “I'm John.” (Eu sou o John.)</span>
                                <br />
                                <li>Nice to meet you! – Prazer em conhecê-lo!</li>
                                <span>- Resposta: Nice to meet you too! (Prazer em conhecê-lo também!)</span>
                            </ul>
                        </div>
                    </div>


                    <div className={`classes ${active4 ? "" : "open1"}`}>
                        <button className='linkClass' onClick={changeClass2}>
                            <span className="material-symbols-outlined iconTextClassLink">book_2</span>
                            <span className='textClassLink'>Aula 2: Números e Como Perguntar e Dizer a Idade</span>
                        </button>
                        <div className={`classContentModal ${active2 ? "" : "open"}`}>

                            <h3>1. Números de 1 a 10</h3>
                            <table>
                                <tr>
                                    <th>Número</th>
                                    <th>Inglês</th>
                                    <th>Pronúncia aproximada</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>One</td>
                                    <td>uãn</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Two</td>
                                    <td>tu</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Three</td>
                                    <td>thrí</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Four</td>
                                    <td>fór</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Five</td>
                                    <td>faiv</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Six</td>
                                    <td>siks</td>
                                </tr>

                                <tr>
                                    <td>7</td>
                                    <td>Seven</td>
                                    <td>sévn</td>
                                </tr>

                                <tr>
                                    <td>8</td>
                                    <td>Eight</td>
                                    <td>êit</td>
                                </tr>

                                <tr>
                                    <td>9</td>
                                    <td>Nine</td>
                                    <td>nain</td>
                                </tr>

                                <tr>
                                    <td>10</td>
                                    <td>Ten</td>
                                    <td>tén</td>
                                </tr>
                            </table>


                            <h3>2. Perguntando e Dizendo a Idade</h3>

                            <ul>
                                <li>How old are you? – Quantos anos você tem?</li>
                                <span>Para responder, usamos: I am... ou I'm... + [idade] + years old. – Eu tenho [idade] anos.</span>
                                <br />
                                <li>Exemplos: “How old are you?”</li>
                                <span>Resposta: “I’m 7 years old.” (Eu tenho 7 anos.)<br />
                                    Resposta: “I’m 10 years old.” (Eu tenho 10 anos.)</span>
                            </ul>
                        </div>
                    </div>
                    {/* <Link to='/' className='linkClass'>
                        <span class="material-symbols-outlined iconTextClassLink">book_2</span>
                        <span className='textClassLink'>Módulo 01 - Aula 03: Maneiras alternativas de perguntar "How are you?"</span>
                    </Link>

                    <Link to='/' className='linkClass'>
                        <span className="material-symbols-outlined iconTextClassLink">book_2</span>
                        <span className='textClassLink'>Módulo 01 - Aula 04: A Estrutura Básica da Língua Inglesa</span>
                    </Link>

                    <Link to='/' className='linkClass'>
                        <span className="material-symbols-outlined iconTextClassLink">book_2</span>
                        <span className='textClassLink'>Módulo 01 - Aula 05: Números em inglês de 0 à 100</span>
                    </Link> */}

                </div>

                {/* <div className={`classContentModal ${active ? "" : "open"}`}>
                    <div className="test">
                        <h1>Aula</h1>
                    </div>
                </div> */}
            </div>

            {/* <div className="divIntermediate">
                <h1>Intermediário</h1>
            </div>

            <div className="divAdvanced">
                <h1>Avançado</h1>
            </div> */}
        </section >
    )
}
export default CourseStudent