# DungeonsAndDragonsTwo SDK utility: prepare_body
require_relative 'media'
module DungeonsAndDragonsTwoUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return DungeonsAndDragonsTwoUtilities.raw_body(ctx.reqdata) if DungeonsAndDragonsTwoUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
