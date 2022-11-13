import * as Styled from "./header.style";
import * as logo from "public/images/header/error.svg";


export function Header(){
    return(<Styled.HeaderWrapper>
        <Styled.StyledImage src={logo} alt="oi" />
    </Styled.HeaderWrapper>);
}