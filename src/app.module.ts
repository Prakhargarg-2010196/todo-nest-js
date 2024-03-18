import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';

@Module({
  imports: [TodosModule],
  controllers: [TodosController],
  providers: [TodosService],
})
export class AppModule {}
