# DungeonsAndDragonsTwo SDK exists test

require "minitest/autorun"
require_relative "../DungeonsAndDragonsTwo_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = DungeonsAndDragonsTwoSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
