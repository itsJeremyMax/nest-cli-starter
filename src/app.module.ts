import { Module } from '@nestjs/common';

import { BasicCommand } from './commands/basic';

@Module({
  imports: [],
  controllers: [],
  providers: [BasicCommand],
})
export class AppModule {}
