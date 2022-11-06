import image from './images/image-hero-desktop.png'
import './Main.css'
import audio from './images/client-audiophile.svg'
import databiz from './images/client-databiz.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'


const Main = () => {
    return(
        <main className='main'>
            <div className="left">
                <h1>Make
                    remote work    
                </h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create a team ritual, and watch productivity soar.</p>
                <button className='button'>Learn more</button>
                <ul className='partners'>
                    <li><img src={databiz} alt="" /></li>
                    <li><img src={audio} alt="" /></li>
                    <li><img src={meet} alt="" /></li>
                    <li><img src={maker} alt="" /></li>
                </ul>
            </div>
            <div className="right">
                <img src={image} alt="" />
            </div>
        </main>
    )
}



export default Main