# DungeonsAndDragonsTwo Ruby SDK



The Ruby SDK for the DungeonsAndDragonsTwo API — an entity-oriented client using idiomatic Ruby conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
gem install voxgig-sdk-dungeons-and-dragons-two
```

Or add to your `Gemfile`:

```ruby
gem "voxgig-sdk-dungeons-and-dragons-two"
```

Then run:

```bash
bundle install
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "DungeonsAndDragonsTwo_sdk"

client = DungeonsAndDragonsTwoSDK.new({
  "apikey" => ENV["DUNGEONS-AND-DRAGONS-TWO_APIKEY"],
})
```

### 2. List classs

```ruby
result, err = client.Class().list
raise err if err

if result.is_a?(Array)
  result.each do |item|
    d = item.data_get
    puts "#{d["id"]} #{d["name"]}"
  end
end
```

### 3. Load a class

```ruby
result, err = client.Class().load({ "id" => "example_id" })
raise err if err
puts result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
raise err if err

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
end
```

### Prepare a request without sending it

```ruby
fetchdef, err = client.prepare({
  "path" => "/api/resource/{id}",
  "method" => "DELETE",
  "params" => { "id" => "example" },
})
raise err if err

puts fetchdef["url"]
puts fetchdef["method"]
puts fetchdef["headers"]
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = DungeonsAndDragonsTwoSDK.test

result, err = client.DungeonsAndDragonsTwo().load({ "id" => "test01" })
# result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = DungeonsAndDragonsTwoSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
DUNGEONS-AND-DRAGONS-TWO_TEST_LIVE=TRUE
DUNGEONS-AND-DRAGONS-TWO_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### DungeonsAndDragonsTwoSDK

```ruby
require_relative "DungeonsAndDragonsTwo_sdk"
client = DungeonsAndDragonsTwoSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = DungeonsAndDragonsTwoSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### DungeonsAndDragonsTwoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> [Hash, err]` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> [Hash, err]` | Build and send an HTTP request. |
| `Class` | `(data) -> ClassEntity` | Create a Class entity instance. |
| `Feature` | `(data) -> FeatureEntity` | Create a Feature entity instance. |
| `Monster` | `(data) -> MonsterEntity` | Create a Monster entity instance. |
| `Spell` | `(data) -> SpellEntity` | Create a Spell entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> [any, err]` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> [any, err]` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> [any, err]` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> [any, err]` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> [any, err]` | Remove an entity. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return `[any, err]`. The first value is a
`Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `false` and `err` contains the error value.

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

Create an instance: `const class = client.Class()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hit_die` | ``$INTEGER`` |  |
| `index` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `proficiency` | ``$ARRAY`` |  |
| `saving_throw` | ``$ARRAY`` |  |
| `url` | ``$STRING`` |  |

#### Example: Load

```ts
const class = await client.Class().load({ id: 'class_id' })
```

#### Example: List

```ts
const classs = await client.Class().list()
```


### Feature

Create an instance: `const feature = client.Feature()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `class` | ``$OBJECT`` |  |
| `desc` | ``$ARRAY`` |  |
| `index` | ``$STRING`` |  |
| `level` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: Load

```ts
const feature = await client.Feature().load({ id: 'feature_id' })
```

#### Example: List

```ts
const features = await client.Feature().list()
```


### Monster

Create an instance: `const monster = client.Monster()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alignment` | ``$STRING`` |  |
| `armor_class` | ``$ARRAY`` |  |
| `challenge_rating` | ``$NUMBER`` |  |
| `charisma` | ``$INTEGER`` |  |
| `constitution` | ``$INTEGER`` |  |
| `dexterity` | ``$INTEGER`` |  |
| `hit_dice` | ``$STRING`` |  |
| `hit_point` | ``$INTEGER`` |  |
| `index` | ``$STRING`` |  |
| `intelligence` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `size` | ``$STRING`` |  |
| `speed` | ``$OBJECT`` |  |
| `strength` | ``$INTEGER`` |  |
| `type` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |
| `wisdom` | ``$INTEGER`` |  |
| `xp` | ``$INTEGER`` |  |

#### Example: Load

```ts
const monster = await client.Monster().load({ id: 'monster_id' })
```

#### Example: List

```ts
const monsters = await client.Monster().list()
```


### Spell

Create an instance: `const spell = client.Spell()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casting_time` | ``$STRING`` |  |
| `class` | ``$ARRAY`` |  |
| `component` | ``$ARRAY`` |  |
| `desc` | ``$ARRAY`` |  |
| `duration` | ``$STRING`` |  |
| `index` | ``$STRING`` |  |
| `level` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `range` | ``$STRING`` |  |
| `school` | ``$OBJECT`` |  |
| `url` | ``$STRING`` |  |

#### Example: Load

```ts
const spell = await client.Spell().load({ id: 'spell_id' })
```

#### Example: List

```ts
const spells = await client.Spell().list()
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as a second return value.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── DungeonsAndDragonsTwo_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`DungeonsAndDragonsTwo_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
moon = client.Moon
moon.load({ "planet_id" => "earth", "id" => "luna" })

# moon.data_get now returns the loaded moon data
# moon.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
