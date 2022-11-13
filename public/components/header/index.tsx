import * as Styled from "./header.style";
import logo from "public/images/header/error.svg";

export function Header(){
    return(<Styled.Header>
        <Styled.Logo src={logo}/>
    </Styled.Header>);
}