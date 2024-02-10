import { Controller, Get, Query } from '@nestjs/common';
import { OpenaiService } from 'src/services/openai/openai.service';

@Controller('image-generation')

export class ImageGenerationController {
    @Get()
    async handleGet(@Query() query):Promise<any>{
        const response = await this.OpenAiService.generateImage(query.prompt);
        return response;
    }

    constructor(private OpenAiService: OpenaiService){}
}
