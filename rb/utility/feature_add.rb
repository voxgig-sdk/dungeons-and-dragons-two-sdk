# DungeonsAndDragonsTwo SDK utility: feature_add
module DungeonsAndDragonsTwoUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
