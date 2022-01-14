

/*function App() {
  const [searchSymbol, setSearchSymbol] = useState('');
  const [stockName, setStockName] = useState();
  const [stockPrice, setStockPrice] = useState();
  const [buyValue, setBuyValue] = useState('');

  const updateSearchSymbol = async (ev) => {
    setSearchSymbol(ev.currentTarget.value)
  };

  const searchStock = async () =>{
    console.log(' i was here')
    console.log(`http://localhost:3005/api/search/${searchSymbol}`)
    let res = await fetch(`http://localhost:3005/api/search/${searchSymbol}`)
    let data = await res.json()
    console.log(data)
    // setStockName(searchSymbol)
    // setStockPrice(res.data.price)
    // setSearchSymbol('')
    // console.log(data)

  };
  const buyStock = async ()=> {
    let res = await fetch('http://localhost:3005/api/portfolio',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({buyValue, stockName, stockPrice})
    })
    return res.json();
  };

  return (
    <div>
      <div className={'grid grid-cols-12'}>

        <div className={'col-span-12 bg-gray-200 h-16 p-3'}>
            <h1 className={'text-xl font-bold text-center'}>Stock App</h1>
        </div>

        <div className={'col-span-7 bg-gray-300 h-96 p-3'}>

          <div className={'flex'}>
            <input type="search" 
            value = {searchSymbol}
            onChange = {updateSearchSymbol}
            className={'border w-1/2 border-gray-400 p-2 rounded-full'} 
            placeholder="Search..."/>
          
            <button onClick={searchStock} className={'bg-gray-500 text-white ml-12 px-4 rounded-md'}>Search</button>
          </div>

            <div className={'flex mt-8 ml-2 gap-24'}>
              <h1 className={'text-3xl'}>{stockName}</h1>
              <h2 className={'text-3xl'}>${stockPrice}</h2>

              <input type = 'text' value= {buyValue} onChange = {(event)=> setBuyValue(event.currentTarget.value)} className={'border'}/>
              <button onClick = {buyStock} className={'bg-blue-500 px-4 rounded-md'}>Buy</button>
              <button className={'bg-red-500 px-4 rounded-md'}>Sell</button>

            </div>
        </div>
  
        <div className={'col-span-5 bg-gray-400 h-96 p-3'}>
          Portfolio
          
          <div className={'flex'}>
          <table className={'table-fixed'}>
          <thead>
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Buy/Sell</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>BHP</td>
            <td>50</td>
            <td>2000.00</td>
            <td className="text-center"><input type="checkbox"/></td>
          </tr>
          </tbody>

        </table>
          </div>
        
        </div>
        

        </div>
    </div>
  );
}

export default App; */
import './App.css';
import Search from "./search";
import Portfolio from "./portfolio";

function App() {
  return (
    <>

        <div className={'w-full p-5 bg-gray-300 border-b-2 border-gray-400'}>
            <h1 className={'text-xl font-bold text-center text-gray-800 tracking-wider uppercase'}>Stock App</h1>

        </div>

        <div className="grid grid-cols-2">
            <Search />
            <Portfolio />

        </div>


    </>
  );
}

export default App;




