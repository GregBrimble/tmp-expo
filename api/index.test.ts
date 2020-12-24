import { default as api } from './index'
import { FABRuntime, FabResponderArgs, FabRequestResponder } from '@fab/core'
import cookie from 'cookie'

const generateRequest = (...args: ConstructorParameters<typeof Request>) => {
  const request = new Request(args[0], args[1])
  try {
    new URL(request.url)
    return request
  } catch {
    const url = `https://fakehost${request.url}`
    return new Request(url, request)
  }
}

const generateResponderArgs = (request: Request): FabResponderArgs => {
  const cookies = cookie.parse(request.headers.get('Cookie') || '')
  return {
    context: {},
    cookies,
    request,
    settings: {},
    url: new URL(request.url),
  }
}

export const makeResponder = (
  runtime: FABRuntime,
): ((
  ...args: ConstructorParameters<typeof Request>
) => ReturnType<FabRequestResponder>) => {
  const pipeline = runtime.getPipeline()
  return async (...args: ConstructorParameters<typeof Request>) => {
    const request = generateRequest(...args)
    const responderArgs = generateResponderArgs(request)
    const responsePromises = pipeline.map((responder) =>
      responder(responderArgs),
    )
    // Promise.any doesn't exist apparently?
    return (await Promise.all(responsePromises)).find((response) => response)
  }
}

describe('API', () => {
  it('can be registered', async () => {
    const runtime = new FABRuntime({}, {}, { bundle_id: 'TEST-BUNDLE' })
    api(runtime)
    const responder = makeResponder(runtime)
    const response = (await responder('/hello')) as Response
    expect(response).toBeInstanceOf(Response)
    expect(response.ok).toBeTruthy()
    expect(response.headers.get('Content-Type')).toEqual('application/json')
    expect(await response.json()).toEqual({ success: true })
  })
})
