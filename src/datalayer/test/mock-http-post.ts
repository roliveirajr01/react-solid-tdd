import { faker } from '@faker-js/faker/.'
import { type HttpPostParams } from '../protocols/http'

export const mockPostRequest = (): HttpPostParams<{ foo: string, count: number }> => ({
  url: faker.internet.url(),
  body: {
    foo: faker.lorem.word(),
    count: faker.number.int({ min: 1, max: 100 })
  }
})
