package = "voxgig-sdk-dungeons-and-dragons-two"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/dungeons-and-dragons-two-sdk.git"
}
description = {
  summary = "DungeonsAndDragonsTwo SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["dungeons-and-dragons-two_sdk"] = "dungeons-and-dragons-two_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
