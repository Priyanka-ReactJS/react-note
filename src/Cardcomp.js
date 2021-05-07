import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap'
import { ArrowRight } from 'react-bootstrap-icons';
import './App.css';


const Cardcomp = (prop) => {
  const [cardvalue ,setCardValue] = useState({
      title:"",
      content:"",
  })
  const [expand , setExpand] = useState(false)

  const InputEvent = (event) => {
    let {value,name} = event.target;

    setCardValue((prev) => {
        return {
            ...prev,
            [name]: value,
        }
    })
  }

  const addEvent = () => {
      if(cardvalue.title === "" && cardvalue.content === ""){
          alert("Please, Enter Note 📝")
      }else{
      console.log("cardvalue..",cardvalue.title)
      prop.passNote(cardvalue)
      setCardValue({title:"",
      content:"",})
      setExpand(false)

      }
  }
    const expandIt = () => {
        setExpand(true)
    }
    const BockToNormal = () => {
        setExpand(false)
    }
    return (
        <div onDoubleClick={BockToNormal}>
            <form  >

                <Modal.Dialog className="boxMe">   
                    { expand ?
                    <Modal.Header closeButton>
                        <input className="inputme" name="title" type="text" placeholder="title" value={cardvalue.title} onChange={InputEvent}/><br />
                    </Modal.Header> : null
                    }
                    <Modal.Body>
                        <textarea onClick={expandIt} className="textareaMe" rows="" name="content" column="" placeholder="write note here.." value={cardvalue.content} onChange={InputEvent}>
                        </textarea>
                    </Modal.Body>

                     { expand ?
                        <button type="button" class="btn btn-secondary buttonMe" onClick={addEvent}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                            </svg>
                        </button> : null
                     }
                </Modal.Dialog>
            </form>

        </div>
    )
}
export default Cardcomp;