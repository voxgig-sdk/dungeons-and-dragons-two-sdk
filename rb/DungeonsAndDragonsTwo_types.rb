# frozen_string_literal: true

# Typed models for the DungeonsAndDragonsTwo SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Class entity data model.
#
# @!attribute [rw] hit_die
#   @return [Integer, nil]
#
# @!attribute [rw] index
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] proficiency
#   @return [Array, nil]
#
# @!attribute [rw] saving_throw
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Class = Struct.new(
  :hit_die,
  :index,
  :name,
  :proficiency,
  :saving_throw,
  :url,
  keyword_init: true
)

# Request payload for Class#load.
#
# @!attribute [rw] id
#   @return [String]
ClassLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Class#list.
#
# @!attribute [rw] hit_die
#   @return [Integer, nil]
#
# @!attribute [rw] index
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] proficiency
#   @return [Array, nil]
#
# @!attribute [rw] saving_throw
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
ClassListMatch = Struct.new(
  :hit_die,
  :index,
  :name,
  :proficiency,
  :saving_throw,
  :url,
  keyword_init: true
)

# Feature entity data model.
#
# @!attribute [rw] class
#   @return [Hash, nil]
#
# @!attribute [rw] desc
#   @return [Array, nil]
#
# @!attribute [rw] index
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Feature = Struct.new(
  :class,
  :desc,
  :index,
  :level,
  :name,
  :url,
  keyword_init: true
)

# Request payload for Feature#load.
#
# @!attribute [rw] id
#   @return [String]
FeatureLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Feature#list.
#
# @!attribute [rw] class
#   @return [Hash, nil]
#
# @!attribute [rw] desc
#   @return [Array, nil]
#
# @!attribute [rw] index
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
FeatureListMatch = Struct.new(
  :class,
  :desc,
  :index,
  :level,
  :name,
  :url,
  keyword_init: true
)

# Monster entity data model.
#
# @!attribute [rw] alignment
#   @return [String, nil]
#
# @!attribute [rw] armor_class
#   @return [Array, nil]
#
# @!attribute [rw] challenge_rating
#   @return [Float, nil]
#
# @!attribute [rw] charisma
#   @return [Integer, nil]
#
# @!attribute [rw] constitution
#   @return [Integer, nil]
#
# @!attribute [rw] dexterity
#   @return [Integer, nil]
#
# @!attribute [rw] hit_dice
#   @return [String, nil]
#
# @!attribute [rw] hit_point
#   @return [Integer, nil]
#
# @!attribute [rw] index
#   @return [String, nil]
#
# @!attribute [rw] intelligence
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [String, nil]
#
# @!attribute [rw] speed
#   @return [Hash, nil]
#
# @!attribute [rw] strength
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] wisdom
#   @return [Integer, nil]
#
# @!attribute [rw] xp
#   @return [Integer, nil]
Monster = Struct.new(
  :alignment,
  :armor_class,
  :challenge_rating,
  :charisma,
  :constitution,
  :dexterity,
  :hit_dice,
  :hit_point,
  :index,
  :intelligence,
  :name,
  :size,
  :speed,
  :strength,
  :type,
  :url,
  :wisdom,
  :xp,
  keyword_init: true
)

# Request payload for Monster#load.
#
# @!attribute [rw] id
#   @return [String]
MonsterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Monster#list.
#
# @!attribute [rw] alignment
#   @return [String, nil]
#
# @!attribute [rw] armor_class
#   @return [Array, nil]
#
# @!attribute [rw] challenge_rating
#   @return [Float, nil]
#
# @!attribute [rw] charisma
#   @return [Integer, nil]
#
# @!attribute [rw] constitution
#   @return [Integer, nil]
#
# @!attribute [rw] dexterity
#   @return [Integer, nil]
#
# @!attribute [rw] hit_dice
#   @return [String, nil]
#
# @!attribute [rw] hit_point
#   @return [Integer, nil]
#
# @!attribute [rw] index
#   @return [String, nil]
#
# @!attribute [rw] intelligence
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [String, nil]
#
# @!attribute [rw] speed
#   @return [Hash, nil]
#
# @!attribute [rw] strength
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] wisdom
#   @return [Integer, nil]
#
# @!attribute [rw] xp
#   @return [Integer, nil]
MonsterListMatch = Struct.new(
  :alignment,
  :armor_class,
  :challenge_rating,
  :charisma,
  :constitution,
  :dexterity,
  :hit_dice,
  :hit_point,
  :index,
  :intelligence,
  :name,
  :size,
  :speed,
  :strength,
  :type,
  :url,
  :wisdom,
  :xp,
  keyword_init: true
)

# Spell entity data model.
#
# @!attribute [rw] casting_time
#   @return [String, nil]
#
# @!attribute [rw] class
#   @return [Array, nil]
#
# @!attribute [rw] component
#   @return [Array, nil]
#
# @!attribute [rw] desc
#   @return [Array, nil]
#
# @!attribute [rw] duration
#   @return [String, nil]
#
# @!attribute [rw] index
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] range
#   @return [String, nil]
#
# @!attribute [rw] school
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Spell = Struct.new(
  :casting_time,
  :class,
  :component,
  :desc,
  :duration,
  :index,
  :level,
  :name,
  :range,
  :school,
  :url,
  keyword_init: true
)

# Request payload for Spell#load.
#
# @!attribute [rw] id
#   @return [String]
SpellLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Spell#list.
#
# @!attribute [rw] casting_time
#   @return [String, nil]
#
# @!attribute [rw] class
#   @return [Array, nil]
#
# @!attribute [rw] component
#   @return [Array, nil]
#
# @!attribute [rw] desc
#   @return [Array, nil]
#
# @!attribute [rw] duration
#   @return [String, nil]
#
# @!attribute [rw] index
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] range
#   @return [String, nil]
#
# @!attribute [rw] school
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
SpellListMatch = Struct.new(
  :casting_time,
  :class,
  :component,
  :desc,
  :duration,
  :index,
  :level,
  :name,
  :range,
  :school,
  :url,
  keyword_init: true
)

