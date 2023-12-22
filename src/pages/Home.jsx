import React, {useContext} from 'react'
// import product context
import {ProductContext} from '../contexts/ProductContext.jsx'

const Home = () => {
  //get products from product context
  const { products } = useContext(ProductContext)
  // get only men's & women's clothing category
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  })
  return (
    <div>
      <section>
        <div className="container mx-auto">
          <div>
            {filteredProducts.map(product => (
              <div key={product.id}>
                <div>
                  <div>
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div>
                    <div>
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <h3>${product.price}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home