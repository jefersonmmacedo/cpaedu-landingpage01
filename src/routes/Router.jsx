import {Route, Routes, Navigate} from 'react-router-dom';
import { DrawDetails } from '../pages/DrawDetails/DrawDetails';
import { Home } from "../pages/Home/home";
import { Promotion } from '../pages/Promotion/Promotion';

function Router () {
 
        return (
    
                <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sorteio/:course" element={ <DrawDetails />} />
                <Route path="/promocoes" element={ <Promotion />} />
                <Route path="/sorteador" element={ <DrawDetails />} />       
                <Route path="/inscritos" element={ <DrawDetails />} />             
                </Routes>
               
        )
    }
    
    export {Router}