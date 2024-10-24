import '../css/Questions.css'
function Questions() {


    return (
        <section className='containerQuestions'>
            <h1>Hello, How are you ?</h1>

            <div className="chooses">

                <div class="toggle">
                    <input type="radio" name="choose" value="a1" id="a1" />
                    <label for="a1">Escolha 1</label>

                    <input type="radio" name="choose" value="a2" id="a2" />
                    <label for="a2">Escolha 2</label>
                </div>

            </div>
        </section>
    )
}
export default Questions