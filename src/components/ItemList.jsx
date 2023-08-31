import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {

  return (

    <>

        <div className='itemList'>

            {
                products.map((product)=>{

                return (

                    <Item
                    id={product.id}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    />
                    
                )

                })
            }

        </div>

    </>

  )

}

export default ItemList