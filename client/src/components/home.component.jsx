import '../css/home.css'
import MyImage from '../assets/Group 46.svg'

const HomeCmponent = () => {
  return (
    <div className='flex homeContent'>
      <div className=''>
      <div className='mainText'>Nischal is a <span>web designer</span> and <span>front-end developer</span></div>
      <div className='subText'>He crafts responsive websites where technologies meet creativity</div>
      <div className='contactMe'><button>Contact Me</button></div>
      <div className='currentlyWorking flex'><div className='rectangle'></div><span className=''>Currently working on<span className='port'>Portfolio</span></span></div>
    
    </div>
    <div className='myImage'><img src={MyImage} alt='MyImage' /></div>
    </div>
  );
}

export default HomeCmponent;