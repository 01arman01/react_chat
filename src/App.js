import  react from 'react'
import s from "./App.module.css"
import Header from "./Components/Header/Header";
import SitBar from "./Components/SitBar/SitBar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {Route,Routes,} from 'react-router-dom'
import Dialogs from "./Components/Dialogs/Dialogs";
import Error from "./Components/error/Error";

function App() {
  return (
    <div className={s.App}>
        <Header/>
        <SitBar/>
        <div className={s.content}>
         <Routes>
             <Route path='/dialogs/*' element={<Dialogs/>}/>
             <Route path='/' element={<Profile/>}/>
         </Routes>


        </div>
        <Footer/>
    </div>
  );
}

export default App;
