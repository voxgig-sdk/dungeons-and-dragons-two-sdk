# DungeonsAndDragonsTwo SDK utility: make_context
require_relative '../core/context'
module DungeonsAndDragonsTwoUtilities
  MakeContext = ->(ctxmap, basectx) {
    DungeonsAndDragonsTwoContext.new(ctxmap, basectx)
  }
end
