import '../css/Questions.css'
import '../css/QuestionsTranslater.css'
import { useState } from 'react';
function QuestionsTranslater() {

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

        let q1 = document.querySelector('#q1').value;
        let q1Lower = q1.toLowerCase().trim();

        if (q1.length >= 1) {

            if (q1Lower === 'obrigado') {
                setScore(prevScore => prevScore + 1);
                console.log('Correct answer.');
            } else {
                console.log('Incorrect answer.');
            }

            document.querySelector('.question1').style.display = 'none';
            document.querySelector('.question2').style.display = 'flex';

            barPlus();
            console.log(score);
        }
        else {
            alert('Por favor, digite algo.')
        }
    }
    function q2() {

        let q2 = document.querySelector('#q2').value;
        let q2Lower = q2.toLowerCase().trim();

        if (q2.length >= 1) {

            if (q2Lower === 'que horas são?' || q2Lower === 'que horas são ?') {
                setScore(prevScore => prevScore + 1);
                console.log('Correct answer.');
            } else {
                console.log('Incorrect answer.');
            }

            document.querySelector('.question2').style.display = 'none';
            document.querySelector('.question3').style.display = 'flex';

            barPlus();
            console.log(score);
        }
        else {
            alert('Por favor, digite algo.')
        }
    }
    function q3() {
        let q3 = document.querySelector('#q3').value;
        let q3Lower = q3.toLowerCase().trim();

        if (q3.length >= 1) {

            if (q3Lower === 'desculpa') {
                setScore(prevScore => prevScore + 1);
                console.log('Correct answer.');
            } else {
                console.log('Incorrect answer.');
            }

            document.querySelector('.finishedTrueOrFalse').style.display = 'block';
            document.querySelector('.question3').style.display = 'none';

            barPlus();
            console.log(score);
        }
        else {
            alert('Por favor, digite algo.')
        }
    }

    function enter() {
        document.querySelector('keypress', (e) => {

            // if (e.keyCode === 13) {
            //     console.log('ENTER');
            // }

            console.log(e.target.value);
        })
    }
    return (
        <section className='containerQuestions'>

            <div className="chooses">


                <div className="question1 questionTranslater1">
                    <h1>Thank you.</h1>

                    <input type="text" name="q1" id="q1" className='inputTxt' placeholder='Digite aqui a tradução.' autoComplete='off' />

                    <button onClick={q1} className="btnCheck btnChechContent">Checar</button>
                </div>

                <div className="question2 questionTranslater2">
                    <h1>"What time is it?</h1>

                    <input type="text" name="q2" id="q2" className='inputTxt' placeholder='Digite aqui a tradução.' autoComplete='off' />

                    <button onClick={q2} className="btnCheck btnChechContent">Checar</button>
                </div>

                <div className="question3 questionTranslater3">
                    <h1>Excuse me</h1>

                    <input type="text" name="q3" id="q3" className='inputTxt' placeholder='Digite aqui a tradução.' autoComplete='off' />

                    <button onClick={q3} className="btnCheck btnChechContent">Checar</button>
                </div>

                <div className="finishedTrueOrFalse">
                    <h1>Você acertou: {score} questões(ão)</h1>

                </div>
            </div>

        </section>
    )
}
export default QuestionsTranslater