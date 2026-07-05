<?php
declare(strict_types=1);

// Typed models for the DungeonsAndDragonsTwo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Class entity data model. */
class Class
{
    public ?int $hit_die = null;
    public ?string $index = null;
    public ?string $name = null;
    public ?array $proficiency = null;
    public ?array $saving_throw = null;
    public ?string $url = null;
}

/** Request payload for Class#load. */
class ClassLoadMatch
{
    public string $id;
}

/** Request payload for Class#list. */
class ClassListMatch
{
    public ?int $hit_die = null;
    public ?string $index = null;
    public ?string $name = null;
    public ?array $proficiency = null;
    public ?array $saving_throw = null;
    public ?string $url = null;
}

/** Feature entity data model. */
class Feature
{
    public ?array $class = null;
    public ?array $desc = null;
    public ?string $index = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** Request payload for Feature#load. */
class FeatureLoadMatch
{
    public string $id;
}

/** Request payload for Feature#list. */
class FeatureListMatch
{
    public ?array $class = null;
    public ?array $desc = null;
    public ?string $index = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** Monster entity data model. */
class Monster
{
    public ?string $alignment = null;
    public ?array $armor_class = null;
    public ?float $challenge_rating = null;
    public ?int $charisma = null;
    public ?int $constitution = null;
    public ?int $dexterity = null;
    public ?string $hit_dice = null;
    public ?int $hit_point = null;
    public ?string $index = null;
    public ?int $intelligence = null;
    public ?string $name = null;
    public ?string $size = null;
    public ?array $speed = null;
    public ?int $strength = null;
    public ?string $type = null;
    public ?string $url = null;
    public ?int $wisdom = null;
    public ?int $xp = null;
}

/** Request payload for Monster#load. */
class MonsterLoadMatch
{
    public string $id;
}

/** Request payload for Monster#list. */
class MonsterListMatch
{
    public ?string $alignment = null;
    public ?array $armor_class = null;
    public ?float $challenge_rating = null;
    public ?int $charisma = null;
    public ?int $constitution = null;
    public ?int $dexterity = null;
    public ?string $hit_dice = null;
    public ?int $hit_point = null;
    public ?string $index = null;
    public ?int $intelligence = null;
    public ?string $name = null;
    public ?string $size = null;
    public ?array $speed = null;
    public ?int $strength = null;
    public ?string $type = null;
    public ?string $url = null;
    public ?int $wisdom = null;
    public ?int $xp = null;
}

/** Spell entity data model. */
class Spell
{
    public ?string $casting_time = null;
    public ?array $class = null;
    public ?array $component = null;
    public ?array $desc = null;
    public ?string $duration = null;
    public ?string $index = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?string $range = null;
    public ?array $school = null;
    public ?string $url = null;
}

/** Request payload for Spell#load. */
class SpellLoadMatch
{
    public string $id;
}

/** Request payload for Spell#list. */
class SpellListMatch
{
    public ?string $casting_time = null;
    public ?array $class = null;
    public ?array $component = null;
    public ?array $desc = null;
    public ?string $duration = null;
    public ?string $index = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?string $range = null;
    public ?array $school = null;
    public ?string $url = null;
}

