import React, { Component } from 'react'
import {observer} from 'mobx-react'
import todoStore from './TodoStore'

@observer
export default class TodoFooter extends Component {
  render() {
    return (
      <div>
        <hr />
        <div>Completed Todo count: {todoStore.completedTodoCount}</div>
        <div>Total Todo count: {todoStore.totalTodoCount}</div>
      </div>
    )
  }
}
