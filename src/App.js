import './App.css';
import Header from './Components/Header/Header';
import Contact from './Components/Views/Contact/Contact';
import { Develop } from './Components/Views/Develop/Develop';
import { Footer } from './Components/Views/Footer/Footer';
import Principal from './Components/Views/Principal/Principal';
import { Projects } from './Components/Views/Projects/Projects';
import { Skills } from './Components/Views/Skills/Skills';
/* import Pr from './prueba';
 */

function App() {
  
  return (
    <div className="App">
     
    <Header/>
    <Principal/>
    <Develop/>
    <Skills/>
    <Projects/>
    <Contact />
    <Footer/>
  
    </div>
  );
}


 

export default App;
