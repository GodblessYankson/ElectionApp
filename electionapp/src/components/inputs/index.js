import React from 'react'

export const Input = (props) => {
  return (
    <div>
        <div className="mb-3">
      <label for= {props.id} className="form-label" >{props.title}</label>
      <input type= {props.type} className="form-control" name={props.name} id="exampleInputEmail1" aria-describedby="emailHelp" onChange= {props.onChange}/>
      
      {/* <div id= {props.name} className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    </div>
  )
}
export default Input;