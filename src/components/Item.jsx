import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,img,title,price}) => {
  
  return (

    <div className='card'>
      
        <div className='card__img'>
          <img className='card__img__prop' src={img} alt="img" />
        </div>

        <div className='card__title'>{title}</div>

        <div className='card__price'>
          <div>$</div>
          <div>{price}</div>          
        </div>

        <Link to={`/item/${id}`}>
            <button className='card__btn'>Ver Detalle</button>
        </Link>

    </div>

  )
}

export default Item