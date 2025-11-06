import React, { useContext } from "react";
import BoutiqueContext from "../../Context/BoutiqueContext";
import DeleteIcon from '@mui/icons-material/Delete';

function ArticleCart(props) {
  const boutiqueContext = useContext(BoutiqueContext);
  const values = boutiqueContext.catalogue[props.item.id];

  return (
    <div style={{ padding:"1.5rem",display: "flex", alignItems:"center", justifyContent:"space-between",
     width:"90vw", margin:"0 auto", outline:"solid 1px", borderRadius:"20px", marginTop:"1rem"}}>
      <div style={{ maxWidth: 50 }}>
        <img style={{width:"100%"}} src={values.url}></img>
      </div>
      <div>{values.name}</div>
      <div>{values.price}</div>
      <div onClick={()=>boutiqueContext.removeFromCart(props.item.id)}>-</div>
      <div>{props.item.qte}</div>
      <div onClick={()=>boutiqueContext.addCart(props.item.id)}>+</div>
      <div>Total : {props.item.qte * values.price}</div>
      <div><DeleteIcon onClick={()=>boutiqueContext.removeAll(props.item.id)}></DeleteIcon></div>
    </div>
  );
}

export default ArticleCart;
