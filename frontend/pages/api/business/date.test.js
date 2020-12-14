import { default as handler } from './date'
import { createRequest, createResponse } from 'node-mocks-http'

describe("API/Business", () => {
  it('should compare dates', () => {
    const mock = {
      req: createRequest(),
      res: createResponse()
    }

    handler(mock.req, mock.res);

    expect(mock.res.statusCode).toEqual(200)
  })
})