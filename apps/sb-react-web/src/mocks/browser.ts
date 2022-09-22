import {setupWorker, rest} from 'msw'
import categories from './categories.json'

export const browser = [
  // handle GET /categories request
  rest.get('/api/sb/v1/widgets/categories/v1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(categories),
    )
  })
]

// setup worker from handlers and start it
export const worker = setupWorker(...browser)
