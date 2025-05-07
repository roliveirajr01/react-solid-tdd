import { type HttpPostParams, type HttpPostClient } from 'datalayer/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    await Promise.resolve()
  }
}
