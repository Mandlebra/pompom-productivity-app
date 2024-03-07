import styled from 'styled-components';

export const Stopwatch = styled.main`

    text-align: center;
    font-family: Courier  ;
    background: #FFADAD;
    background: linear-gradient(90deg, #FFADAD, #FFD6A5 35%, #CAFFBF 100%);
    /* 
    Arial (sans-serif)
Verdana (sans-serif)
Tahoma (sans-serif)
Trebuchet MS (sans-serif)
Times New Roman (serif)
Georgia (serif)
Garamond (serif)
Courier New (monospace)
Brush Script MT (cursive)

    FFADAD
    FFD6A5
    FDFFB6
    CAFFBF
    */
    /* border-radius: 3px; */
    border: 2px solid gray;
    /* margin: 5%; */
    /* padding: 10%; */
    /* min-width: 500px;*/
    /* max-width: 500px;  */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100%; */
`;

export const ModBox = styled.aside`
/* width: 100%;
height: 100%; */
max-width: 500px;
/* justify-content: space-between; */
    display: flex;
    margin-bottom: 20px;
    /* flex-direction: row; */
    align-items: center;
    /* justify-content: center; */
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


export const ModButtonControl = styled(ModButton)`

/* background: #FFADAD; */
/* border-color: white;  */
/* border-radius: 3px; */
`;
