import '../css/CourseStudent.css'
import { Link } from 'react-router-dom'
function CourseStudent() {
    return (
        <section className='mainSectionCourseStudent'>

            <div className="divBeginner">
                <h1>Iniciante</h1>

                <div className="classContent">
                    <Link to='/' className='linkClass'>
                        <span class="material-symbols-outlined iconTextClassLink">book_2</span>
                        <span className='textClassLink'>Módulo 01 - Aula 01: Cumprimentos, apresentações e despedidas</span>
                    </Link>

                    <Link to='/' className='linkClass'>
                        <span class="material-symbols-outlined iconTextClassLink">book_2</span>
                        <span className='textClassLink'>Módulo 01 - Aula 02: Idade, Nacionalidade e Ocupação</span>
                    </Link>

                    <Link to='/' className='linkClass'>
                        <span class="material-symbols-outlined iconTextClassLink">book_2</span>
                        <span className='textClassLink'>Módulo 01 - Aula 03: Maneiras alternativas de perguntar "How are you?"</span>
                    </Link>

                    <Link to='/' className='linkClass'>
                        <span class="material-symbols-outlined iconTextClassLink">book_2</span>
                        <span className='textClassLink'>Módulo 01 - Aula 04: A Estrutura Básica da Língua Inglesa</span>
                    </Link>

                    <Link to='/' className='linkClass'>
                        <span class="material-symbols-outlined iconTextClassLink">book_2</span>
                        <span className='textClassLink'>Módulo 01 - Aula 05: Números em inglês de 0 à 100</span>
                    </Link>

                </div>
            </div>

            {/* <div className="divIntermediate">
                <h1>Intermediário</h1>
            </div>

            <div className="divAdvanced">
                <h1>Avançado</h1>
            </div> */}
        </section>
    )
}
export default CourseStudent