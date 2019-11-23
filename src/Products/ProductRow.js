import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class ProductRow extends Component {
  destroy = () => {
    this.props.onDestroy(this.props.product.id)
  }

  render() {
    const { index, product } = this.props
    return (
      <tr key={index}>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td id={product.id}>
          <Button onClick={this.destroy}>Delete</Button>
        </td>
      </tr>
    )
  }
}

export default ProductRow
