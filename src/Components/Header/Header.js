import Button from '../Button/Button';

import desktop from './images/image-desktop.jpg';
import mobile from './images/image-mobile.jpg';
import './Header.css';

export default function Header() {
  return (
    <header className='hero-container'>

      <div className='image-container'>
        <img
          className='hero-image'
          srcSet={`${mobile} 768w, ${desktop} 960w`}
          src={mobile}
          alt="hero image"
        />
      </div>

      <div className='text-container'>
        <div className='title-container'>
          <h1>The Bright Future of Web 3.0?</h1>
        </div>

        <div className='p-container'>
          <p>We dive into the next evolution of the web that claims to put the power of the plataforms back into the hands of the people.But is it really fulfilling its promise?</p>
          <Button />
        </div>
      </div>
    </header>
  )
}