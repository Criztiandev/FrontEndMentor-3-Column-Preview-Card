import {luxury,sedan,suvs} from './Asset/Img/Icons.js'

function App() {
  return (
    <>
        <main className='min-h-[100vh] border border-black font-reg text-neutral-v-light-gray flex justify-center items-center'>

         <div className="m-auto max-w-[960px] rounded-lg border overflow-hidden grid sm:grid-cols-3 mobile:m-4">
          
         <div className= "p-12 bg-primary-bright-orange">
              <img src={sedan} alt="sedan-icon" className='mb-8' />
              <h1 className='font-big-sholder font-bold text-3xl mb-8'>Sendans</h1>
              <p className='text-neutral-trans-white mb-8'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
              <button className="bg-white text-primary-bright-orange font-bold px-8 py-4 border-2 border-white rounded-full hover:bg-transparent hover:text-neutral-trans-white">Learn More</button>  
          </div>

         <div className= "p-12 bg-primary-dark-cyan">
              <img src={suvs} alt="sedan-icon" className='mb-8' />
              <h1 className='font-big-sholder font-bold text-3xl mb-8'>SUVs</h1>
              <p className='text-neutral-trans-white mb-8'>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
              <button className="bg-white text-primary-dark-cyan font-bold px-8 py-4 border-2 border-white rounded-full hover:bg-transparent hover:text-neutral-trans-white">Learn More</button>  
          </div>

          <div className= "p-12 bg-primary-v-dark-cyan">
              <img src={luxury} alt="sedan-icon" className='mb-8' />
              <h1 className='font-big-sholder font-bold text-3xl mb-8'>Luxury</h1>
              <p className='text-neutral-trans-white mb-8'>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
              <button className="bg-white text-primary-v-dark-cyan font-bold px-8 py-4 border-2 border-white rounded-full hover:bg-transparent hover:text-neutral-trans-white">Learn More</button>  
          </div>
         </div>

        </main>
    </>
  );
}

export default App;
