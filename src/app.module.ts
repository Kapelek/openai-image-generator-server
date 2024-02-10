import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageGenerationController } from './controllers/image-generation/image-generation.controller';
import { OpenaiService } from './services/openai/openai.service';

@Module({
  imports: [],
  controllers: [AppController, ImageGenerationController],
  providers: [AppService, OpenaiService],
})
export class AppModule {}
