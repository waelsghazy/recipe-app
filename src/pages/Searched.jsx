import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import  styled  from "styled-components"

function Searched() {
    const [searched, setSearched] = useState([]);
    let params = useParams();
    const getSearched = async (name) => {
        const {data} = await 
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=36e8fccb0cf24b6cbd6ea63f85b8acf1&query=${name}`);
        setSearched(data.results)
    }
    useEffect (()=> {
        getSearched(params.search)
        // eslint-disable-next-line
    }, [params.search]);
    return (
        <div className="container">
            <Grid>
            {searched.map((item) => {
                return (
                    <Card key={item.id}>
                    <Link to={'/recipeDetails/'+item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                    </Card>
                )
            })}
        </Grid>
        </div>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 3rem;
`;
const Card = styled.div`
    grid-column: span 3;
    margin: 2.4rem 0;
    img {
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        
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
export default Searched