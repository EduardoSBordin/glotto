import '../css/Questions.css'
import { useState } from 'react';
function Questions() {

    // let count = 0;
    // let score = 0;

    const [count, setCount] = useState(33);
    const [score, setScore] = useState(0);

    function barPlus() {

        setCount(prevCount => prevCount + 33)
        // count += 33;
        const getBar = document.querySelector('.bar');

        getBar.style.width = count + '%';

        if (count >= 100) {
            // alert('Proxima lição');
            getBar.style.width = 0 + '%';
            // count = 0;
        }

        // document.querySelectorAll('input#radio').checked = false;
    }
    function q1() {

        let getA1 = document.querySelector('#a1');
        let getA2 = document.querySelector('#a2');

        if (getA1.checked || getA2.checked) {

            if (getA1.checked) {
                setScore(prevScore => prevScore + 1);
            } else if (getA2.checked) {
                console.log('Errado')
            }

            document.querySelector('.question1').style.display = 'none';
            document.querySelector('.question2').style.display = 'block';

            barPlus();
            console.log(score);
        } else {
            alert('Por favor, selecione um.')
        }

    }
    function q2() {

        let getA3 = document.querySelector('#a3');
        let getA4 = document.querySelector('#a4');

        if (getA3.checked || getA4.checked) {
            if (getA3.checked) {
                setScore(prevScore => prevScore + 1);
            }
            document.querySelector('.question2').style.display = 'none';
            document.querySelector('.question3').style.display = 'block';

            barPlus();

            console.log(score);
        } else {
            alert('Por favor, selecione um.')
        }
    }
    function q3() {
        let getA5 = document.querySelector('#a5');
        let getA6 = document.querySelector('#a6');

        if (getA5.checked || getA6.checked) {
            if (getA5.checked) {
                setScore(prevScore => prevScore + 1);
            } else if (getA6.checked) {
                console.log('Errado')
            }

            document.querySelector('.finished').style.display = 'block';
            document.querySelector('.question3').style.display = 'none';

            barPlus();

            console.log(score);
        } else {
            alert('Por favor, selecione um.')
        }
    }

    return (
        <section className='containerQuestions'>

            <div className="chooses">

                <div className="question1">
                    <h1>Hello, How are you ?</h1>
                    <div className="toggle">
                        <input type="radio" name="choose" value="a1" id="a1" />
                        <label htmlFor="a1">Olá, Como você está ?</label>

                        <input type="radio" name="choose" value="a2" id="a2" />
                        <label htmlFor="a2">Olá, você está com fome ?</label>
                    </div>

                    <button onClick={q1} className="btnCheck btnChechContent">Checar</button>
                </div>

                <div className="question2">
                    <h1>It's good to see you.</h1>
                    <div className="toggle">
                        <input type="radio" name="choose" value="a3" id="a3" />
                        <label htmlFor="a3">É bom ver você.</label>

                        <input type="radio" name="choose" value="a4" id="a4" />
                        <label htmlFor="a4">Você está de férias.</label>
                    </div>

                    <button onClick={q2} className="btnCheck btnChechContent">Checar</button>
                </div>

                <div className="question3">
                    <h1>Good morning.</h1>
                    <div className="toggle">
                        <input type="radio" name="choose" value="a5" id="a5" />
                        <label htmlFor="a5">Bom dia.</label>

                        <input type="radio" name="choose" value="a6" id="a6" />
                        <label htmlFor="a6">Boa tarde.</label>
                    </div>

                    <button onClick={q3} className="btnCheck btnChechContent">Checar</button>
                </div>

                <div className="finished">
                    <h1>Você acertou: {score}</h1>

                </div>
            </div>

        </section>
    )
}
export default Questions