
import './App.css';

function App() {
  return (
    <div>
      <div className={'grid grid-cols-12'}>

        <div className={'col-span-12 bg-gray-200 h-16 p-3'}>
            <h1 className={'text-xl font-bold text-center'}>Stock App</h1>
        </div>

        <div className={'col-span-7 bg-gray-300 h-96 p-3'}>

          <div className={'flex'}>
            <input type="search" 
            className={'border w-1/2 border-gray-400 p-2 rounded-full'} 
            placeholder="Search..."/>
          
            <button className={'bg-gray-500 text-white ml-12 px-4 rounded-md'}>Search</button>
          </div>

            <div className={'flex mt-8 ml-2 gap-24'}>
              <h1 className={'text-3xl'}>BHP - BHP Group Limited</h1>
              <button className={'bg-blue-500 px-4 rounded-md'}>Buy</button>
              <button className={'bg-red-500 px-4 rounded-md'}>Sell</button>

            </div>
        </div>
  
        <div className={'col-span-5 bg-gray-400 h-96 p-3'}>Box 2</div>

        </div>
    </div>
  );
}

export default App;
