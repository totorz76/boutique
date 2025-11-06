import { useState } from "react";
import "./App.css";
import MenuBoutique from "./component/MenuBoutique/MenuBoutique";
import DisplayArticle from "./component/DisplayArticle/DisplayArticle";
import articles from "./Services/catalogue.service";
import BoutiqueContext from "./Context/BoutiqueContext";
import Cart from "./component/Cart/Cart";

function App() {
  const [catalogue, setCatalogue] = useState(articles);
  const [cart, setCart] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);
  const addCart = (id) => {
    if (catalogue[id].qte > 0) {
      console.log("addcart " + id);
      const catalogueTmp = catalogue.map((value, index) => {
        if (index === id) {
          value.qte--;
        }
        return value;
      });
      console.log(catalogueTmp[id]);
      setCatalogue(catalogueTmp);
      // setCart([...cart, id]);
      let cartTmp;
      if (cart.length > 0) {
        let gotIt = false;
        cartTmp = cart.map((value, index) => {
          if (value.id === id) {
            value.qte++;
            gotIt = true;
          }
          return value;
        });
        if (!gotIt) cartTmp.push({ id: id, qte: 1 });
      } else {
        cartTmp = [{ id: id, qte: 1 }];
      }
      cartTmp.sort();
      setCart(cartTmp);
      console.log(cartTmp);
    }
  };
  // const removeCart = (id) => {
  //   if (catalogue[id].qte > 0) {
  //     console.log("removeCart " + id);
  //     const catalogueTmp = catalogue.map((value, index) => {
  //       if (index === id) {
  //         value.qte++;
  //       }
  //       return value;
  //     });
  //     console.log(catalogueTmp[id]);
  //     setCatalogue(catalogueTmp);
  //     // setCart([...cart, id]);
  //     let cartTmp;
  //     if (cart.length > 0) {
  //       let gotIt = false;
  //       cartTmp = cart.map((value, index) => {
  //         if (value.id === id) {
  //           value.qte--;
  //           gotIt = true;
  //         }
  //         return value;
  //       });
  //       cartTmp = cartTmp.filter((value) => value.qte > 0);
  //       setCart(cartTmp);
  //       console.log(cartTmp);
  //     }
  //   }
  // };
  const removeFromCart = (id) => {
    console.log("id remove : ", id)
    // add qte
    const catalogueTmp = catalogue.map((value, index) => {
      if (index === id) {
        value.qte++;
      }
      return value;
    })
    setCatalogue(catalogueTmp);
    // remove from cart
    // je crée un indice deleteIndex pour supprimer du tableau cartTmp l'entrée§µ
    // dont la qte === 1
    let deleteIndex = undefined;
    // je copie mon tableau cart dans un nouveau
    const cartTmp = cart.map((value,index)=>{
      // si l'entrée a supprimer existe dans mon tableau
      if(value.id === id){
        // si sa qte est superieur à 1
        if(value.qte > 1){
          // je la decremente
          value.qte--
        } else { // si elle est au moins egale a 1
          // je l'ajoute a mon deleteIndex en vue de la supprimer 
          // de cartTmp à la fin de ma boucle
          deleteIndex = index;
        }
      }
      return value;
    })
    // fin de boucle et suppression d'une entrée egale à 1 si elle existe
    if( deleteIndex !== undefined){
      cartTmp.splice(deleteIndex,1)
    }
    // set de mon tableau modifier dans cart
    setCart(cartTmp);
  }
  const removeAll = (id)=>{
    console.log("jshdgjhsqg",id)
    //let trouve = catalogue.find((value)=>value.id === id);
    let indexDeleteCart = cart.findIndex((value)=>value.id === id)
    //console.log(trouve.id,trouve.qte)
    console.log(indexDeleteCart)
    //traitement catalogue
    let qteTmp = cart[indexDeleteCart].qte;
    const catalogueTmp = catalogue.map((value,index)=>{
      if(value.id === id){
        value.qte += qteTmp;
      }
      return value
    });
    setCatalogue(catalogueTmp);
    //traitement cart
    const cartTmp = cart.map((value)=>{
      return value
    });
    cartTmp.splice(indexDeleteCart,1);
    setCart(cartTmp); 
  }
  const showHideCart =()=>{
    setDisplayCart(!displayCart)
  }
  return (
    <BoutiqueContext.Provider
      value={{ catalogue, cart, addCart: addCart, removeFromCart: removeFromCart, removeAll: removeAll, showHideCart:showHideCart }}
    >
      <header>
        <MenuBoutique />
      </header>
      <main>
        {displayCart && <Cart />}
        <DisplayArticle catalogue={catalogue}></DisplayArticle>
      </main>
      <footer></footer>
    </BoutiqueContext.Provider>
  );
}

export default App;
