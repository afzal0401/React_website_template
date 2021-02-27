/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Card = ({ title="Default name",
                ButtonName = "Default Button name",
                CardText="Default card text goes here",
                imageUrl="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} ) =>{
  return(
          <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{CardText}</p>
              <a href="#" className="btn btn-success">{ButtonName}</a>
            </div>
          </div>
  )
}

export default Card