import {NavLink, Switch, Route} from "react-router-dom";

const Nav = () => {
    return (
            <nav>
                <ul>
                    <li><NavLink to = '/'>Home</NavLink></li>
                    <li><NavLink to = '/animals'>Animals</NavLink></li>
                    <li><NavLink to = '/about'>About</NavLink></li>
                </ul>
            </nav>
    );
};

export default Nav;