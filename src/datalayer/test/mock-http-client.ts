import { type HttpPostParams, type HttpPostClient } from '@/datalayer/protocols/http/http-post-client'
import { type HttpResponse, HttpStatusCode } from '@/datalayer/protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
