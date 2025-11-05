import { useState } from "react";
import "./App.css";
import MenuBoutique from "./component/MenuBoutique/MenuBoutique";
import DisplayArticle from "./component/DisplayArticle/DisplayArticle";
import articles from "./Services/catalogue.service";
import BoutiqueContext from "./Context/BoutiqueContext";

function App() {
  const [catalogue, setCatalogue] = useState(articles);
  const [cart, setCart] =useState([])
  const addCart = (id) => {
    if(catalogue[id].qte>0){
      console.log("addcart " + id);
      const catalogueTmp = catalogue.map((value, index) => {
        if (index === id) {
          value.qte--
        }
        return value;
      });
      console.log(catalogueTmp[id]);
      setCatalogue(catalogueTmp)
    }
  }
  return (
    <BoutiqueContext.Provider value={{ catalogue,cart, addCart: addCart }}>
    <header>
      <MenuBoutique />
    </header>
    <main>
      <DisplayArticle catalogue={catalogue}></DisplayArticle>
    </main>
    <footer></footer>
  </BoutiqueContext.Provider>
);
};

export default App;
