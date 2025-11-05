import { useState } from "react";
import "./App.css";
import MenuBoutique from "./component/MenuBoutique/MenuBoutique";
import DisplayArticle from "./component/DisplayArticle/DisplayArticle";
import articles from "./Services/catalogue.service";
import BoutiqueContext from "./Context/BoutiqueContext";
import Cart from "./component/Cart/Cart";

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
      // setCart([...cart, id]);
      let cartTmp;
      if (cart.length > 0) {
        let gotIt = false;
        cartTmp = cart.map((value, index) => {
          if (value.id === id) {
            value.qte++;
            gotIt = true
          }
          return value;
        })
        if(!gotIt)cartTmp.push({ id: id, qte: 1 })
      } else {
        cartTmp = [{ id: id, qte: 1 }]
      }
      cartTmp.sort()
      setCart(cartTmp);
      console.log(cartTmp);
    }
  }
  return (
    <BoutiqueContext.Provider value={{ catalogue,cart, addCart: addCart }}>
    <header>
      <MenuBoutique />
    </header>
    <main>
      <Cart></Cart>
      <DisplayArticle catalogue={catalogue}></DisplayArticle>
    </main>
    <footer></footer>
  </BoutiqueContext.Provider>
);
};

export default App;
