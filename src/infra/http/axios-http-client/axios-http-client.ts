import { type HttpPostParams } from '@/datalayer/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  async post (params: HttpPostParams<any>): Promise<void> {
    await axios(params.url)
  }
}
