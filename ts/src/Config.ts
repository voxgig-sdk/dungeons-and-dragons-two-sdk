
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "index",
          "short": "Resource index for the class",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the class",
          "type": "`$STRING`"
        },
        {
          "name": "proficiencies",
          "type": "`$ARRAY`"
        },
        {
          "name": "saving_throws",
          "type": "`$ARRAY`"
        },
        {
          "name": "url",
          "short": "URL to the class resource",
          "type": "`$STRING`"
        }
      ],
      "name": "class",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/classes",
              "parts": [
                "classes"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "index",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/classes/{index}",
              "parts": [
                "classes",
                "{id}"
              ],
              "rename": {
                "param": {
                  "index": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
          "type": "`$OBJECT`"
        },
        {
          "name": "desc",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "index",
          "short": "Resource index for the feature",
          "type": "`$STRING`"
        },
        {
          "name": "level",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "Name of the feature",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "URL to the feature resource",
          "type": "`$STRING`"
        }
      ],
      "name": "feature",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/features",
              "parts": [
                "features"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "index",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/features/{index}",
              "parts": [
                "features",
                "{id}"
              ],
              "rename": {
                "param": {
                  "index": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
          "type": "`$STRING`"
        },
        {
          "name": "armor_class",
          "type": "`$ARRAY`"
        },
        {
          "name": "challenge_rating",
          "type": "`$NUMBER`"
        },
        {
          "name": "charisma",
          "type": "`$INTEGER`"
        },
        {
          "name": "constitution",
          "type": "`$INTEGER`"
        },
        {
          "name": "dexterity",
          "type": "`$INTEGER`"
        },
        {
          "name": "hit_dice",
          "type": "`$STRING`"
        },
        {
          "name": "hit_points",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "index",
          "short": "Resource index for the monster",
          "type": "`$STRING`"
        },
        {
          "name": "intelligence",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "Name of the monster",
          "type": "`$STRING`"
        },
        {
          "name": "size",
          "type": "`$STRING`"
        },
        {
          "name": "speed",
          "type": "`$OBJECT`"
        },
        {
          "name": "strength",
          "type": "`$INTEGER`"
        },
        {
          "name": "type",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "URL to the monster resource",
          "type": "`$STRING`"
        },
        {
          "name": "wisdom",
          "type": "`$INTEGER`"
        },
        {
          "name": "xp",
          "type": "`$INTEGER`"
        }
      ],
      "name": "monster",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/monsters",
              "parts": [
                "monsters"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "adult-black-dragon",
                    "kind": "param",
                    "name": "id",
                    "orig": "index",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/monsters/{index}",
              "parts": [
                "monsters",
                "{id}"
              ],
              "rename": {
                "param": {
                  "index": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
          "type": "`$STRING`"
        },
        {
          "name": "classes",
          "type": "`$ARRAY`"
        },
        {
          "name": "components",
          "type": "`$ARRAY`"
        },
        {
          "name": "desc",
          "type": "`$ARRAY`"
        },
        {
          "name": "duration",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "index",
          "short": "Resource index for the spell",
          "type": "`$STRING`"
        },
        {
          "name": "level",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "Name of the spell",
          "type": "`$STRING`"
        },
        {
          "name": "range",
          "type": "`$STRING`"
        },
        {
          "name": "school",
          "type": "`$OBJECT`"
        },
        {
          "name": "url",
          "short": "URL to the spell resource",
          "type": "`$STRING`"
        }
      ],
      "name": "spell",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "Acid Arrow",
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/spells",
              "parts": [
                "spells"
              ],
              "select": {
                "exist": [
                  "name"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "index",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/spells/{index}",
              "parts": [
                "spells",
                "{id}"
              ],
              "rename": {
                "param": {
                  "index": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
  config
}

