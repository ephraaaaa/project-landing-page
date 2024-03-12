import React from "react";
import { Link } from "react-router-dom";

function NavItems(props){
    return <li className="text-secondary text-xs mr-2 hover:cursor-pointer"><Link to={props.linkTo}>{props.navItemsName}</Link></li>
}
function Navigation(){
    return (
        <nav className="top-0 sticky">
            <ul className="flex justify-end bg-primary w-full h-8 items-center">
               <NavItems linkTo={"/"} navItemsName="HOME"></NavItems>
               <NavItems linkTo={"/projects"} navItemsName="PROJECTS"></NavItems>
               <NavItems navItemsName="CONTACT"></NavItems>
            </ul>
        </nav>
    )
}

export default Navigation