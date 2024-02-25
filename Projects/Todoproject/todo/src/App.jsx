import { useState } from 'react'
import Navbar from './Components/Navbar'
import Input from './Components/Input'
import Todolist from './Components/Todolist'

function App() {

  const initialtodlist = [
    {
      task: 'Go to school',
      date: '12/02/2023'
    },
    {
      task: 'Visit Europe',
      date: '21/08/2022'
    },
  ]

  const [value, setvalue] = useState(initialtodlist)


  // This Functions Add item in TODOLIST
  const HandletodoItem = (Task, Date) => {
    const newdata = [...value,
    { task: Task, date: Date }];
    setvalue(newdata)

  }



  // This Functions Delete item in TODOLIST
  const HandleDelete = (Item)=>{
    const taskforsdelitem = value.filter((i)=> i.task !== Item)
    setvalue(taskforsdelitem)
  }


  return (
    <>
      <Navbar />
      <center><h1>TODO APP</h1></center>
      <Input data={HandletodoItem} />
      {value.length === 0 && <p>Enjoy Your Day</p>}
      <Todolist lstrender={value} deletehadlebtn={HandleDelete} />
    </>
  )
}

export default App
