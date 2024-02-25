import React from 'react'

function Cards() {
  return (
      <div class='container'>
        <div class="card d-flex " style={{ width: '18rem' }}>
          <img class="card-img-top" src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
  )
}

export default Cards;