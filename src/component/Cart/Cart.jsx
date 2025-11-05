import React, { useContext} from "react";
import BoutiqueContext from "../../Context/BoutiqueContext";
import ArticleCart from "../ArticleCart/ArticleCart"

const Cart = () => {
    const boutiqueContext = useContext(BoutiqueContext);
    if(boutiqueContext.cart.length){
        return(
            <div>
                {
                    boutiqueContext.cart.map((value, index)=><ArticleCart key={index} item={value}/>)
                }
            </div>
        )
    } else {
        return (
            <div>
                Aucun article dans votre Panier
            </div>
        )
    }
}
export default Cart