import '../index.css'
import IconChat  from '../assets/icon-chat.png'
import IconSecurity  from '../assets/icon-security.png'
import IconMoney  from '../assets/icon-money.png'
import FeaturesItem from "../component/FeaturesItem";
import Features from "../component/Features";

function Home(){
    return(
        <>

            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <Features srTitle="Features">
                    <FeaturesItem picture={IconChat} pictureAlt="Chat Icon">
                        <h3 className="feature-item-title">You are our #1 priority</h3>
                        <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
                    </FeaturesItem>
                    <FeaturesItem picture={IconMoney} pictureAlt="Money Icon">
                        <h3 className="feature-item-title">More savings means higher rates</h3>
                        <p>The more you save with us, the higher your interest rate will be!</p>
                    </FeaturesItem>
                    <FeaturesItem picture={IconSecurity} pictureAlt="Shield check Icon">
                        <h3 className="feature-item-title">Security you can trust</h3>
                        <p>We use top of the line encryption to make sure your data and money is always safe.</p>
                    </FeaturesItem>
                </Features>
            </main>
            </>
    )
}
export default Home
