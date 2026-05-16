# DungeonsAndDragonsTwo SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module DungeonsAndDragonsTwoFeatures
  def self.make_feature(name)
    case name
    when "base"
      DungeonsAndDragonsTwoBaseFeature.new
    when "test"
      DungeonsAndDragonsTwoTestFeature.new
    else
      DungeonsAndDragonsTwoBaseFeature.new
    end
  end
end
