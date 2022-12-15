import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import  styled  from "styled-components"
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'


function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
        const {data} = await 
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=36e8fccb0cf24b6cbd6ea63f85b8acf1&cuisine=${name}`);
        setCuisine(data.results)
    }
    useEffect (()=> {
        getCuisine(params.type)
        console.log(params.type);
    }, [params.type]);
    return (
        <div className="container">
            <Grid
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 1}}
                transition={{duration: 0.5}}
            >
            {cuisine.map((item) => (
                <Card key={item.id}>
                    <Link to={'/recipeDetails/'+item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            ))}
        </Grid>
        </div>
    )
}
const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
`;
const Card = styled.div`
    grid-column: span 3;
    margin: 1rem 0;
    @media(max-width: 1024px) {
        grid-column: span 4;
    }
    @media(max-width: 991px) {
        grid-column: span 6;
    }
    @media(max-width: 575px) {
        grid-column: span 12;
    }
    img {
        
        border-radius: 2rem;
        @media(max-width: 767px) {
            width: 100%;
            height: 100%;
        }
    }
    a {
        text-align: center;
        text-decoration: none;
    }
    h4 {
        text-align: center;
        text-decoration: none;
        
    }
`
export default Cuisine