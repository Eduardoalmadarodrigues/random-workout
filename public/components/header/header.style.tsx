import React from "react";
import styled from "styled-components";
import Image from 'next/image';

export const HeaderWrapper = styled.div`
    display: flex ;
    width: 100%;
    height: 100px ;
    border: 1px solid black ;
    align-items: center ;
    padding-left: 15px ;
`;

export const StyledImage = styled(Image)`
  width: 70px;
  height: 70px ;
`;