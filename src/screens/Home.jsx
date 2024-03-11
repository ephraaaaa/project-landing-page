import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faFacebookMessenger} from "@fortawesome/free-brands-svg-icons"



function LinkIcons(props){
    return <li className="m-2 md:text-3xl md:m-5"><FontAwesomeIcon icon={props.linkIcon}/></li>
}

function Item(props){
    return <li className="mr-2">{props.itemName}</li>
}

function Home(){
    return(
    <div className='text-secondary'>
      <div className='flex flex-col justify-center items-center h-screen'>
            <div className="ml-1 w-3/4 h-16 md:h-28 lg:h-40 xl:h-auto">
                <img className="w-full h-full object-cover" src="/banner.png" alt="ephraim john" />
            </div>
            <ul className="flex ml-5">
                <LinkIcons linkIcon={faGithub}></LinkIcons>
                <LinkIcons linkIcon={faEnvelope}></LinkIcons>
                <LinkIcons linkIcon={faFacebookMessenger}></LinkIcons>
            </ul>
      </div>
    </div>
    )
}

export default Home






/*
    <div>
        <ul className='text-xs flex justify-end ml-10'>
            <Item itemName="HOME"></Item>
            <Item itemName="PROJECTS"></Item>
            <Item itemName="CONTACT"></Item>
        </ul>
    </div>  
*/