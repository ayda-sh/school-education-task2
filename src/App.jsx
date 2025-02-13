import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { MainSec } from "./components/main-sec";
import { Nav } from "./components/nav";

import "./App.css"


function App() {
 return (
   <div>
     <Nav />
     <Header />
  
    <main>
    <MainSec />
    </main>
     <Footer />
   </div>
 );
}

export default App;
