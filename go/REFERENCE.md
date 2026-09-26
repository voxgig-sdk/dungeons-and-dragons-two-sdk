# DungeonsAndDragonsTwo Golang SDK Reference

Complete API reference for the DungeonsAndDragonsTwo Golang SDK.


## DungeonsAndDragonsTwoSDK

### Constructor

```go
func NewDungeonsAndDragonsTwoSDK(options map[string]any) *DungeonsAndDragonsTwoSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *DungeonsAndDragonsTwoSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *DungeonsAndDragonsTwoSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Class(data map[string]any) DungeonsAndDragonsTwoEntity`

Create a new `Class` entity instance. Pass `nil` for no initial data.

#### `Feature(data map[string]any) DungeonsAndDragonsTwoEntity`

Create a new `Feature` entity instance. Pass `nil` for no initial data.

#### `Monster(data map[string]any) DungeonsAndDragonsTwoEntity`

Create a new `Monster` entity instance. Pass `nil` for no initial data.

#### `Spell(data map[string]any) DungeonsAndDragonsTwoEntity`

Create a new `Spell` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ClassEntity

```go
class := client.Class(nil)
fmt.Println(class.GetName()) // "class"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hit_die` | `int` | No |  |
| `id` | `string` | No |  |
| `index` | `string` | No | Resource index for the class |
| `name` | `string` | No | Name of the class |
| `proficiencies` | `[]any` | No |  |
| `saving_throws` | `[]any` | No |  |
| `url` | `string` | No | URL to the class resource |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Class(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Class(nil).Load(map[string]any{"id": "class_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClassEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeatureEntity

```go
feature := client.Feature(nil)
fmt.Println(feature.GetName()) // "feature"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class` | `map[string]any` | No |  |
| `desc` | `[]any` | No |  |
| `id` | `string` | No |  |
| `index` | `string` | No | Resource index for the feature |
| `level` | `int` | No |  |
| `name` | `string` | No | Name of the feature |
| `url` | `string` | No | URL to the feature resource |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Feature(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Feature(nil).Load(map[string]any{"id": "feature_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MonsterEntity

```go
monster := client.Monster(nil)
fmt.Println(monster.GetName()) // "monster"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alignment` | `string` | No |  |
| `armor_class` | `[]any` | No |  |
| `challenge_rating` | `float64` | No |  |
| `charisma` | `int` | No |  |
| `constitution` | `int` | No |  |
| `dexterity` | `int` | No |  |
| `hit_dice` | `string` | No |  |
| `hit_points` | `int` | No |  |
| `id` | `string` | No |  |
| `index` | `string` | No | Resource index for the monster |
| `intelligence` | `int` | No |  |
| `name` | `string` | No | Name of the monster |
| `size` | `string` | No |  |
| `speed` | `map[string]any` | No |  |
| `strength` | `int` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No | URL to the monster resource |
| `wisdom` | `int` | No |  |
| `xp` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Monster(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Monster(nil).Load(map[string]any{"id": "monster_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MonsterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SpellEntity

```go
spell := client.Spell(nil)
fmt.Println(spell.GetName()) // "spell"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casting_time` | `string` | No |  |
| `classes` | `[]any` | No |  |
| `components` | `[]any` | No |  |
| `desc` | `[]any` | No |  |
| `duration` | `string` | No |  |
| `id` | `string` | No |  |
| `index` | `string` | No | Resource index for the spell |
| `level` | `int` | No |  |
| `name` | `string` | No | Name of the spell |
| `range` | `string` | No |  |
| `school` | `map[string]any` | No |  |
| `url` | `string` | No | URL to the spell resource |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Spell(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Spell(nil).Load(map[string]any{"id": "spell_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SpellEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```go
client := sdk.NewDungeonsAndDragonsTwoSDK(map[string]any{
    "feature": map[string]any{
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

