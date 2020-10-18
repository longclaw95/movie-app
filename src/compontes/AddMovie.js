import React , {useState} from 'react'
import {Modal,Button, Form} from "react-bootstrap";

export default function AddMovie({onCreateMovie}) {
    const [show, setShow] = useState(false);
    const [values, setValues] = useState({posterUrl: '', title: '', rate: 0, description: ''});

    const onChange = (type, v) => {
      v = type === 'rate' ? parseInt(v) : v;
      setValues({...values, [type]: v})
    }

    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
              Add movie
            </Button>
       { show && 
        <form >
          <label for="posterUrl">posterUrl:</label>
          <input type="text" id="posterUrl" name="posterUrl" value={values.posterUrl} onChange={(e) => onChange('posterUrl', e.target.value)}/><br/>
          <label for="title">title:</label>
          <input type="text" id="title" name="title" value={values.title} onChange={(e) => onChange('title', e.target.value)}/><br/>
          <label for="rate">rate:</label>
          <input type="number" id="rate" name="rate" value={values.rate} onChange={(e) => onChange('rate', e.target.value)}/><br/>
          <label for="title">description:</label>
          <input type="text" id="description" name="description" value={values.description} onChange={(e) => onChange('description', e.target.value)}/><br/>
          {/* <input type="submit" value="Submit"> */}
          <Button variant="primary" onClick={() => onCreateMovie(values)} >
                    Submit
                  </Button>
        </form>
 }

        </div>
    )
}
