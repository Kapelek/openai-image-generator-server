import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
    openAI = new OpenAI({apiKey: process.env.OPEN_AI_KEY});

    generateImage = async (prompt:string): Promise<any> =>{
        const response = await this.openAI.images.generate({model: "dall-e-2", prompt: prompt,  n: 1, size: "256x256", quality: "standard", response_format: "b64_json"});
        return response;
    }
    
}
