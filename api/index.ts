import { FABRuntime } from '@fab/core'

export default function({ Router }: FABRuntime): void {
  Router.on(
    '/api/:route(.*)',
    async ({ params }) => new Response(JSON.stringify(params)),
  )
}
