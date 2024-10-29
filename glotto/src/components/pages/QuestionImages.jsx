import '../css/QuestionImages.css'
import { useState } from 'react';

import dog from '../contentGraph/Question-Images/dog.png'
import bird from '../contentGraph/Question-Images/bird.png'
import bear from '../contentGraph/Question-Images/bear.png'
import giraffe from '../contentGraph/Question-Images/giraffe.png'
import cow from '../contentGraph/Question-Images/cow.png'
import duck from '../contentGraph/Question-Images/duck.png'

function QuestionImages() {

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

            document.querySelector('.question1Image').style.display = 'none';
            document.querySelector('.question2Image').style.display = 'block';

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
            document.querySelector('.question2Image').style.display = 'none';
            document.querySelector('.question3Image').style.display = 'block';

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
            document.querySelector('.question3Image').style.display = 'none';

            barPlus();

            console.log(score);
        } else {
            alert('Por favor, selecione um.')
        }
    }

    return (
        <section className='containerQuestionsImages'>

            <div className="choosesImage">

                <div className="question1Image">
                    <h1>Dog</h1>
                    <div className="toggleImage">
                        <input type="radio" name="choose" value="a1" id="a1" />
                        <label htmlFor="a1">{
                            <img src={dog} alt="" className='imgQuestionImages' />
                        }</label>

                        <input type="radio" name="choose" value="a2" id="a2" />
                        <label htmlFor="a2">{
                            <img src={bird} alt="" className='imgQuestionImages' />
                        }</label>
                    </div>

                    <button onClick={q1} className="btnCheck btnChechContent">Checar</button>
                </div>

                <div className="question2Image">
                    <h1>Bear</h1>
                    <div className="toggleImage">
                        <input type="radio" name="choose" value="a3" id="a3" />
                        <label htmlFor="a3">{
                            <img src={bear} alt="" className='imgQuestionImages' />
                        }</label>

                        <input type="radio" name="choose" value="a4" id="a4" />
                        <label htmlFor="a4">{
                            <img src={giraffe} alt="" className='imgQuestionImages' />
                        }</label>
                    </div>

                    <button onClick={q2} className="btnCheck btnChechContent">Checar</button>
                </div>

                <div className="question3Image">
                    <h1>Cow</h1>
                    <div className="toggleImage">
                        <input type="radio" name="choose" value="a5" id="a5" />
                        <label htmlFor="a5">{
                            <img src={cow} alt="" className='imgQuestionImages' />
                        }</label>

                        <input type="radio" name="choose" value="a6" id="a6" />
                        <label htmlFor="a6">{
                            <img src={duck} alt="" className='imgQuestionImages' />
                        }</label>
                    </div>

                    <button onClick={q3} className="btnCheck btnChechContent">Checar</button>
                </div>

                <div className="finished">
                    <h1>Você acertou: {score} questões(ão)</h1>

                </div>
            </div>

        </section>
    )
}
export default QuestionImages