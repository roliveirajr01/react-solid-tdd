import { type HttpPostParams, type HttpPostClient } from '@/datalayer/protocols/http/http-post-client'
import { type HttpResponse, HttpStatusCode } from '@/datalayer/protocols/http/http-response'

export class HttpPostClientSpy<_T, R> implements HttpPostClient<_T, R> {
  url?: string
  body?: _T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams<_T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
