import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { TodoList } from '../todo/TodoList'
import { TodoMain } from '../todo/TodoMain'
import TodoTest  from '../todo/TodoTest'

interface Todos{
  id: number;
  text: string;
  done: boolean;
}

function findById(arr: Array<Todos>, idKey: string) : Todos | any {
  return arr.reduce((obj, entity) => ({
    ...obj,
    [entity[idKey]]: entity,
  }), {})
}

@Component({
  components: {
    TodoMain,
    TodoList,
    TodoTest
  }
})
export default class Todo extends Vue {

  id = 1
  todos: Array<Todos> = [
    {
      id: 1,
      text: '睡觉',
      done: true
    }
  ]
  render() {
    return (
      <div id="app">
        <div>
          <todo-test text='This is Typescript Demo'></todo-test>
        </div>
        <div class="todo-model">
          <todo-main onAdd={this.addTodo}></todo-main>
          <div>
            <todo-list todos={this.todos} onToogle={this.toogleTodo} onDelete={this.deleteTodo}></todo-list>
          </div>
        </div>
      </div>
    )
  }
  private getTodo(id) {
    return findById(this.todos, id)
  }
  private toogleTodo({id}) {
    this.getTodo('id')[id].done = !this.getTodo('id')[id].done
  }
  private deleteTodo({id}) {
    this.todos = this.todos.filter(item => item.id !== id)
  }
  private addTodo({text}) {
    this.id ++
    this.todos.push({
      id: this.id,
      text: text,
      done: false
    })
  }
}