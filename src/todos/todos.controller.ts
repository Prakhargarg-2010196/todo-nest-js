import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
// create an interface for the DTO for transfer of data over the network
import { createTodoDTO } from './dto/create-todo.dto';
// create the todo interface for the todo service and generic todo
import { TodoInterface } from './interface/todo.interface';
@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {} // injecting the todo service we created for the business logic of the app
  // Create functions
  // create a single todo
  @Post('create')
  async create(@Body() todo: createTodoDTO[]) {
    return this.todoService.createTodo(todo);
  }

  // Read functions
  // get all the todos defined
  @Get('all')
  async findAll(): Promise<TodoInterface[]> {
    return this.todoService.findAllTodos();
  }
  // Get a single todo with id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TodoInterface> {
    const parsedID = parseInt(id);
    console.log('checking findbyId', typeof parsedID);
    return this.todoService.findTodoWithID(parsedID);
  }
  //Update a single todo with id
  @Put('update/:id')
  async updateOne(@Param('id') id: string, @Body() newTodoData: TodoInterface) {
    const parsedID = parseInt(id);
    this.todoService.updateTodo(parsedID, newTodoData);
  }
  //Delete a single todo with id
  @Delete('delete/:id')
  async deleteOne(@Param('id') id: string) {
    const parsedID = parseInt(id);
    this.todoService.deleteTodo(parsedID);
  }
  // Delete all todos
  @Delete('delete')
  async deleteAll() {
    this.todoService.deleteAllTodos();
  }
}
