// Typed models for the DungeonsAndDragonsTwo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Class is the typed data model for the class entity.
type Class struct {
	HitDie *int `json:"hit_die,omitempty"`
	Index *string `json:"index,omitempty"`
	Name *string `json:"name,omitempty"`
	Proficiency *[]any `json:"proficiency,omitempty"`
	SavingThrow *[]any `json:"saving_throw,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ClassLoadMatch is the typed request payload for Class.LoadTyped.
type ClassLoadMatch struct {
	Id string `json:"id"`
}

// ClassListMatch is the typed request payload for Class.ListTyped.
type ClassListMatch struct {
	HitDie *int `json:"hit_die,omitempty"`
	Index *string `json:"index,omitempty"`
	Name *string `json:"name,omitempty"`
	Proficiency *[]any `json:"proficiency,omitempty"`
	SavingThrow *[]any `json:"saving_throw,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Feature is the typed data model for the feature entity.
type Feature struct {
	Class *map[string]any `json:"class,omitempty"`
	Desc *[]any `json:"desc,omitempty"`
	Index *string `json:"index,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// FeatureLoadMatch is the typed request payload for Feature.LoadTyped.
type FeatureLoadMatch struct {
	Id string `json:"id"`
}

// FeatureListMatch is the typed request payload for Feature.ListTyped.
type FeatureListMatch struct {
	Class *map[string]any `json:"class,omitempty"`
	Desc *[]any `json:"desc,omitempty"`
	Index *string `json:"index,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Monster is the typed data model for the monster entity.
type Monster struct {
	Alignment *string `json:"alignment,omitempty"`
	ArmorClass *[]any `json:"armor_class,omitempty"`
	ChallengeRating *float64 `json:"challenge_rating,omitempty"`
	Charisma *int `json:"charisma,omitempty"`
	Constitution *int `json:"constitution,omitempty"`
	Dexterity *int `json:"dexterity,omitempty"`
	HitDice *string `json:"hit_dice,omitempty"`
	HitPoint *int `json:"hit_point,omitempty"`
	Index *string `json:"index,omitempty"`
	Intelligence *int `json:"intelligence,omitempty"`
	Name *string `json:"name,omitempty"`
	Size *string `json:"size,omitempty"`
	Speed *map[string]any `json:"speed,omitempty"`
	Strength *int `json:"strength,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
	Wisdom *int `json:"wisdom,omitempty"`
	Xp *int `json:"xp,omitempty"`
}

// MonsterLoadMatch is the typed request payload for Monster.LoadTyped.
type MonsterLoadMatch struct {
	Id string `json:"id"`
}

// MonsterListMatch is the typed request payload for Monster.ListTyped.
type MonsterListMatch struct {
	Alignment *string `json:"alignment,omitempty"`
	ArmorClass *[]any `json:"armor_class,omitempty"`
	ChallengeRating *float64 `json:"challenge_rating,omitempty"`
	Charisma *int `json:"charisma,omitempty"`
	Constitution *int `json:"constitution,omitempty"`
	Dexterity *int `json:"dexterity,omitempty"`
	HitDice *string `json:"hit_dice,omitempty"`
	HitPoint *int `json:"hit_point,omitempty"`
	Index *string `json:"index,omitempty"`
	Intelligence *int `json:"intelligence,omitempty"`
	Name *string `json:"name,omitempty"`
	Size *string `json:"size,omitempty"`
	Speed *map[string]any `json:"speed,omitempty"`
	Strength *int `json:"strength,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
	Wisdom *int `json:"wisdom,omitempty"`
	Xp *int `json:"xp,omitempty"`
}

// Spell is the typed data model for the spell entity.
type Spell struct {
	CastingTime *string `json:"casting_time,omitempty"`
	Class *[]any `json:"class,omitempty"`
	Component *[]any `json:"component,omitempty"`
	Desc *[]any `json:"desc,omitempty"`
	Duration *string `json:"duration,omitempty"`
	Index *string `json:"index,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	Range *string `json:"range,omitempty"`
	School *map[string]any `json:"school,omitempty"`
	Url *string `json:"url,omitempty"`
}

// SpellLoadMatch is the typed request payload for Spell.LoadTyped.
type SpellLoadMatch struct {
	Id string `json:"id"`
}

// SpellListMatch is the typed request payload for Spell.ListTyped.
type SpellListMatch struct {
	CastingTime *string `json:"casting_time,omitempty"`
	Class *[]any `json:"class,omitempty"`
	Component *[]any `json:"component,omitempty"`
	Desc *[]any `json:"desc,omitempty"`
	Duration *string `json:"duration,omitempty"`
	Index *string `json:"index,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	Range *string `json:"range,omitempty"`
	School *map[string]any `json:"school,omitempty"`
	Url *string `json:"url,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
