import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

function Box1(props) {

  return (
    <>
    <div  className={` d-flex justify-content-center align-items-center mx-4 my-4  border border-${props.symbol===0?"secondary":props.symbol===1?"success":"info"} border-4  text-light rounded`} style={{height:50,width:50}} onClick={props.xo}>
     {props.symbol===0?"":props.symbol===1?<CloseIcon color="success"/>:<RadioButtonUncheckedIcon color="info"/>}

    </div>
    </>
  )
}

export default Box1