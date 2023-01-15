import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiChopsticks, GiTacos} from "react-icons/gi";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
    return (
        <div className="container">
            <List>
            <Links to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </Links>
            <Links to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </Links>
            <Links to={'/cuisine/Mexican'}>
                <GiTacos />
                <h4>Mexican</h4>
            </Links>
            <Links to={'/cuisine/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </Links>
        </List>
        </div>
    )
}
const List = styled.div`
        margin: 2rem 0;
        display: flex;
        justify-content: center;
        text-align: center;
`;

const Links = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin-right: 1rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    cursor: pointer;

h4 {
    font-size: 0.8rem;
    color: #fff;
    margin-top: 0.5rem;
    @media(max-width: 767) {
        font-size: 0.5rem;
        font-weight: 600;
        margin: auto;
    }
}
svg {
    font-size: 1.5rem;
    color: #fff;
}
&.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
        color: #fff;
    }
    h4 {
        color: #fff;
    }
}

`

export default Category