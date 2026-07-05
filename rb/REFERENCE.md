# DungeonsAndDragonsTwo Ruby SDK Reference

Complete API reference for the DungeonsAndDragonsTwo Ruby SDK.


## DungeonsAndDragonsTwoSDK

### Constructor

```ruby
require_relative 'DungeonsAndDragonsTwo_sdk'

client = DungeonsAndDragonsTwoSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DungeonsAndDragonsTwoSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = DungeonsAndDragonsTwoSDK.test
```


### Instance Methods

#### `Class(data = nil)`

Create a new `Class` entity instance. Pass `nil` for no initial data.

#### `Feature(data = nil)`

Create a new `Feature` entity instance. Pass `nil` for no initial data.

#### `Monster(data = nil)`

Create a new `Monster` entity instance. Pass `nil` for no initial data.

#### `Spell(data = nil)`

Create a new `Spell` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ClassEntity

```ruby
class = client.Class
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hit_die` | `Integer` | No |  |
| `index` | `String` | No |  |
| `name` | `String` | No |  |
| `proficiency` | `Array` | No |  |
| `saving_throw` | `Array` | No |  |
| `url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Class.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Class.load({ "id" => "class_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ClassEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FeatureEntity

```ruby
feature = client.Feature
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class` | `Hash` | No |  |
| `desc` | `Array` | No |  |
| `index` | `String` | No |  |
| `level` | `Integer` | No |  |
| `name` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Feature.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Feature.load({ "id" => "feature_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MonsterEntity

```ruby
monster = client.Monster
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alignment` | `String` | No |  |
| `armor_class` | `Array` | No |  |
| `challenge_rating` | `Float` | No |  |
| `charisma` | `Integer` | No |  |
| `constitution` | `Integer` | No |  |
| `dexterity` | `Integer` | No |  |
| `hit_dice` | `String` | No |  |
| `hit_point` | `Integer` | No |  |
| `index` | `String` | No |  |
| `intelligence` | `Integer` | No |  |
| `name` | `String` | No |  |
| `size` | `String` | No |  |
| `speed` | `Hash` | No |  |
| `strength` | `Integer` | No |  |
| `type` | `String` | No |  |
| `url` | `String` | No |  |
| `wisdom` | `Integer` | No |  |
| `xp` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Monster.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Monster.load({ "id" => "monster_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MonsterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SpellEntity

```ruby
spell = client.Spell
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casting_time` | `String` | No |  |
| `class` | `Array` | No |  |
| `component` | `Array` | No |  |
| `desc` | `Array` | No |  |
| `duration` | `String` | No |  |
| `index` | `String` | No |  |
| `level` | `Integer` | No |  |
| `name` | `String` | No |  |
| `range` | `String` | No |  |
| `school` | `Hash` | No |  |
| `url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Spell.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Spell.load({ "id" => "spell_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SpellEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = DungeonsAndDragonsTwoSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

