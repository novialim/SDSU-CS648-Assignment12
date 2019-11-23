import React, { Component } from 'react'
import ProductRow from './ProductRow'
import Table from 'react-bootstrap/Table'

class ProductTable extends Component {
  convertObjToArray = obj => {
    let productsArray = Object.keys(obj).map(pid => obj[pid])
    return productsArray
  }

  renderTable = (productArray, filterText) => {
    let rows = []
    let filterTextLowerCase = filterText.toLowerCase()
    productArray.forEach((product, index) => {
      if (product.name.toLowerCase().indexOf(filterTextLowerCase) === -1) {
        return
      }
      rows.push(<ProductRow key={index} index={index} onDestroy={this.handleDestroy} product={product} />)
    })
    return rows
  }

  handleDestroy = id => {
    this.props.onDestroy(id)
  }

  render() {
    const { products, filterText } = this.props
    return (
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{this.renderTable(this.convertObjToArray(products), filterText)}</tbody>
      </Table>
    )
  }
}

export default ProductTable
