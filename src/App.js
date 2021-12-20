import{useState} from'react';
import './App.css';
import Matris from './Matris';
import AddTable from './AddTable';
import GetAllMatris from './GetAllMatris';
function App() {
  const[tabloId,setTabloId]=useState(0);
  console.log(tabloId+"main");
  return (
    <div className="App">
      <header className="App-header">
      
      <AddTable />
      <GetAllMatris tabloId={tabloId} setTabloId={setTabloId} />
     {tabloId===0?null:<Matris tabloId={tabloId}/>} 
      </header>
    </div>
  );
}

export default App;
