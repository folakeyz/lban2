import React from 'react'
import style from './Hero.module.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import csp from '../../img/Gold.jpg';

const slides = [
    { title: 'Lotus Beta Analytics Nig. Ltd.', button:'Learn More', description: "We are focused on the provision of Information Technology Solutions and Services that are built on a world-class, secure, resilient infrastructure, delivered according to global best practices in partnership with the world’s leading technology vendor"},
    { title: 'C | S C U', description: 'Secure Yourself, Your Staff, Become Skilled and Knowledgeable. Be a CERTIFIED SECURE COMPUTER USER'},
    { title: 'COVID-19 impact on Business and working remotely with Microsoft Teams to stay productive', description: 'What could COVID-19 impact mean for companies? Are they better prepared to stay productive, efficient and better effective? Going by events, small businesses are in no way prepared or have any plan on ground to stay productive during these trying times'},
  ];
function HeroSection() {
    return (
        <div className={style.mainContainer}>
        <div className={style.heroContainer}>
        <div className={style.carousel}>
         <Slider autoplay={3000}>
	{slides.map((item, index) => (
		<div
			key={index}
			>
			<div className="center">
				<h1>{item.title}</h1>
				<p>{item.description}</p>
				<button>{item.button}</button>
			</div>
		</div>
		
	))}
</Slider>
        </div>
        <div className={style.captionBox}>
        <div className={style.box}>
        <img src={csp}/>
            </div>
            <div className={style.smbox}>
            <h2>What business results do you want to achieve?</h2><br></br>
            <p>Explore our Services</p>
            <button><i className="fa fa-chevron-right"></i></button>
            </div>
            <div className={style.smbox}>
                <div className={style.smBanner}>
                    <h3>CUSTOMERS</h3>
                </div>
                <div className={style.smBannerText}>
                    <h1>50+</h1>
                    <p>Happy Customers</p>
                </div>
            </div>
            
            
            <div className={style.smbox}>
                <div className={style.smBanner}>
                    <h3>Experience</h3>
                </div>
                <div className={style.smBannerText}>
                    <h1>10+</h1>
                    <p>years of Experience</p>
                </div>
            </div>
            </div>
        </div>
        <div className={style.overlay}>
       <video src="/video/LBANs.mp4" autoPlay loop muted />
        </div>
        </div>
      

    )
}

export default HeroSection
