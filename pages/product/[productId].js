import React from 'react'
import {useRouter} from 'next/router'


const  ProductItem= () => {
    const {
      query:{productId}
      } = useRouter() 

    return (
        <div>
          Esta es la pagina del producto,  {productId}
        </div>
    )
}

export default ProductItem
