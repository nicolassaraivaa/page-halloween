import styled, {keyframes} from "styled-components";
import backgroundButton from "./assets/btn-primary.svg"
import backgroundLink from "./assets/btn-secondary.svg"

const moveAbobora = keyframes`
    from{
        transform: translate(-5%, -5%) rotate(0deg);
    }

    to{
        transform: translate(0,0) rotate(15deg);
    }

`

export const Body = styled.body`
    background: linear-gradient(136.16deg, 
    rgba(91, 135, 75, 0.97) 12.91%, 
    rgba(12, 55, 32, 0.87) 87.68%);
    width: 100%;
    min-height: 100vh;
    padding: 12px 60px;
    ;

    @media (max-width: 900px) {
        padding: 12px 24px ;
        overflow-x: hidden;
    }

    

`
export const ImgAbobora = styled.img`
    width: 95%;
    position: absolute;
    bottom: -30px;
    left: -50px;
    animation: ${moveAbobora} 2s infinite alternate ease-in-out;

    @media (max-width: 1600px) {
        width: 110%;
    }
    
    @media (max-width: 1250px) {
        bottom: 45px;

    }

    @media (max-width: 700px) {
        bottom: 80px;
        width: 80%;
        left: 0;

    }

    @media (max-width: 390px) {
        bottom: 30px;

    }
    

`
 
export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 700px) {
        margin-bottom: 150px;
    }

    @media (max-height: 825px) {
        margin-bottom: 250px;
    }
`

export const ImgLogo = styled.img`

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 900px) {
        display: none;
    }
`


  
export const LinkNav = styled.a`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #f8f8fd;
    text-decoration: none;
    position: relative;

    &::after{
        content: "";
        width: 0%;
        height: 2px;
        bottom: -3px;
        left: 0px;
        position: absolute;
        background-color: #f8f8fd;
        transition: 0.3s ease;
    }

    &:hover::after{
        width: 100%;
    }

`

export const LinkNavSupport = styled.a`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #f8f8fd;
    text-decoration: none;
    position: relative;
    padding: 10px 20px;
    border: 1px solid #f8f8f0;
    border-radius: 41px;
`

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;

    
    @media (max-width: 700px) {

        flex-direction: column;
    }
`



export const DivLeft = styled.div`
    width: 50%;
    height: 450px;
    position: relative;

    
    @media (max-width: 700px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`



export const DivLeftInfo = styled.div`
    position: absolute;
    bottom: -75px;
    left: 120px;

    padding-right:20px;
    border-right: 2px solid #a7de93;
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 85px;

    &::after{
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #a7de93;
        position: absolute;
        right: -6px;
        top: -8px;
    }

    @media (max-width: 1600px) {
        left: 60px;

    }

    @media (max-width: 1220px) {
        bottom: -25px;

    }
`

export const Pfirst = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 180%;
    text-align: center;
    color: white;
`

export const PEnd = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: white;
`


export const DivRight = styled.div`
    margin-top:30px ;
    width: 420px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 700px) {
        width: 100%;
        text-align: center;
    }

    @media (max-width: 390px) {
        margin: 53px 0px 39px 0px;
    }
`
export const H2 = styled.h2`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.03em;
    color: #f8f8fd;

    @media (max-width: 700px) {
        margin-top: 20px;
    }

`

export const DivinfoRight = styled.div`
    display: flex;
    gap: 15px;
    flex-direction:column ;
`

export const Pright1 = styled.p`
    font-weight: 900;
    font-size: 68px;
    line-height: 114%;
    color: white; 

    @media (max-width: 390px) {
        font-size: 65px;

    }
`


export const Pright2 = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    color: white; 
    opacity: 0.8;

`
export const Divbuttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`
export const ButtonDivRitgh = styled.button`
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    color: #303056; 
    background: url(${backgroundButton});
    background-color: transparent;
    border: none;
    padding: 29px 43px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
        color: white;
    }

`

export const LinkRigth = styled.a`
    display: flex;
    gap: 12px;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;

    color: white;
    text-decoration: none;

    &:hover{
        opacity: 0.8;
    }
`

export const BntGhost = styled.button`
    font-weight:600;
    font-size: 15px;
    line-height: 22px;

    color: white;

    display: block;
    margin: 15px auto;
    background-color: transparent;
    border: none;
    background: url(${backgroundLink});
    padding: 34px 43px;
    cursor: pointer;

    &:hover{
        color: #303056;
    }
`
