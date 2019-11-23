import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const RESET_VALUES = { id: '', category: '', price: '', name: '' }

class ProductForm extends Component {
  state = { product: Object.assign({}, RESET_VALUES), errors: {} }

  handleSave = e => {
    this.props.onSave(this.state.product)
    this.setState({
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    })
    this.inputName.value = ''
    this.inputCategory.value = ''
    this.inputPrice.value = ''
    e.preventDefault() //Prevent form from triggering HTTP POST
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState(prevState => {
      prevState.product[name] = value
      return { product: prevState.product }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSave}>
        <h3 className="Form-container">Enter a new product</h3>
        <span>Name:</span>
        <InputGroup
          size="sm"
          className="mb-3 save-text-field"
          onChange={this.handleChange}
          value={this.state.product.name}>
          <FormControl
            name="name"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            ref={el => (this.inputName = el)}
          />
        </InputGroup>
        <span>Category:</span>
        <InputGroup
          size="sm"
          className="mb-3 save-text-field"
          onChange={this.handleChange}
          value={this.state.product.category}>
          <FormControl
            name="category"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            ref={el => (this.inputCategory = el)}
          />
        </InputGroup>
        <span>Price:</span>
        <InputGroup
          size="sm"
          className="mb-3 save-text-field"
          onChange={this.handleChange}
          value={this.state.product.price}>
          <FormControl
            name="price"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            ref={el => (this.inputPrice = el)}
          />
        </InputGroup>
        <Button type="submit">Save</Button>
      </form>
    )
  }
}

export default ProductForm
