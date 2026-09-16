-- DungeonsAndDragonsTwo SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "DungeonsAndDragonsTwo",
      slug = "dungeons-and-dragons-two",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://www.dnd5eapi.co/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["class"] = {},
        ["feature"] = {},
        ["monster"] = {},
        ["spell"] = {},
      },
    },
    entity = {
      ["class"] = {
        ["fields"] = {
          {
            ["name"] = "hit_die",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "index",
            ["short"] = "Resource index for the class",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the class",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "proficiencies",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "saving_throws",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "url",
            ["short"] = "URL to the class resource",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "class",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/classes",
                ["segments"] = {
                  {
                    ["lit"] = "classes",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["parts"] = {
                  "classes",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "index",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/classes/{index}",
                ["rename"] = {
                  ["param"] = {
                    ["index"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "classes",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "classes",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["feature"] = {
        ["fields"] = {
          {
            ["name"] = "class",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "desc",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "index",
            ["short"] = "Resource index for the feature",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "level",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the feature",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "URL to the feature resource",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "feature",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/features",
                ["segments"] = {
                  {
                    ["lit"] = "features",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["parts"] = {
                  "features",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "index",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/features/{index}",
                ["rename"] = {
                  ["param"] = {
                    ["index"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "features",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "features",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["monster"] = {
        ["fields"] = {
          {
            ["name"] = "alignment",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "armor_class",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "challenge_rating",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "charisma",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "constitution",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "dexterity",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "hit_dice",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "hit_points",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "index",
            ["short"] = "Resource index for the monster",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "intelligence",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the monster",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "size",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "speed",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "strength",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "URL to the monster resource",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "wisdom",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "xp",
            ["type"] = "`$INTEGER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "monster",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/monsters",
                ["segments"] = {
                  {
                    ["lit"] = "monsters",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["parts"] = {
                  "monsters",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "adult-black-dragon",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "index",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/monsters/{index}",
                ["rename"] = {
                  ["param"] = {
                    ["index"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "monsters",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "monsters",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["spell"] = {
        ["fields"] = {
          {
            ["name"] = "casting_time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "classes",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "components",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "desc",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "duration",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "index",
            ["short"] = "Resource index for the spell",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "level",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the spell",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "range",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "school",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "url",
            ["short"] = "URL to the spell resource",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "spell",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "Acid Arrow",
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/spells",
                ["segments"] = {
                  {
                    ["lit"] = "spells",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "name",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["parts"] = {
                  "spells",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "index",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/spells/{index}",
                ["rename"] = {
                  ["param"] = {
                    ["index"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "spells",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "spells",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
