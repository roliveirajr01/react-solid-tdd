import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { type HttpPostParams } from '@/datalayer/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()
const mockPostRequest = (): HttpPostParams<{ foo: string, count: number }> => ({
  url: faker.internet.url(),
  body: {
    foo: faker.lorem.word(),
    count: faker.number.int({ min: 1, max: 100 })
  }
})

describe('AxiosHttpClient', () => {
  test('Should call axios.post with correct URL and body', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})
