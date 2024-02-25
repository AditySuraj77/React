import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)
  const [data, setdata] = useState([])

  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let fetch_data = await a.json()
    setdata(fetch_data)
    console.log(fetch_data);
  }


  useEffect(() => {
    fetchdata()
  }, [])





  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div className="cards" style={{padding:'10px', display:'flex', flexWrap:'wrap'}}>
        {data.map((c) => {

          return (
            <>
            <div key={c.id} className="card" style={{border:'2px solid black', 
                                                     width:'30%', 
                                                     margin:'10px',
                                                     padding:'10px'

                                                    }}>
              <h1 style={{fontSize:'20px', fontWeight:'bold'}}>{c.title}</h1>
              <p>{c.body}</p>
              <span>By: UserId: {c.userId}</span>
              </div>
            </>
          )

        })}
      </div>

    </>
  )
}

export default App
