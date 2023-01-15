import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import  styled  from "styled-components";


function Popular() {
    const [popular, setPopular] = useState([])
    const getPopular = async () => {
        const check = localStorage.getItem('popular');
        if (check) {
            setPopular(JSON.parse(check));
        }
        else {
            const {data} = await 
            axios.get(`https://api.spoonacular.com/recipes/random?apiKey=36e8fccb0cf24b6cbd6ea63f85b8acf1&number=10`)
            localStorage.setItem('popular', JSON.stringify(data.recipes))
        setPopular(data.recipes);
        console.log(data.recipes);
        } 
    }
    useEffect(() => {
        getPopular()
    }, []);
    return (
        <div className="container">
                <Wrapper>
                    <h3>Popular Picks</h3>
                    <Splide options={{
                        perPage: 4 ,
                        breakpoints: {
                            0: {perPage: 1},
                            575: {perPage: 1},
                            767: {perPage: 2},
                            991: {perPage: 3},
                        },
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '3rem',
                    }}>
                        {popular.map((recipe) => {
                            return (
                                <SplideSlide key={recipe.id}>
                                    <Card>
                                        <Link to={'/recipeDetails/'+recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                        </Link>
                                    </Card>
                                </SplideSlide>
                            )
                        })}
                    </Splide>
                </Wrapper>
        </div>
    )
}
const Wrapper = styled.div`
    margin: 4rem 0;
`;
const Card = styled.div`
    min-height: 14rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        min-width: 270px;
        min-height: 270px;
        object-fit: cover;
        @media(max-width: 575px) {
            img {
                width: 100;
            }
        }
    }
    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
        font-weight: 600;
        font-size: 1rem;
        color: #fff;
        text-align: center;
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const Gradient = styled.div`
    z-index: 4;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
`
export default Popular