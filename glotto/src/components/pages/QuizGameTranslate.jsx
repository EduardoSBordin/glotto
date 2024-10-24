import { useNavigate } from "react-router-dom"
import { useState } from "react";
import '../css/QuizGameTranslate.css'

export function QuizGameTranslate() {

    const navigate = useNavigate();

    const [bar, setBar] = useState(0);

    let count = 0;
    function barPlus() {

        count += 10;
        const getBar = document.querySelector('.bar');

        getBar.style.width = count + '%';

        if (count > 100) {
            alert('Proxima lição');
            getBar.style.width = 0 + '%';
            count = 0;
        }
    }

    return (
        <section className="containerQuizGameTranslate">

            <div className="barProgress">
                <button onClick={() => navigate(-1)}><span class="material-symbols-outlined">
                    arrow_back_ios_new
                </span></button>

                <div className="progress">
                    <div className="bar"></div>
                </div>
            </div>

            <div className="contentQuizGame">
                <h1>Conteúdo...</h1>
                <button onClick={barPlus}>Test</button>
            </div>

        </section>
    )
}