import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function RecipeDetails() {
    const [activeButton, setActiveButton] = useState("instructions");
    const [arr, setArr] = useState([])
    const params = useParams();
    const [details, setDetails] = useState({});
        
    const getRecipeDetails = async () => {
    const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=36e8fccb0cf24b6cbd6ea63f85b8acf1`
    );
        setDetails(data);
        setArr(data.extendedIngredients)
    };
    useEffect(() => {
        getRecipeDetails();
        // eslint-disable-next-line
    }, [params.id]);
    return (
    <div className="container">
        <Wrapper>
        <div className="img">
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <div className="buttons">
            <Button
                className={activeButton === 'instructions' ? 'active' : ''}
                onClick={() => setActiveButton('instructions')}
            >
                Instructions
            </Button>
            <Button
                className={activeButton === 'ingredients' ? 'active' : ''}
                onClick={() => setActiveButton('ingredients')}
            >
                Ingredients
            </Button>
            </div>
            {activeButton === 'instructions' && (
                <div >
            <p dangerouslySetInnerHTML={{__html:details.summary}}></p>
            <p dangerouslySetInnerHTML={{__html:details.instructions}}></p>
            </div>
            )}
            {activeButton === 'ingredients' && (
                <ul>
                    {arr? arr.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    )) : ''}
                </ul>
            )}
        </Info>
    </Wrapper>
    </div>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin: 2rem 0;
    }
    p {
        margin: 1.4rem 0;
        line-height: 2rem;
        font-size: 1.2rem;
        text-align: left;
        word-break: break-all;
    }
    a {
        text-decoration: none;
        color: black;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
    .img{
        grid-column: span 6;
        @media(max-width: 1024px) {
            grid-column: span 12;
            img {
                width: 100%;
            }
        }
    }
`;
const Button = styled.button`
    color: #313131;
    background: white;
    padding: 1rem 2rem;
    border: 1px solid black;
    margin-right: 1rem;
    display: inline-block;
`;
const Info = styled.div`
    grid-column: span 6;
    @media(max-width: 1024px) {
        grid-column: span 12;
        
    }
`;

export default RecipeDetails;
