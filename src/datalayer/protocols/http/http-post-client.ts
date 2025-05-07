import { type HttpResponse } from './http-response'

export type HttpPostParams<_T> = {
  url: string
  body?: _T
}

export interface HttpPostClient<_T, R> {
  post: (params: HttpPostParams<_T>) => Promise<HttpResponse<R>>
}

/*
  T = Type
  R = Response
*/
