-- Typed models for the DungeonsAndDragonsTwo SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Class
---@field hit_die? number
---@field index? string
---@field name? string
---@field proficiency? table
---@field saving_throw? table
---@field url? string

---@class ClassLoadMatch
---@field id string

---@class ClassListMatch
---@field hit_die? number
---@field index? string
---@field name? string
---@field proficiency? table
---@field saving_throw? table
---@field url? string

---@class Feature
---@field class? table
---@field desc? table
---@field index? string
---@field level? number
---@field name? string
---@field url? string

---@class FeatureLoadMatch
---@field id string

---@class FeatureListMatch
---@field class? table
---@field desc? table
---@field index? string
---@field level? number
---@field name? string
---@field url? string

---@class Monster
---@field alignment? string
---@field armor_class? table
---@field challenge_rating? number
---@field charisma? number
---@field constitution? number
---@field dexterity? number
---@field hit_dice? string
---@field hit_point? number
---@field index? string
---@field intelligence? number
---@field name? string
---@field size? string
---@field speed? table
---@field strength? number
---@field type? string
---@field url? string
---@field wisdom? number
---@field xp? number

---@class MonsterLoadMatch
---@field id string

---@class MonsterListMatch
---@field alignment? string
---@field armor_class? table
---@field challenge_rating? number
---@field charisma? number
---@field constitution? number
---@field dexterity? number
---@field hit_dice? string
---@field hit_point? number
---@field index? string
---@field intelligence? number
---@field name? string
---@field size? string
---@field speed? table
---@field strength? number
---@field type? string
---@field url? string
---@field wisdom? number
---@field xp? number

---@class Spell
---@field casting_time? string
---@field class? table
---@field component? table
---@field desc? table
---@field duration? string
---@field index? string
---@field level? number
---@field name? string
---@field range? string
---@field school? table
---@field url? string

---@class SpellLoadMatch
---@field id string

---@class SpellListMatch
---@field casting_time? string
---@field class? table
---@field component? table
---@field desc? table
---@field duration? string
---@field index? string
---@field level? number
---@field name? string
---@field range? string
---@field school? table
---@field url? string

local M = {}

return M
