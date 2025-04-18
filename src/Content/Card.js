import React from 'react'

function Card(props) {
  return (
    <div>
        <div className="product">
            <div className="text">
                <div className="p-name"><a href="item.html">{props.name}</a></div>
            </div>
            <div className="p-img">
                <img src={props.img} width={200} height={200}  alt='sa'/>
            </div>
            <div className="text">
                <div className="p-cat">{props.category}</div>
                <div className="p-price">{props.price}</div>
                <input type="button" className="button" name="add" defaultValue="Add to cart" />
            </div>
            <div className="clear" />
        </div>
    </div>
  )
}

export default Card