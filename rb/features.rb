# DungeonsAndDragonsTwo SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module DungeonsAndDragonsTwoFeatures
  def self.make_feature(name)
    case name
    when "base"
      DungeonsAndDragonsTwoBaseFeature.new
    when "ratelimit"
      DungeonsAndDragonsTwoRatelimitFeature.new
    when "retry"
      DungeonsAndDragonsTwoRetryFeature.new
    when "test"
      DungeonsAndDragonsTwoTestFeature.new
    when "timeout"
      DungeonsAndDragonsTwoTimeoutFeature.new
    else
      DungeonsAndDragonsTwoBaseFeature.new
    end
  end
end
