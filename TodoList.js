import React, { Component } from 'react'
import Todo from './Todo'
import {observer} from 'mobx-react'

@observer
export default class TodoList extends Component {
  render() {
    var todoNodes = this.props.todos.map(function (todo) {
      return <Todo key={todo.id} todo={todo} />
    }.bind(this))
    return <div>{todoNodes}</div>
  }
}
