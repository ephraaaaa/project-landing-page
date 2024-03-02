function NavItems(props){
    return (
        <li className="font-bold hover:bg-primary hover:rounded-xl hover:text-white p-2 hover:shadow-xl">
            {props.name}
        </li>
    )
}


function NavigationBar(){
    return (
        <nav>
        <ul className="flex justify-end text-xs text-primary">
            <NavItems name="Home"></NavItems>
            <NavItems name="Projects"></NavItems>
            <NavItems name="About"></NavItems>
        </ul>
    
    </nav>
    )
}

export default NavigationBar;