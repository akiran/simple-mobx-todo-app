import {observable, computed} from 'mobx'
import uuid from 'node-uuid'

class TodoStore {
  @observable todos = [ 
    {title: 'Learn React', id: 1, completed: true},
    {title: 'Write react components', id: 2, completed: false}
  ]

  addTodo(title) {
    this.todos.push({
      title,
      id: uuid.v4(),
      completed: false
    })
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  changeStatus(id) {
    let index = this.todos.findIndex((todo) => todo.id === id)
    this.todos[index].completed = !this.todos[index].completed 
  }

  @computed get totalTodoCount() {
    return this.todos.length
  }

  @computed get completedTodoCount() {
    return this.todos.filter(todo => todo.completed).length
  }
}

const todoStore = new TodoStore()
export default todoStore