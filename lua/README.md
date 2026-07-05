# DungeonsAndDragonsTwo Lua SDK



The Lua SDK for the DungeonsAndDragonsTwo API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Class()` — each with the same small set of operations (`list`, `load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("dungeons-and-dragons-two_sdk")

local client = sdk.new()
```

### 2. List class records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local classs, err = client:Class():list()
if err then error(err) end

for _, item in ipairs(classs) do
  print(item["index"])
end
```

### 3. Load a class

```lua
local class, err = client:Class():load({ id = "example_id" })
if err then error(err) end
print(class)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local classs, err = client:Class():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Class():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE=TRUE
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### DungeonsAndDragonsTwoSDK

```lua
local sdk = require("dungeons-and-dragons-two_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### DungeonsAndDragonsTwoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Class` | `(data) -> ClassEntity` | Create a Class entity instance. |
| `Feature` | `(data) -> FeatureEntity` | Create a Feature entity instance. |
| `Monster` | `(data) -> MonsterEntity` | Create a Monster entity instance. |
| `Spell` | `(data) -> SpellEntity` | Create a Spell entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local class, err = client:Class():load({ id = "example_id" })
    if err then error(err) end
    -- class is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Class

| Field | Description |
| --- | --- |
| `hit_die` |  |
| `index` |  |
| `name` |  |
| `proficiency` |  |
| `saving_throw` |  |
| `url` |  |

Operations: List, Load.

API path: `/classes`

#### Feature

| Field | Description |
| --- | --- |
| `class` |  |
| `desc` |  |
| `index` |  |
| `level` |  |
| `name` |  |
| `url` |  |

Operations: List, Load.

API path: `/features`

#### Monster

| Field | Description |
| --- | --- |
| `alignment` |  |
| `armor_class` |  |
| `challenge_rating` |  |
| `charisma` |  |
| `constitution` |  |
| `dexterity` |  |
| `hit_dice` |  |
| `hit_point` |  |
| `index` |  |
| `intelligence` |  |
| `name` |  |
| `size` |  |
| `speed` |  |
| `strength` |  |
| `type` |  |
| `url` |  |
| `wisdom` |  |
| `xp` |  |

Operations: List, Load.

API path: `/monsters`

#### Spell

| Field | Description |
| --- | --- |
| `casting_time` |  |
| `class` |  |
| `component` |  |
| `desc` |  |
| `duration` |  |
| `index` |  |
| `level` |  |
| `name` |  |
| `range` |  |
| `school` |  |
| `url` |  |

Operations: List, Load.

API path: `/spells`



## Entities


### Class

Create an instance: `local class = client:Class(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hit_die` | `number` |  |
| `index` | `string` |  |
| `name` | `string` |  |
| `proficiency` | `table` |  |
| `saving_throw` | `table` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local class, err = client:Class():load({ id = "class_id" })
```

#### Example: List

```lua
local classs, err = client:Class():list()
```


### Feature

Create an instance: `local feature = client:Feature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `class` | `table` |  |
| `desc` | `table` |  |
| `index` | `string` |  |
| `level` | `number` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local feature, err = client:Feature():load({ id = "feature_id" })
```

#### Example: List

```lua
local features, err = client:Feature():list()
```


### Monster

Create an instance: `local monster = client:Monster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alignment` | `string` |  |
| `armor_class` | `table` |  |
| `challenge_rating` | `number` |  |
| `charisma` | `number` |  |
| `constitution` | `number` |  |
| `dexterity` | `number` |  |
| `hit_dice` | `string` |  |
| `hit_point` | `number` |  |
| `index` | `string` |  |
| `intelligence` | `number` |  |
| `name` | `string` |  |
| `size` | `string` |  |
| `speed` | `table` |  |
| `strength` | `number` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `wisdom` | `number` |  |
| `xp` | `number` |  |

#### Example: Load

```lua
local monster, err = client:Monster():load({ id = "monster_id" })
```

#### Example: List

```lua
local monsters, err = client:Monster():list()
```


### Spell

Create an instance: `local spell = client:Spell(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casting_time` | `string` |  |
| `class` | `table` |  |
| `component` | `table` |  |
| `desc` | `table` |  |
| `duration` | `string` |  |
| `index` | `string` |  |
| `level` | `number` |  |
| `name` | `string` |  |
| `range` | `string` |  |
| `school` | `table` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local spell, err = client:Spell():load({ id = "spell_id" })
```

#### Example: List

```lua
local spells, err = client:Spell():list()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── dungeons-and-dragons-two_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`dungeons-and-dragons-two_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local class = client:Class()
class:list()

-- class:data_get() now returns the class data from the last list
-- class:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
