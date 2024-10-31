import '../css/Questions.css'
import { useState, useEffect } from 'react';
function QuestionsTimer() {

    const [score, setScore] = useState(0);

    let myInterval;
    let speed = 50;
    let counter = 0;

    useEffect(() => {
        let bar = document.querySelector('.bar');
        function timerBar() {
            clearInterval(myInterval);


            myInterval = setInterval(() => {
                counter++;
                // bar.innerHTML = counter;
                bar.style.width = counter + '%';

                // console.log(counter);
                if (counter === 100) {
                    bar.innerHTML = 'Concluido';
                    clearInterval(myInterval);

                    document.querySelector('.question1').style.display = 'none';
                    document.querySelector('.question2').style.display = 'none';
                    document.querySelector('.question3').style.display = 'none';
                    document.querySelector('.finishedTrueOrFalse').style.display = 'block';
                }
            }, speed);

        }
        timerBar();
    }, []); // Executa apenas uma vez após a montagem do componente

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

            document.querySelector('.finishedTrueOrFalse').style.display = 'block';
            document.querySelector('.question3').style.display = 'none';

            console.log(score);

            clearInterval(myInterval);
            counter = 0;
            let bar = document.querySelector('.bar');
            bar.remove();
        } else {
            alert('Por favor, selecione um.')
        }
    }

    return (
        <section className='containerQuestions'>

            <div className="chooses">

                <div className="question1">
                    <h1>Apple</h1>
                    <div className="toggle">
                        <input type="radio" name="choose" value="a1" id="a1" onClick={q1} />
                        <label htmlFor="a1">Maça</label>

                        <input type="radio" name="choose" value="a2" id="a2" onClick={q1} />
                        <label htmlFor="a2">Banana</label>
                    </div>

                    {/* <button onClick={q1} className="btnCheck btnChechContent">Checar</button> */}
                </div>

                <div className="question2">
                    <h1>Watermelon</h1>
                    <div className="toggle">
                        <input type="radio" name="choose" value="a3" id="a3" onClick={q2} />
                        <label htmlFor="a3">Melancia</label>

                        <input type="radio" name="choose" value="a4" id="a4" onClick={q2} />
                        <label htmlFor="a4">Melão</label>
                    </div>

                    {/* <button onClick={q2} className="btnCheck btnChechContent">Checar</button> */}
                </div>

                <div className="question3">
                    <h1>Pineapple</h1>
                    <div className="toggle">
                        <input type="radio" name="choose" value="a5" id="a5" onClick={q3} />
                        <label htmlFor="a5">Abacaxi</label>

                        <input type="radio" name="choose" value="a6" id="a6" onClick={q3} />
                        <label htmlFor="a6">Uva</label>
                    </div>

                    {/* <button onClick={q3} className="btnCheck btnChechContent">Checar</button> */}
                </div>

                <div className="finishedTrueOrFalse">
                    <h1>Você acertou: {score} questões(ão)</h1>

                </div>
            </div>

        </section>
    )
}
export default QuestionsTimer