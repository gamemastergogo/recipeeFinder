import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import {Link,useParams} from "react-router-dom";


function Cuisine() {
  const[cuisine,setCuisine] = useState([]);
  
  let params = useParams();
  const getCuisine = async (name) =>{
    const data =await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=e902068f2f25457d8f607804a8d8f5f5&&cuisine=${name}`);
    const recipes = await data.json();

    setCuisine(recipes.results);
      
  };

  useEffect(()=>{
    getCuisine(params.type);
    console.log(params.type);

  },[params.type]);
  return(
        <Grid
          animate={{opacity:1}}
          initial={{opacity:0}}
          exit={{opacity:0}}
          transition={{duration: 1}}
        >
          {cuisine.map((item)=>{
            return(
              <card key={item.id}>
                <Link to={"/recipe/"+item.id}>
               <img src={item.image} alt="" />
               <h4>
                {item.title}
               </h4>
               </Link>
              </card>
            );
          })}
 </Grid>
  );
        }
const Grid = styled(motion.div)`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
grid-gap:3rem;

`;
const Card = styled(motion.div)`

img{
    width: 100%;
    border-radius: 2rem;
    flex-wrap:wrap;

}
a{
  text-decoration:none;
}
h4{
  text-align: center;
  padding: 1rem;
}
`;

export default Cuisine;