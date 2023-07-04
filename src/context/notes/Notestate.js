import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "64a1c113cfd8e541774524dc",
          "user": "64a1af2894640cbc0df124e3",
          "title": "My title 3",
          "description": "Hey it's me divya",
          "tag": "public",
          "date": "2023-07-02T18:25:23.080Z",
          "__v": 0
        },
        {
          "_id": "64a3bf0be15f02ca0f95c5f2",
          "user": "64a1af2894640cbc0df124e3",
          "title": "My title 3",
          "description": "Example note",
          "tag": "public",
          "date": "2023-07-04T06:41:15.062Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial);
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState