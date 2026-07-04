# Typed models for the DungeonsAndDragonsTwo SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Class(TypedDict, total=False):
    hit_die: int
    index: str
    name: str
    proficiency: list
    saving_throw: list
    url: str


class ClassLoadMatch(TypedDict):
    id: str


class ClassListMatch(TypedDict, total=False):
    hit_die: int
    index: str
    name: str
    proficiency: list
    saving_throw: list
    url: str


class Feature(TypedDict, total=False):
    desc: list
    index: str
    level: int
    name: str
    url: str


class FeatureLoadMatch(TypedDict):
    id: str


class FeatureListMatch(TypedDict, total=False):
    desc: list
    index: str
    level: int
    name: str
    url: str


class Monster(TypedDict, total=False):
    alignment: str
    armor_class: list
    challenge_rating: float
    charisma: int
    constitution: int
    dexterity: int
    hit_dice: str
    hit_point: int
    index: str
    intelligence: int
    name: str
    size: str
    speed: dict
    strength: int
    type: str
    url: str
    wisdom: int
    xp: int


class MonsterLoadMatch(TypedDict):
    id: str


class MonsterListMatch(TypedDict, total=False):
    alignment: str
    armor_class: list
    challenge_rating: float
    charisma: int
    constitution: int
    dexterity: int
    hit_dice: str
    hit_point: int
    index: str
    intelligence: int
    name: str
    size: str
    speed: dict
    strength: int
    type: str
    url: str
    wisdom: int
    xp: int


class Spell(TypedDict, total=False):
    casting_time: str
    component: list
    desc: list
    duration: str
    index: str
    level: int
    name: str
    range: str
    school: dict
    url: str


class SpellLoadMatch(TypedDict):
    id: str


class SpellListMatch(TypedDict, total=False):
    casting_time: str
    component: list
    desc: list
    duration: str
    index: str
    level: int
    name: str
    range: str
    school: dict
    url: str
