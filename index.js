import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import {observer} from 'mobx-react'
import todoStore from './TodoStore'

@observer
export default class Todos extends React.Component {
  render() {
    return (
      <div className='container' style={{paddingTop: 50}}>
        <div className='row'>
          <div className='col-sm-12'>
            <TodoForm addTodo={todoStore.addTodo}/>
            <TodoList 
              todos={todoStore.todos} 
              changeStatus={this.changeStatus}
              deleteTodo={this.deleteTodo} />
            <TodoFooter />
          </div>
        </div>
      </div>
    )
  }
}

