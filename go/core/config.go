package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "DungeonsAndDragonsTwo",
			"slug": "dungeons-and-dragons-two",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://www.dnd5eapi.co/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"class": map[string]any{},
				"feature": map[string]any{},
				"monster": map[string]any{},
				"spell": map[string]any{},
			},
		},
		"entity": map[string]any{
			"class": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "hit_die",
						"title": "Hit Die",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "index",
						"title": "Index",
						"type": "`$STRING`",
						"short": "Resource index for the class",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the class",
					},
					map[string]any{
						"name": "proficiencies",
						"title": "Proficiencies",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "saving_throws",
						"title": "Saving Throws",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "URL to the class resource",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "class",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/classes",
								"segments": []any{
									map[string]any{
										"lit": "classes",
									},
								},
								"parts": []any{
									"classes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/classes/{index}",
								"segments": []any{
									map[string]any{
										"lit": "classes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"classes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"index": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "index",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"feature": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "class",
						"title": "Class",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "desc",
						"title": "Desc",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "index",
						"title": "Index",
						"type": "`$STRING`",
						"short": "Resource index for the feature",
					},
					map[string]any{
						"name": "level",
						"title": "Level",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the feature",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "URL to the feature resource",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "feature",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/features",
								"segments": []any{
									map[string]any{
										"lit": "features",
									},
								},
								"parts": []any{
									"features",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/features/{index}",
								"segments": []any{
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"features",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"index": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "index",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"monster": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "alignment",
						"title": "Alignment",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "armor_class",
						"title": "Armor Class",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "challenge_rating",
						"title": "Challenge Rating",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "charisma",
						"title": "Charisma",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "constitution",
						"title": "Constitution",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "dexterity",
						"title": "Dexterity",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "hit_dice",
						"title": "Hit Dice",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hit_points",
						"title": "Hit Points",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "index",
						"title": "Index",
						"type": "`$STRING`",
						"short": "Resource index for the monster",
					},
					map[string]any{
						"name": "intelligence",
						"title": "Intelligence",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the monster",
					},
					map[string]any{
						"name": "size",
						"title": "Size",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speed",
						"title": "Speed",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "strength",
						"title": "Strength",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "URL to the monster resource",
					},
					map[string]any{
						"name": "wisdom",
						"title": "Wisdom",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "xp",
						"title": "Xp",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "monster",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/monsters",
								"segments": []any{
									map[string]any{
										"lit": "monsters",
									},
								},
								"parts": []any{
									"monsters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/monsters/{index}",
								"segments": []any{
									map[string]any{
										"lit": "monsters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"monsters",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"index": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "index",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "adult-black-dragon",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"spell": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casting_time",
						"title": "Casting Time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "classes",
						"title": "Classes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "components",
						"title": "Components",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "desc",
						"title": "Desc",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "index",
						"title": "Index",
						"type": "`$STRING`",
						"short": "Resource index for the spell",
					},
					map[string]any{
						"name": "level",
						"title": "Level",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the spell",
					},
					map[string]any{
						"name": "range",
						"title": "Range",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "school",
						"title": "School",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "URL to the spell resource",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "spell",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/spells",
								"segments": []any{
									map[string]any{
										"lit": "spells",
									},
								},
								"parts": []any{
									"spells",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Acid Arrow",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"name",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/spells/{index}",
								"segments": []any{
									map[string]any{
										"lit": "spells",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"spells",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"index": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "index",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
