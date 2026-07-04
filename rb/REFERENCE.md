# DungeonsAndDragonsTwo Ruby SDK Reference

Complete API reference for the DungeonsAndDragonsTwo Ruby SDK.


## DungeonsAndDragonsTwoSDK

### Constructor

```ruby
require_relative 'dungeons-and-dragons-two_sdk'

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
| `hit_die` | ``$INTEGER`` | No |  |
| `index` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `proficiency` | ``$ARRAY`` | No |  |
| `saving_throw` | ``$ARRAY`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Class.list(nil)
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
| `class` | ``$OBJECT`` | No |  |
| `desc` | ``$ARRAY`` | No |  |
| `index` | ``$STRING`` | No |  |
| `level` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Feature.list(nil)
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Monster.list(nil)
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Spell.list(nil)
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

