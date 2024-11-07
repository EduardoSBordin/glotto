import '../css/HistoriesStudent.css'
import { Link } from 'react-router-dom'

import storie1IMG from '../contentGraph/Stories-Images/storie1.png'
import storie2IMG from '../contentGraph/Stories-Images/storie2.png'
import storie3IMG from '../contentGraph/Stories-Images/storie3.png'

function HistoriesStudent() {
    return (
        <section className="mainSectionHistories">
            <Link to='/storie1' className="story">
                <img src={storie1IMG} alt="Not Suported" className='imgStorieCover' />

                <div className="contentTextStory">
                    <h2>Encounter in the Jungle: The Hunter and the Golden Tiger</h2>
                    <p>A journey of respect and harmony deep in the jungle, where a hunter discovers that true victory lies in the encounter and understanding of the wild nature.</p>
                </div>
            </Link>

            <Link to='/' className="story">
                <img src={storie2IMG} alt="Not Suported" className='imgStorieCover' />

                <div className="contentTextStory">
                    <h2>From Village to Glory: The Rise of Lucas, the World Champion</h2>
                    <p>The inspiring journey of Lucas, from his humble roots in a small village to the pinnacle of the motorsport world, where passion, hard work, and determination turned a dream into reality.</p>
                </div>
            </Link>

            <Link to='/' className="story">
                <img src={storie3IMG} alt="Not Suported" className='imgStorieCover' />

                <div className="contentTextStory">
                    <h2>Mystery in São Paulo: Detective Rafael and the Emerald Necklace</h2>
                    <p>The thrilling investigation of Rafael, a brilliant detective who unravels a complex theft case, rescuing a valuable necklace and bringing justice to the vibrant city of São Paulo.</p>
                </div>
            </Link>
        </section>
    )
}
export default HistoriesStudent