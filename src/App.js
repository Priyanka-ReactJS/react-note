import React, { useState } from 'react';
import Cardcomp from './Cardcomp'
import NavbarComp from './navbar'
import Note from './note'


const App = () => {
  const [addItem, setAddItem] = useState([])
  const addNote = (cardvalue) => {
    setAddItem((prev) => {
      return [...prev, cardvalue]
      //console.log([cardvalue])
    })
    //console.log("additem...", cardvalue)
  }
  const deleteNote = (id) => {
    console.log("delete");
    setAddItem((oldList) => {
      return oldList.filter((arrElem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <NavbarComp />
      <Cardcomp passNote={addNote} />
      { 
        addItem.map((val, index) => {
          return (<Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            onSelect={deleteNote}
          />)
        })
      } 
    </div>
  )
}

export default App;