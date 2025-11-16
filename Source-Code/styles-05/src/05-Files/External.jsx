import { useState } from 'react';
import './css/style.css'

function External() {
  let url = "https://images.unsplash.com/photo-1753596109558-97938b3d5368?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
  const [bg, setbg] = useState(true)

  return (
    <>
      <h2 className={bg ? "heading" : ""}>External style</h2>
      <button onClick={() => setbg(!bg)}>click</button>

      <div className='container'>

        <div className='card'>
          <div>
            <img className='img' src={url} alt="image" />
          </div>
          <div className='text'>
            <h3>Islamabad</h3>
            <h3>Capital</h3>
          </div>
        </div>
        <div className='card'>
          <div>
            <img className='img' src={url} alt="image" />
          </div>
          <div className='text'>
            <h3>Islamabad</h3>
            <h3>Capital</h3>
          </div>
        </div>
        <div className='card'>
          <div>
            <img className='img' src={url} alt="image" />
          </div>
          <div className='text'>
            <h3>Islamabad</h3>
            <h3>Capital</h3>
          </div>
        </div>
        <div className='card'>
          <div>
            <img className='img' src={url} alt="image" />
          </div>
          <div className='text'>
            <h3>Islamabad</h3>
            <h3>Capital</h3>
          </div>
        </div>
        <div className='card'>
          <div>
            <img className='img' src={url} alt="image" />
          </div>
          <div className='text'>
            <h3>Islamabad</h3>
            <h3>Capital</h3>
          </div>
        </div>
        <div className='card'>
          <div>
            <img className='img' src={url} alt="image" />
          </div>
          <div className='text'>
            <h3>Islamabad</h3>
            <h3>Capital</h3>
          </div>
        </div>
        <div className='card'>
          <div>
            <img className='img' src={url} alt="image" />
          </div>
          <div className='text'>
            <h3>Islamabad</h3>
            <h3>Capital</h3>
          </div>
        </div>
        <div className='card'>
          <div>
            <img className='img' src={url} alt="image" />
          </div>
          <div className='text'>
            <h3>Islamabad</h3>
            <h3>Capital</h3>
          </div>
        </div>
        <div className='card'>
          <div>
            <img className='img' src={url} alt="image" />
          </div>
          <div className='text'>
            <h3>Islamabad</h3>
            <h3>Capital</h3>
          </div>
        </div>
        <div className='card'>
          <div>
            <img className='img' src={url} alt="image" />
          </div>
          <div className='text'>
            <h3>Islamabad</h3>
            <h3>Capital</h3>
          </div>
        </div>



      </div>


    </>
  )
}
export default External;
