import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './models/messages/messages.module';
import config from './models/orm-config';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
export default config;
