import React from 'react'

export default function Home(props) {
  return (
    <div className="card-group">
  <div className="card">
    <img src="https://wallpapercave.com/wp/wp9160759.jpg" className="card-img-top" alt="..."/>
    <div className="card-body"style={props.mode==='light'?{color:'black',backgroundColor:'white'}:{color:'white',backgroundColor:'gray'}}>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://wallpapercave.com/wp/wp9127446.jpg" className="card-img-top" alt="..."/>
    <div className="card-body"style={props.mode==='light'?{color:'black',backgroundColor:'white'}:{color:'white',backgroundColor:'gray'}}>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://wallpapercave.com/wp/wp9160786.jpg" className="card-img-top" alt="..."/>
    <div className="card-body"style={props.mode==='light'?{color:'black',backgroundColor:'white'}:{color:'white',backgroundColor:'gray'}}>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

  )
}
