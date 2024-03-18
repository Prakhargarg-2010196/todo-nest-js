import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';

@Module({
  providers: [TodosService],
  controllers: [TodosController],
  exports: [TodosService], //now other modules that imports todo module in their imports[] also can utilise TodoService
})
export class TodosModule {}
