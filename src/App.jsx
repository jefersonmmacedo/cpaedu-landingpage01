import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header/Header';
import { Company } from './components/Company/Company';
import './Global.css';
import { Depoiment } from './components/Depoiment/Depoiment';

function App() {
  return (
    <div >
    <Header />
    <Courses />
    <Company />
    <Depoiment />
    </div>
  );
}

export default App;