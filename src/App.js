import Cards from './Components/Cards.js';
import {luxury,sedan,suvs} from './Asset/Img/Icons.js'

function App() {

  const data = ([
    {
      id : 0,
      img : sedan,
      title : "Sendans",
      desc :"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      color:"primary-bright-orange"
    },
    {
        id : 1,
        img : suvs,
        title :"SUVs",
        desc :"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
        color :"primary-dark-cyan"
    },
    {
        id : 2,
        img :luxury,
        title:"Luxury",
        desc:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
        color:"primary-v-dark-cyan"
    }
  ])

  return (
    <>
        <main className='min-h-[100vh] border border-black font-reg text-neutral-v-light-gray flex justify-center items-center'>

         <div className="m-auto max-w-[960px] rounded-lg border overflow-hidden grid sm:grid-cols-3 mobile:m-4">
         {data.map(e =>{
            return (
                <Cards
                key = {e.id} 
                  {...e}
                />
            )
          })}
         </div>

        </main>
    </>
  );
}

export default App;
