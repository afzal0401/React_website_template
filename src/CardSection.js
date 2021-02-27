/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Card from "./Card"
const CardSection = () =>{
  return(
        <section className="contact bg-success ">
              <div className="container ">
                <h2 className="text-white">
                  We love new friends!
                </h2>
                <div className="row">
                  <div className="col-4">
                    <Card />
                  </div>
                  <div className="col-4">
                    <Card title="Begin a Day"
                      CardText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. quas voluptas beatae at fuga officiis odit rem provident nobis esse magni!"
                      imageUrl="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      ButtonName="Start you Day"
                    />
                  </div>
                  <div className="col-4">
                    <Card title="coffee day"
                      CardText="Grab a coffee and enjoy"
                      imageUrl="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      ButtonName="Order Coffee "
                    />
                  </div>
                </div>
              </div>
            </section>
  )
}

export default CardSection