import React from 'react'
import {observer} from 'mobx-react'
import todoStore from './TodoStore'

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.newTodoHandler = this.newTodoHandler.bind(this)
  }
  newTodoHandler(e) {
    if (e.key === 'Enter') {
      todoStore.addTodo(this.state.title)
      this.setState({title: ''})
    }
  }
  changeHandler(e) {
    this.setState({title: e.target.value})
  }
  render() {
    return (
      <input 
        className='form-control'
        type='text'
        value={this.state.title}
        onKeyDown={this.newTodoHandler} 
        onChange={this.changeHandler}/>
    )
  }
}
