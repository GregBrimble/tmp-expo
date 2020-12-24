import { FABRuntime } from '@fab/core'

export const handleRequest = async (): Promise<Response> =>
  new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  })

export default function ({ Router }: FABRuntime): void {
  Router.on('/hello', handleRequest)
}
