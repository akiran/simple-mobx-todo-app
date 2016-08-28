import React, { Component } from 'react'
import {observer} from 'mobx-react'
import todoStore from './TodoStore'

@observer
export default class Todo extends Component {
  render() {
    const {todo: {title, completed, id}, changeStatus, deleteTodo} = this.props
    return (
      <div>
        <input 
          type='checkbox' 
          checked={completed}
          onChange={() => todoStore.changeStatus(id)} />
        {title}
        <button onClick={() => todoStore.deleteTodo(id)}>X</button>
      </div>
    )
  }
}
