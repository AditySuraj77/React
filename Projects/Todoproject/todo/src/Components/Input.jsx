import React from 'react'
import { useState,useRef } from 'react'
import { IoIosAddCircle } from "react-icons/io";

function Input({ data }) {

  // const [task, settask] = useState()
  // const [date, setdate] = useState()

  // const onchangetask = (event) => {
  //   let newtask = event.target.value
  //   settask(newtask)

  // }
  // const onchangedate = (event) => {
  //   let newdate = event.target.value
  //   setdate(newdate)

  // }


  // Using Useref hook to  change the value or take value and throw in list While using Useref hooks benefical is React Don't Repaint all page

  const taskvalue = useRef()
  const datevalue = useRef()



  const handleclickbutton = () => {
    const newtask = taskvalue.current.value;
    const newdate = datevalue.current.value;
    taskvalue.current.value = "";
    datevalue.current.value = "";
    ///data(task, date) via useState using
    data(newtask,newdate)
    // settask("") via useState using
    // setdate("") via useState using
    

  }
  return (
    <div class="row g-3 align-items-center d-flex justify-content-center">
      <div class="col-auto">
        <label for="inputPassword6" class="col-form-label">Task</label>
      </div>
      <div class="col-auto">
        <input ref={taskvalue}  type="text" id="inputPassword6" class="form-control" />
      </div>
      {/* More */}
      <div class="col-auto">
        <label for="inputPassword6" class="col-form-label">Date</label>
      </div>
      <div class="col-auto">
        <input ref={datevalue}  type="date" id="inputPassword6" class="form-control" />
      </div>
      {/*  */}
      <div class="col-auto">
        <button onClick={handleclickbutton} type="button" class="btn btn-primary"><IoIosAddCircle/></button>

      </div>
    </div>

  )
}

export default Input






// Below code using UseState For Changin value and Repaint all React Page

{/* <div class="row g-3 align-items-center d-flex justify-content-center">
      <div class="col-auto">
        <label for="inputPassword6" class="col-form-label">Task</label>
      </div>
      <div class="col-auto">
        <input value={task} onChange={onchangetask} type="text" id="inputPassword6" class="form-control" />
      </div>
      {/* More */}
    //   <div class="col-auto">
    //     <label for="inputPassword6" class="col-form-label">Date</label>
    //   </div>
    //   <div class="col-auto">
    //     <input value={date} onChange={onchangedate} type="date" id="inputPassword6" class="form-control" />
    //   </div>
    //   {/*  */}
    //   <div class="col-auto">
    //     <button onClick={handleclickbutton} type="button" class="btn btn-primary"><IoIosAddCircle/></button>

    //   </div>
    // </div> */}