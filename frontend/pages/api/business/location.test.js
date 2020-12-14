import { default as handler } from './location'
import { createRequest, createResponse } from 'node-mocks-http'


describe("API/Business", () => {
  it('should count location', () => {
    const mock = {
      req: createRequest(),
      res: createResponse()
    }

    handler(mock.req, mock.res);

    expect(mock.res.statusCode).toEqual(200)
  })
})