import { useNavigate } from "react-router-dom"
import '../css/QuizGameTranslate.css'
import TrueOrFalseQuestions from "./TrueOrFalseQuestions";

export function TrueOrFalse() {

    const navigate = useNavigate();


    return (
        <section className="containerQuizGameTranslate">

            <div className="barProgress">
                <button onClick={() => navigate(-1)} className="btnCheck"><span className="material-symbols-outlined">
                    arrow_back_ios_new
                </span></button>



                <div className="progress">
                    <div className="bar"></div>
                </div>
            </div>

            <div className="contentQuizGame">
                <div className="questions">
                    <TrueOrFalseQuestions />
                </div>
            </div>

        </section>
    )
}