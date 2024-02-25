import React from 'react'
import { MdDelete } from "react-icons/md";


function Todolist({ lstrender, deletehadlebtn }) {
 
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Date</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      {lstrender.map((lst) =>
        <tbody>
          <tr>
            <>
              <td>{lst.task}</td>
              <td>{lst.date}</td>
              <td><button onClick={()=> deletehadlebtn(lst.task)}  type="button" class="btn btn-danger"><MdDelete/></button>
              </td>
            </>
          </tr>
        </tbody>
      )}
    </table>
  )
}

export default Todolist