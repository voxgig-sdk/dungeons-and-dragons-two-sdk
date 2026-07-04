# DungeonsAndDragonsTwo Lua SDK Reference

Complete API reference for the DungeonsAndDragonsTwo Lua SDK.


## DungeonsAndDragonsTwoSDK

### Constructor

```lua
local sdk = require("dungeons-and-dragons-two_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Class(data)`

Create a new `Class` entity instance. Pass `nil` for no initial data.

#### `Feature(data)`

Create a new `Feature` entity instance. Pass `nil` for no initial data.

#### `Monster(data)`

Create a new `Monster` entity instance. Pass `nil` for no initial data.

#### `Spell(data)`

Create a new `Spell` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ClassEntity

```lua
local class = client:class(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hit_die` | ``$INTEGER`` | No |  |
| `index` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `proficiency` | ``$ARRAY`` | No |  |
| `saving_throw` | ``$ARRAY`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:class():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:class():load({ id = "class_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClassEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeatureEntity

```lua
local feature = client:feature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class` | ``$OBJECT`` | No |  |
| `desc` | ``$ARRAY`` | No |  |
| `index` | ``$STRING`` | No |  |
| `level` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:feature():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:feature():load({ id = "feature_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MonsterEntity

```lua
local monster = client:monster(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alignment` | ``$STRING`` | No |  |
| `armor_class` | ``$ARRAY`` | No |  |
| `challenge_rating` | ``$NUMBER`` | No |  |
| `charisma` | ``$INTEGER`` | No |  |
| `constitution` | ``$INTEGER`` | No |  |
| `dexterity` | ``$INTEGER`` | No |  |
| `hit_dice` | ``$STRING`` | No |  |
| `hit_point` | ``$INTEGER`` | No |  |
| `index` | ``$STRING`` | No |  |
| `intelligence` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `size` | ``$STRING`` | No |  |
| `speed` | ``$OBJECT`` | No |  |
| `strength` | ``$INTEGER`` | No |  |
| `type` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |
| `wisdom` | ``$INTEGER`` | No |  |
| `xp` | ``$INTEGER`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:monster():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:monster():load({ id = "monster_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonsterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SpellEntity

```lua
local spell = client:spell(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casting_time` | ``$STRING`` | No |  |
| `class` | ``$ARRAY`` | No |  |
| `component` | ``$ARRAY`` | No |  |
| `desc` | ``$ARRAY`` | No |  |
| `duration` | ``$STRING`` | No |  |
| `index` | ``$STRING`` | No |  |
| `level` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `range` | ``$STRING`` | No |  |
| `school` | ``$OBJECT`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:spell():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:spell():load({ id = "spell_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SpellEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

