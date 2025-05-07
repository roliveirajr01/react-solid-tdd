import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with corret URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})

/*
  Sut (System Under Test) = Objeto testado da vez
  Spy: Duble de test (test double) -> coloca valor fake na resposta dos metodos, e cria variaveis auxiliares para capturar valores e fazer comparações
*/
