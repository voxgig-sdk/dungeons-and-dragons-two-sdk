# Typed models for the DungeonsAndDragonsTwo SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Class:
    hit_die: Optional[int] = None
    index: Optional[str] = None
    name: Optional[str] = None
    proficiency: Optional[list] = None
    saving_throw: Optional[list] = None
    url: Optional[str] = None


@dataclass
class ClassLoadMatch:
    id: str


@dataclass
class ClassListMatch:
    hit_die: Optional[int] = None
    index: Optional[str] = None
    name: Optional[str] = None
    proficiency: Optional[list] = None
    saving_throw: Optional[list] = None
    url: Optional[str] = None


@dataclass
class Feature:
    desc: Optional[list] = None
    index: Optional[str] = None
    level: Optional[int] = None
    name: Optional[str] = None
    url: Optional[str] = None


@dataclass
class FeatureLoadMatch:
    id: str


@dataclass
class FeatureListMatch:
    desc: Optional[list] = None
    index: Optional[str] = None
    level: Optional[int] = None
    name: Optional[str] = None
    url: Optional[str] = None


@dataclass
class Monster:
    alignment: Optional[str] = None
    armor_class: Optional[list] = None
    challenge_rating: Optional[float] = None
    charisma: Optional[int] = None
    constitution: Optional[int] = None
    dexterity: Optional[int] = None
    hit_dice: Optional[str] = None
    hit_point: Optional[int] = None
    index: Optional[str] = None
    intelligence: Optional[int] = None
    name: Optional[str] = None
    size: Optional[str] = None
    speed: Optional[dict] = None
    strength: Optional[int] = None
    type: Optional[str] = None
    url: Optional[str] = None
    wisdom: Optional[int] = None
    xp: Optional[int] = None


@dataclass
class MonsterLoadMatch:
    id: str


@dataclass
class MonsterListMatch:
    alignment: Optional[str] = None
    armor_class: Optional[list] = None
    challenge_rating: Optional[float] = None
    charisma: Optional[int] = None
    constitution: Optional[int] = None
    dexterity: Optional[int] = None
    hit_dice: Optional[str] = None
    hit_point: Optional[int] = None
    index: Optional[str] = None
    intelligence: Optional[int] = None
    name: Optional[str] = None
    size: Optional[str] = None
    speed: Optional[dict] = None
    strength: Optional[int] = None
    type: Optional[str] = None
    url: Optional[str] = None
    wisdom: Optional[int] = None
    xp: Optional[int] = None


@dataclass
class Spell:
    casting_time: Optional[str] = None
    component: Optional[list] = None
    desc: Optional[list] = None
    duration: Optional[str] = None
    index: Optional[str] = None
    level: Optional[int] = None
    name: Optional[str] = None
    range: Optional[str] = None
    school: Optional[dict] = None
    url: Optional[str] = None


@dataclass
class SpellLoadMatch:
    id: str


@dataclass
class SpellListMatch:
    casting_time: Optional[str] = None
    component: Optional[list] = None
    desc: Optional[list] = None
    duration: Optional[str] = None
    index: Optional[str] = None
    level: Optional[int] = None
    name: Optional[str] = None
    range: Optional[str] = None
    school: Optional[dict] = None
    url: Optional[str] = None

