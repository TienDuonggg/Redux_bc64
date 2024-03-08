import React, { Component } from 'react'
import Form from './Form'
import { deleteItem, updateItem } from "./action";
export default class ExFormStudent extends Component {
  render() {
    return (
      <div>
        <Form deleteStudent={deleteItem} editStudent={updateItem}/>
      </div>
    )
  }
}
