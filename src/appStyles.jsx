import styled from 'styled-components';

export const Stopwatch = styled.main`

    background: #FFADAD;
    width: 70%;
    margin: auto;
    padding-top: 50px;
    /* background: linear-gradient(90deg, #FFADAD, #FFD6A5 35%, #CAFFBF 100%); */
    /* 
    color palette
    FFADAD
    FFD6A5
    FDFFB6
    CAFFBF
    */
    /* border-radius: 3px; */
    /* border: 2px solid gray; */
    /* margin: 5%; */
    /* padding: 10%; */
    /* min-width: 500px;*/
    /* max-width: 500px;  */
    /* display: flex; */
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
`;

export const ModBox = styled.aside`
/* background-color: pink; */
width: 35%;
/* height: 5px;   */
/* max-width: 500px; */
/* justify-content: space-between; */
    display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  
  /* grid-auto-flow: column; */
    /* margin-bottom: 20px; */
    /* flex-direction: row; */
     align-items: center;
    justify-content: center;
    margin: auto; 
    /* max-width: 1000px; */
    /* height: 100%; */
    /* height : 100%; */
`;

export const ModButton = styled.button`

font-family: Courier  ;
/* padding: 5px; */
margin: 5px;
width: 5em;
height: 3em;
/* align-items: censter; */
/* text-align: center; */
/* justify-content: center; */

/* background: #CAFFBF; */
border-radius: 3px;
/* border-color: #CAFFBF; */
border-color: white;
background: white;
/* height: 100%; */
/* margin: auto; */
/* padding: auto; */
&:focus{
    filter: brightness(90%);
}
`;

export const ModButton0 = styled(ModButton)`
    border-color: grey;
    border-width: 3px;
    border-radius: 13px;
    font-weight: bold;
    width: 200px;
    font-size: 16px;
    &:focus{
        filter: brightness(100%);
    }
`;


export const ModButtonControl = styled(ModButton)`
/* border: none; */
border-color: grey;
border-width: 3px;
border-radius: 13px;
width: 250px;
height: 150px;
font-weight: bold;
font-size: 58px;
/* background: #FFADAD; */
/* border-color: white;  */
/* border-radius: 3px; */
&:focus{
    filter: brightness(100%);
}
`;

export const Naviga = styled.nav`
position: fixed;
top: 0;
left: 0; 
width: 100%;
//transparent background
    /* background: rgba(0,0,0,0); */
background: white;
/* border-color: white;  */
/* border-radius: 3px; */
`;


export const Navigado = styled.nav`
border-bottom: 1px solid black;

align-items: center;
display: flex;
margin: auto;
justify-content: space-around;

height: 50px;
width: 70%;

`;

export const WorkToPlay = styled.section`

/* align-items: center; */
width: 100%;
display: flex;
margin: auto;
justify-content: center;
margin-top: 10px;

`;
