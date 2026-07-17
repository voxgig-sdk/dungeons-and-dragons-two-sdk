-- DungeonsAndDragonsTwo SDK exists test

local sdk = require("dungeons-and-dragons-two_sdk")

describe("DungeonsAndDragonsTwoSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
