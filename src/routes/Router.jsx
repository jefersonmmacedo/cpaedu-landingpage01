import {Route, Routes, Navigate} from 'react-router-dom';
import { Candidates } from '../pages/Candidates/Candidates';
import { Draw } from '../pages/Draw/Draw';
import { DrawDetails } from '../pages/DrawDetails/DrawDetails';
import { Home } from "../pages/Home/home";
import { Promotion } from '../pages/Promotion/Promotion';

function Router () {
 
        return (
    
                <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sorteio" element={ <DrawDetails />} />
                <Route path="/promocoes" element={ <Promotion />} />
                <Route path="/sorteador" element={ <Draw />} />       
                <Route path="/inscritos" element={ <Candidates />} />             
                </Routes>
               
        )
    }
    
    export {Router}