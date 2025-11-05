import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BoutiqueContext from "../../Context/BoutiqueContext";
import "./Cards.css"

const style = {
  styleCard: { maxWidth: "100%", marginTop: ".5rem", marginRight: "auto", minHeight:"740" },
};

function Cards(props) {
  const boutiqueContext = React.useContext(BoutiqueContext)
  console.log(boutiqueContext);
  
  return (
    <div className="maCard">
      <Card sx={style.styleCard}>
        <CardMedia
          sx={{ height: 320, backgroundSize: "contain" }}
          image={props.bmd.url}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {props.bmd.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary"}}>
            {props.bmd.description}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Largeur : {props.bmd.largeur}km, Quantité : {props.bmd.qte}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", fontSize:"25px" }}>
            Prix : {props.bmd.price}€
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
          onClick={()=> boutiqueContext.addCart(props.bmd.id)} 
          disabled ={props.bmd.qte === 0 ? true : false} 
          className="cardBtn" 
          size="small" 
          sx={{fontWeight:"bold"}}>Ajouter au panier</Button>
          <Button
            className="cardBtn"
            size="small"
            sx={{fontWeight:"bold"}}>Détails</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
