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
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "index",
						"short": "Resource index for the class",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the class",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "proficiencies",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "saving_throws",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "url",
						"short": "URL to the class resource",
						"type": "`$STRING`",
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
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/classes",
								"segments": []any{
									map[string]any{
										"lit": "classes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"classes",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "index",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/classes/{index}",
								"rename": map[string]any{
									"param": map[string]any{
										"index": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "classes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"classes",
									"{id}",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "desc",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "index",
						"short": "Resource index for the feature",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "level",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the feature",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "URL to the feature resource",
						"type": "`$STRING`",
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
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/features",
								"segments": []any{
									map[string]any{
										"lit": "features",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"features",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "index",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/features/{index}",
								"rename": map[string]any{
									"param": map[string]any{
										"index": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"features",
									"{id}",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "armor_class",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "challenge_rating",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "charisma",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "constitution",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "dexterity",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "hit_dice",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hit_points",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "index",
						"short": "Resource index for the monster",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "intelligence",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the monster",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "size",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speed",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "strength",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "URL to the monster resource",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wisdom",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "xp",
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
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/monsters",
								"segments": []any{
									map[string]any{
										"lit": "monsters",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"monsters",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "adult-black-dragon",
											"kind": "param",
											"name": "id",
											"orig": "index",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/monsters/{index}",
								"rename": map[string]any{
									"param": map[string]any{
										"index": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "monsters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"monsters",
									"{id}",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "classes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "components",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "desc",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "duration",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "index",
						"short": "Resource index for the spell",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "level",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the spell",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "range",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "school",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "url",
						"short": "URL to the spell resource",
						"type": "`$STRING`",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "Acid Arrow",
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/spells",
								"segments": []any{
									map[string]any{
										"lit": "spells",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"spells",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "index",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/spells/{index}",
								"rename": map[string]any{
									"param": map[string]any{
										"index": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "spells",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"spells",
									"{id}",
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
