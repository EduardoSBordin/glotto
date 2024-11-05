import { useState } from 'react'
import '../css/ClassBeginnerLayout.css'
import { useNavigate } from 'react-router-dom'
function Class1Beginner() {

    const navigate = useNavigate();

    function back() {
        navigate(-1);
    }
    return (
        <section className="main">
            <nav><button onClick={back}>Voltar</button></nav>

            <div className="contentPart1">
                <p>

                    Para cumprimentar alguém diga:<br />
                    - Hi! (Oi!)<br />

                    - Hello! (Olá!)<br />

                    Ou então:
                    - Good morning! (Bom dia!)<br />

                    - Good afternoon! (Boa tarde)<br />

                    - Good evening! (Boa noite!)<br />
                </p>

                <p>

                    Important: <br />
                    Quando cumprimentar alguém na parte da noite, nunca diga "Good night". Dizemos isso à noite apenas quando estamos nos despedindo de alguém.
                </p>

                <p>

                    Em uma situação formal, se você sabe o nome da pessoa use Mr. /Mrs. ou Ms. <br />
                    - Hello, Mr. Ford. <br />

                    - Good evening, Mrs. Lane. <br />
                </p>

                <p>

                    Se você não sabe o nome da pessoa use Sir ou Madam/Ma’am.<br />
                    - Good morning, sir.<br />

                    - Good afternoon, ma’am.<br />
                </p>

            </div>
        </section>
    )
}
export default Class1Beginner