import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
function NavStories() {

    const navigate = useNavigate();


    return (
        <section className="mainSectionMenuNavStories">
            <Link to='/login' className='linkClose'>Fechar</Link>

            <div className="menusBarStories">
                <button>DarkMode</button>
                <button>Font-Size</button>
                <button>Font-Style</button>
                <button>Font-Color</button>
                <button>Change Language</button>
            </div>
        </section>
    )
}
export default NavStories