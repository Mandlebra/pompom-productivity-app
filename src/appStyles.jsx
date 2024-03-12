import styled from 'styled-components';

export const Stopwatch = styled.main`

    background: #282846;
    width: 70%;
    margin: auto;
border-radius: 13px;
    margin-top: 50px;
    height: 380px;

    width:450px;
  max-width:93%;
    align-items: center;
    justify-content: center;
  /* margin:auto; */
  /* height:50px; */
  /* background:red; */
    /* background: linear-gradient(90deg, #FFADAD, #FFD6A5 35%, #CAFFBF 100%); */
    /* 
    color palettes
#0d0c1d
#474973
#959cd0
#e9d1e2
#dadada
#c974c8


#f1dac4 // #a69cac // #474973 // #161b33 // #0d0c1d

 #6e7f80

        #536872
        #708090
        #536878	
        #36454f
    #FFADAD
    #FFD6A5
    #FDFFB6
    #CAFFBF

    #6e7f80
    #536872
    #708090
    #536878	
    #36454f
    */
    /* border-radius: 3px; */
    /* border: 2px solid gray; */
    /* margin: 5%; */
    /* padding: 10%; */
    /* min-width: 500px;*/
    /* max-width: 500px;  */
    /* display: flex; */
    /* flex-direction: column; */
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
    padding-top: 25px;
    /* max-width: 1000px; */
    /* height: 100%; */
    /* height : 100%; */
`;

export const ModButton = styled.button`
    color: #dadada;
    font-family: Courier  ;
    border-color: #dadada;
    /* padding: 5px; */
    margin: 4px;
    /* width: 5em; */
    height: 3em;
    /* align-items: censter; */
    /* text-align: center; */
    /* justify-content: center; */

    /* background: #CAFFBF; */
    border-radius: 3px;
    /* border-color: #CAFFBF; */
    /* border-color: white; */
    background-color: #282846;
    /* height: 100%; */
    /* margin: auto; */
    /* padding: auto; */
    &:hover{
            filter: brightness(100%);
        }
    &:active{
        filter: brightness(95%);
        color: #d0d0d0;
    }
`;

export const BackImg = styled.img`
object-fit: contain;
  width:100%; 
  height:100%;
  filter: brightness(0) invert(1);
    
`;

export const ModButtonBP = styled(ModButton)`
    background-color: #959cd0;
    color: #0d0c1d;
    border-color: #959cd0;
    border-radius: 0;
    font-weight: bold;
font-size: 16px;
height: 50px;
    border: none;
    /* border-color: #708090; */
    &:hover{
        filter: brightness(90%);
    }
    &:active{
        filter: brightness(80%);
        color: #0d0c1d;
    }
    /* &:focus{

    filter: brightness(80%);
} */
`;
export const BackButton = styled(ModButton)`
    margin: 10px;
    width:9%; 
    height:9%;
    /* background-color: #536878; */
    border-radius:30%;
    border: none;
    float: left;

    &:active{
        background: none;

        filter: brightness(50%);
    }
`;

//for mod menu buttons
export const ModButton0 = styled(ModButton)`
    /* border-color: #708090; */
    border-width: 3px;
    border-radius: 13px;
    /* font-weight: bold; */
    width: 200px;
    font-size: 16px;
    /* &:focus{
        filter: brightness(100%);
    } */
`;


export const ModButtonControl = styled(ModButton)`
/* border: none; */
/* border-color: grey; */
border-width: 3px;
border-radius: 13px;
/* border-color: #708090; */
background-color: #282846;
width: 250px;
height: 150px;
/* font-weight: bold; */
font-size:200%;
/* background: #FFADAD; */
/* border-color: white;  */
/* border-radius: 3px; */
/* &:focus{
    filter: brightness(100%);
} */
`;

export const Naviga = styled.nav`
/* position: fixed;
top: 0;
left: 0;  */
border-top-left-radius: 13px;
border-top-right-radius: 13px;
width: 100%;
//transparent background
    /* background: rgba(0,0,0,0); */
background: #959cd0;
/* border-color: white;  */
/* border-radius: 3px; */
`;


export const Navigado = styled.nav`
/* border-bottom: 1px solid black; */
/* color: f1dac4; */
align-items: center;
display: flex;
margin: auto;
justify-content: space-around;

height: 50px;
width: 80%;

`;
export const TopNavStyle = styled.nav`
/* border-bottom: 1px solid black; */
position: fixed;
top: 0;
left: 0;
/* color: white; */
background-color: #536878;
align-items: center;
/* text-align: left; */
display: flex;
margin: auto;
padding-left: 50px;
justify-content: left;
box-shadow: 2px 2px 10px -5px black;

height: 50px;
width: 100%;

`;

export const WorkToPlay = styled.section`

/* align-items: center; */
width: 100%;
display: flex;
margin: auto;
justify-content: center;
margin-top: 20px;

`;
