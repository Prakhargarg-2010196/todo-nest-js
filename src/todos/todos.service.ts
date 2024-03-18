import { Injectable } from '@nestjs/common';
import { TodoInterface } from './interface/todo.interface';

@Injectable()
export class TodosService {
  private todoArray: TodoInterface[] = [];
  // The api uses this service function to add a new todo to the todoArray
  createTodo(todo: TodoInterface[]) {
    return this.todoArray.push(...todo);
  }
  // the api uses this service function to read all the todos in todoArray
  findAllTodos(): TodoInterface[] {
    return this.todoArray;
  }
  // the api uses this service function to read a single the todos in todoArray with id
  findTodoWithID(id: number): TodoInterface {
    // console.log(typeof id);
    // console.log(this.todoArray.find((todo) => todo.id === id));
    // console.log(this.todoArray);
    return this.todoArray.find((todo) => todo.id == id); // coming undefined idk why??

    // const foundTodo = this.todoArray.find((todo) => todo.id === id);
    // console.log(foundTodo);

    // return foundTodo;
  }
  // the api uses this service function to update a single todo in todoArray with id
  updateTodo(id: number, newTodo: TodoInterface) {
    const todoToUpdateIndex = this.todoArray.findIndex(
      (todo) => todo.id === id,
    );
    this.todoArray[todoToUpdateIndex] = newTodo;
  }
  // the api uses this service function to delete a single todo in todoArray with id
  deleteTodo(id: number) {
    const updatedArray = this.todoArray.filter((todo) => todo.id !== id);
    this.todoArray = [...updatedArray];
  }

  deleteAllTodos() {
    this.todoArray.length = 0;
    // also could be done as this.todoArray=[] if you're not referring to the array using other variable but the same variable.
  }
}
