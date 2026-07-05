// Typed models for the DungeonsAndDragonsTwo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Class {
  hit_die?: number
  index?: string
  name?: string
  proficiency?: any[]
  saving_throw?: any[]
  url?: string
}

export interface ClassLoadMatch {
  id: string
}

export interface ClassListMatch {
  hit_die?: number
  index?: string
  name?: string
  proficiency?: any[]
  saving_throw?: any[]
  url?: string
}

export interface Feature {
  class?: Record<string, any>
  desc?: any[]
  index?: string
  level?: number
  name?: string
  url?: string
}

export interface FeatureLoadMatch {
  id: string
}

export interface FeatureListMatch {
  class?: Record<string, any>
  desc?: any[]
  index?: string
  level?: number
  name?: string
  url?: string
}

export interface Monster {
  alignment?: string
  armor_class?: any[]
  challenge_rating?: number
  charisma?: number
  constitution?: number
  dexterity?: number
  hit_dice?: string
  hit_point?: number
  index?: string
  intelligence?: number
  name?: string
  size?: string
  speed?: Record<string, any>
  strength?: number
  type?: string
  url?: string
  wisdom?: number
  xp?: number
}

export interface MonsterLoadMatch {
  id: string
}

export interface MonsterListMatch {
  alignment?: string
  armor_class?: any[]
  challenge_rating?: number
  charisma?: number
  constitution?: number
  dexterity?: number
  hit_dice?: string
  hit_point?: number
  index?: string
  intelligence?: number
  name?: string
  size?: string
  speed?: Record<string, any>
  strength?: number
  type?: string
  url?: string
  wisdom?: number
  xp?: number
}

export interface Spell {
  casting_time?: string
  class?: any[]
  component?: any[]
  desc?: any[]
  duration?: string
  index?: string
  level?: number
  name?: string
  range?: string
  school?: Record<string, any>
  url?: string
}

export interface SpellLoadMatch {
  id: string
}

export interface SpellListMatch {
  casting_time?: string
  class?: any[]
  component?: any[]
  desc?: any[]
  duration?: string
  index?: string
  level?: number
  name?: string
  range?: string
  school?: Record<string, any>
  url?: string
}

