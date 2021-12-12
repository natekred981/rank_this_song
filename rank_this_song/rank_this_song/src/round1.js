import React, { useState } from "react";
import  styled from 'styled-components';


let Competitor = styled.button`
overflow: hidden;
text-overflow: ellipsis;
margin: 1em;
white-space: normal;
background-color: white;
color: black;
padding: 5% 10%;
border-radius: 5%;
cursor: pointer;
grid-column-start: ${(props) => props.indexOfColumn};
grid-row-start: ${(props) => props.indexOfRow};
`;


const Main = styled.div`
grid-template-columns: ${(props) => props.mainIndexOfColumn};
grid-template-rows: ${(props) => props.mainIndexOfRow};
display: grid;
text-align: center;
  `;

  function Brack(props) {
    const [bracketType, setbracketType] = useState({
        numOfSeeds: 8,
        seedNum: [],
        isClicked: Array(14).fill(),
        newName: "",
        names: Array(14).fill(),
        class: "container",
        mainColumn: "20% 20% 20% 20% 20% 20%",
        //mainColumn: "15% 15% 15% 15% 15% 15%",
        column: [1, 1, 1, 1, 6, 6, 6, 6, 2, 2, 5, 5, 3, 4],
        row: [1, 3, 5, 7, 1, 3, 5, 7, 2, 6, 2, 6, 4, 4],
        match: [8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        mainRow: "15% 15% 15% 15% 15% 15% 15%"
    });

   props.songs.map((song,key) => {
            bracketType.names[key] = song
        }); 
    const bracketList = bracketType.names.map((text, key) => {
            return (
              <Competitor
                indexOfColumn={bracketType.column[key]}
                indexOfRow={bracketType.row[key]}
                key={key}
                onClick={(e) => handleClick(e, key, text)}
              >
                {bracketType.names[key]}
                   
              </Competitor>
            );
          });

          function handleClick(e, key, text) {
            let newArr = bracketType.names;
            if (text !== undefined) {
                if (key < 12){
                    newArr[bracketType.match[key]] = text;
                setbracketType(ev => ({  //this uses the spread operator return the state of the rest of the arguments
                    ...ev,
                    names : newArr,
                  }))
                }
                else {
                    sessionStorage.setItem("winner", text);
                }
                
            }
        };
    return (
      <Main
        mainIndexOfColumn={bracketType.mainColumn}
        mainIndexOfRow={bracketType.mainRow}
      >
        {bracketList}{" "}
      </Main>
      
    ); 
    }
export default Brack;