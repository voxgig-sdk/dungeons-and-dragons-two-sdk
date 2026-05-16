-- DungeonsAndDragonsTwo SDK error

local DungeonsAndDragonsTwoError = {}
DungeonsAndDragonsTwoError.__index = DungeonsAndDragonsTwoError


function DungeonsAndDragonsTwoError.new(code, msg, ctx)
  local self = setmetatable({}, DungeonsAndDragonsTwoError)
  self.is_sdk_error = true
  self.sdk = "DungeonsAndDragonsTwo"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function DungeonsAndDragonsTwoError:error()
  return self.msg
end


function DungeonsAndDragonsTwoError:__tostring()
  return self.msg
end


return DungeonsAndDragonsTwoError
