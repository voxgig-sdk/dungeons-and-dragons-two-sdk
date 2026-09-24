
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'DungeonsAndDragonsTwo',
        slug: "dungeons-and-dragons-two",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://www.dnd5eapi.co/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        class: {
        },
  
        feature: {
        },
  
        monster: {
        },
  
        spell: {
        },
  
    }
  }


  entity = {
    "class": {
      "fields": [
        {
          "name": "hit_die",
          "title": "Hit Die",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "index",
          "title": "Index",
          "type": "`$STRING`",
          "short": "Resource index for the class"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the class"
        },
        {
          "name": "proficiencies",
          "title": "Proficiencies",
          "type": "`$ARRAY`"
        },
        {
          "name": "saving_throws",
          "title": "Saving Throws",
          "type": "`$ARRAY`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "URL to the class resource"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "class",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/classes",
              "segments": [
                {
                  "lit": "classes"
                }
              ],
              "parts": [
                "classes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/classes/{index}",
              "segments": [
                {
                  "lit": "classes"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "classes",
                "{id}"
              ],
              "rename": {
                "param": {
                  "index": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "index",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "feature": {
      "fields": [
        {
          "name": "class",
          "title": "Class",
          "type": "`$OBJECT`"
        },
        {
          "name": "desc",
          "title": "Desc",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "index",
          "title": "Index",
          "type": "`$STRING`",
          "short": "Resource index for the feature"
        },
        {
          "name": "level",
          "title": "Level",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the feature"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "URL to the feature resource"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "feature",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/features",
              "segments": [
                {
                  "lit": "features"
                }
              ],
              "parts": [
                "features"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/features/{index}",
              "segments": [
                {
                  "lit": "features"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "features",
                "{id}"
              ],
              "rename": {
                "param": {
                  "index": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "index",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "monster": {
      "fields": [
        {
          "name": "alignment",
          "title": "Alignment",
          "type": "`$STRING`"
        },
        {
          "name": "armor_class",
          "title": "Armor Class",
          "type": "`$ARRAY`"
        },
        {
          "name": "challenge_rating",
          "title": "Challenge Rating",
          "type": "`$NUMBER`"
        },
        {
          "name": "charisma",
          "title": "Charisma",
          "type": "`$INTEGER`"
        },
        {
          "name": "constitution",
          "title": "Constitution",
          "type": "`$INTEGER`"
        },
        {
          "name": "dexterity",
          "title": "Dexterity",
          "type": "`$INTEGER`"
        },
        {
          "name": "hit_dice",
          "title": "Hit Dice",
          "type": "`$STRING`"
        },
        {
          "name": "hit_points",
          "title": "Hit Points",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "index",
          "title": "Index",
          "type": "`$STRING`",
          "short": "Resource index for the monster"
        },
        {
          "name": "intelligence",
          "title": "Intelligence",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the monster"
        },
        {
          "name": "size",
          "title": "Size",
          "type": "`$STRING`"
        },
        {
          "name": "speed",
          "title": "Speed",
          "type": "`$OBJECT`"
        },
        {
          "name": "strength",
          "title": "Strength",
          "type": "`$INTEGER`"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "URL to the monster resource"
        },
        {
          "name": "wisdom",
          "title": "Wisdom",
          "type": "`$INTEGER`"
        },
        {
          "name": "xp",
          "title": "Xp",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "monster",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/monsters",
              "segments": [
                {
                  "lit": "monsters"
                }
              ],
              "parts": [
                "monsters"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/monsters/{index}",
              "segments": [
                {
                  "lit": "monsters"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "monsters",
                "{id}"
              ],
              "rename": {
                "param": {
                  "index": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "index",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "adult-black-dragon"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "spell": {
      "fields": [
        {
          "name": "casting_time",
          "title": "Casting Time",
          "type": "`$STRING`"
        },
        {
          "name": "classes",
          "title": "Classes",
          "type": "`$ARRAY`"
        },
        {
          "name": "components",
          "title": "Components",
          "type": "`$ARRAY`"
        },
        {
          "name": "desc",
          "title": "Desc",
          "type": "`$ARRAY`"
        },
        {
          "name": "duration",
          "title": "Duration",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "index",
          "title": "Index",
          "type": "`$STRING`",
          "short": "Resource index for the spell"
        },
        {
          "name": "level",
          "title": "Level",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the spell"
        },
        {
          "name": "range",
          "title": "Range",
          "type": "`$STRING`"
        },
        {
          "name": "school",
          "title": "School",
          "type": "`$OBJECT`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "URL to the spell resource"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "spell",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/spells",
              "segments": [
                {
                  "lit": "spells"
                }
              ],
              "parts": [
                "spells"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Acid Arrow"
                  }
                ]
              },
              "select": {
                "exist": [
                  "name"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/spells/{index}",
              "segments": [
                {
                  "lit": "spells"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "spells",
                "{id}"
              ],
              "rename": {
                "param": {
                  "index": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "index",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

