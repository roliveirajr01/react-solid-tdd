import { faker } from '@faker-js/faker/.'
import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockResolvedValue({
    data: {
      foo: faker.lorem.word(),
      count: faker.number.int({ min: 1, max: 100 })
    },
    status: faker.number.int({ min: 200, max: 501 })
  })

  return mockedAxios
}
