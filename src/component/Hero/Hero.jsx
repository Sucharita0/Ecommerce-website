import './Hero.css';
function Hero(){
   return(
    <div className="hero">
        <div className="hero-left">
            <h2>New Arrivals only</h2> 
            <div className='hero-icons'>
                <div className="hero-hand-icon">
                    <p className='hero-para'>new</p>
                    <img src="https://whatemoji.org/wp-content/uploads/2020/07/Waving-Hand-Emoji-1024x1024.png" alt=""/>
                </div>
                
                <h1>Collection</h1>
                <h1>For Everyone</h1> 
                
            </div>
            <div className="hero-button">
                <div>Latest collection</div>
                <img src="https://th.bing.com/th/id/R.fcd8a98a63606cd56b2c91fe1bec86f5?rik=ZbFsg1nYrw3keA&riu=http%3a%2f%2fwww.freeiconspng.com%2fuploads%2fred-arrow-11.png&ehk=IOV%2bAVuN%2fji5jerIW4NSBKmWNJdt5W%2f5Ok7QaGAKhkc%3d&risl=&pid=ImgRaw&r=0"/>
            </div>
        </div>
        <div className="hero-right">
            <img src= "../../../a1.png" alt=''/>
        </div>

    </div>
   )
}
export default Hero;