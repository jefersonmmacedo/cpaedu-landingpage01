import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header/Header';
import { Company } from './components/Company/Company';
import './Global.css';
import { Depoiment } from './components/Depoiment/Depoiment';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div >
    <Header />
    <Courses />
    <Company />
    <Depoiment />
    <Footer />
    </div>
  );
}

export default App;