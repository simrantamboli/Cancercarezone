import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  readonly token = 'AIzaSyDa57ehULPKorTZwLgy6WkuGVf_PdcKIqQ';
  readonly client = new ApiAiClient({accessToken: this.token});

  constructor() { }

  talk() {
    this.client.textRequest('Who are you?')
        .then(response => console.log(response))
  }
}
