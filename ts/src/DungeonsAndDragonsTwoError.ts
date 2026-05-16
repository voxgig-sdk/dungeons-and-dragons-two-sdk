
import { Context } from './Context'


class DungeonsAndDragonsTwoError extends Error {

  isDungeonsAndDragonsTwoError = true

  sdk = 'DungeonsAndDragonsTwo'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  DungeonsAndDragonsTwoError
}

