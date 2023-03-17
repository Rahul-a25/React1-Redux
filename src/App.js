import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { ChangeDark } from './Actions/Info';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';


function App() {
  const changeThemeApp=useSelector((state)=>state.darkReducer)
  const dispatch=useDispatch()
  return (
    <div className="App" style={{
      backgroundColor: `${changeThemeApp ? "black" : "white"}`,
      color: `${changeThemeApp ? "rgb(127, 255, 212)" : "black"}`,
    }}>
      <p style={{textAlign:"start"}}>Geekster</p>
      <BrowserRouter>
      <Routes className="router">
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Service' element={<Service/>}/>
      </Routes>
      </BrowserRouter>
     <button style={{display:"flex",justifyContent:"flex-start",margin:"10px 0px"}} onClick={()=>dispatch(ChangeDark())}>Change The Theme</button>
     <p style={{textAlign:"start"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, aperiam. Esse molestias recusandae inventore iure beatae rem deserunt aliquid accusamus quidem, deleniti, vel dolorem blanditiis ipsam. Sequi, dicta omnis repellendus iusto praesentium, cupiditate sit tempore tempora provident quaerat ipsum eligendi veritatis id facilis, aliquam enim libero harum voluptatibus similique atque quod expedita numquam! Harum, impedit esse aspernatur molestias odio error corporis. Iusto facere atque iure ipsam dolore, quam adipisci quia sit neque ratione obcaecati voluptatibus aut perferendis corporis nobis sequi asperiores nulla inventore molestiae error dicta reprehenderit. Assumenda consectetur pariatur voluptas officiis sunt? Expedita, similique in maiores commodi quam ex.</p>
    </div>
  );
}

export default App;