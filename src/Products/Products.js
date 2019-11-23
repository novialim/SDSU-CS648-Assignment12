import React, { Component } from 'react'
import Filter from './Filter'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'

let PRODUCTS = {
  '1': { id: 1, category: 'Music', price: '$459.99', name: 'Clarinet' },
  '2': { id: 2, category: 'Music', price: '$599.99', name: 'Bass Guitar' },
  '3': { id: 3, category: 'Music', price: '$699.99', name: 'Violin' },
  '4': { id: 4, category: 'Music', price: '$799.99', name: 'Cello' },
  '5': { id: 5, category: 'Music', price: '$8899.99', name: 'Baby Grand Piano' }
}

class Product extends Component {
  state = { filterText: '', products: PRODUCTS }

  handleFilter = debounce(filterInput => {
    this.setState(filterInput)
  }, 1000)

  handleSave = product => {
    if (!product.id) {
      product.id = new Date().getTime()
    }
    this.setState(prevState => {
      let products = prevState.products
      products[product.id] = product
      return { products }
    })
  }

  handleDestroy = productId => {
    this.setState(prevState => {
      let products = prevState.products
      delete products[productId]
      return { products }
    })
  }

  render() {
    return (
      <>
        <h1>My Inventory</h1>
        <Filter onFilter={this.handleFilter} />
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          onDestroy={this.handleDestroy}
        />
        <ProductForm onSave={this.handleSave} />
      </>
    )
  }
}

export default Product

function debounce(func, wait, immediate) {
  var timeout
  return function() {
    var context = this,
      args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
