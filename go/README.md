# DungeonsAndDragonsTwo Golang SDK



The Golang SDK for the DungeonsAndDragonsTwo API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Class(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/go=../dungeons-and-dragons-two-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/go"
)

func main() {
    client := sdk.New()

    // List class records — the value is the array of records itself.
    classs, err := client.Class(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range classs.([]any) {
        fmt.Println(item)
    }

    // Load a single class — the value is the loaded record.
    class, err := client.Class(nil).Load(map[string]any{"id": "example"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(class)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
classs, err := client.Class(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = classs
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

class, err := client.Class(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(class) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewDungeonsAndDragonsTwoSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewDungeonsAndDragonsTwoSDK

```go
func NewDungeonsAndDragonsTwoSDK(options map[string]any) *DungeonsAndDragonsTwoSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *DungeonsAndDragonsTwoSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### DungeonsAndDragonsTwoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Class` | `(data map[string]any) DungeonsAndDragonsTwoEntity` | Create a Class entity instance. |
| `Feature` | `(data map[string]any) DungeonsAndDragonsTwoEntity` | Create a Feature entity instance. |
| `Monster` | `(data map[string]any) DungeonsAndDragonsTwoEntity` | Create a Monster entity instance. |
| `Spell` | `(data map[string]any) DungeonsAndDragonsTwoEntity` | Create a Spell entity instance. |

### Entity interface (DungeonsAndDragonsTwoEntity)

All entities implement the `DungeonsAndDragonsTwoEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    class, err := client.Class(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // class is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Class

| Field | Description |
| --- | --- |
| `"hit_die"` |  |
| `"index"` |  |
| `"name"` |  |
| `"proficiency"` |  |
| `"saving_throw"` |  |
| `"url"` |  |

Operations: List, Load.

API path: `/classes`

#### Feature

| Field | Description |
| --- | --- |
| `"class"` |  |
| `"desc"` |  |
| `"index"` |  |
| `"level"` |  |
| `"name"` |  |
| `"url"` |  |

Operations: List, Load.

API path: `/features`

#### Monster

| Field | Description |
| --- | --- |
| `"alignment"` |  |
| `"armor_class"` |  |
| `"challenge_rating"` |  |
| `"charisma"` |  |
| `"constitution"` |  |
| `"dexterity"` |  |
| `"hit_dice"` |  |
| `"hit_point"` |  |
| `"index"` |  |
| `"intelligence"` |  |
| `"name"` |  |
| `"size"` |  |
| `"speed"` |  |
| `"strength"` |  |
| `"type"` |  |
| `"url"` |  |
| `"wisdom"` |  |
| `"xp"` |  |

Operations: List, Load.

API path: `/monsters`

#### Spell

| Field | Description |
| --- | --- |
| `"casting_time"` |  |
| `"class"` |  |
| `"component"` |  |
| `"desc"` |  |
| `"duration"` |  |
| `"index"` |  |
| `"level"` |  |
| `"name"` |  |
| `"range"` |  |
| `"school"` |  |
| `"url"` |  |

Operations: List, Load.

API path: `/spells`



## Entities


### Class

Create an instance: `class := client.Class(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hit_die` | `int` |  |
| `index` | `string` |  |
| `name` | `string` |  |
| `proficiency` | `[]any` |  |
| `saving_throw` | `[]any` |  |
| `url` | `string` |  |

#### Example: Load

```go
class, err := client.Class(nil).Load(map[string]any{"id": "class_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(class) // the loaded record
```

#### Example: List

```go
classs, err := client.Class(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(classs) // the array of records
```


### Feature

Create an instance: `feature := client.Feature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `class` | `map[string]any` |  |
| `desc` | `[]any` |  |
| `index` | `string` |  |
| `level` | `int` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
feature, err := client.Feature(nil).Load(map[string]any{"id": "feature_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(feature) // the loaded record
```

#### Example: List

```go
features, err := client.Feature(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(features) // the array of records
```


### Monster

Create an instance: `monster := client.Monster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alignment` | `string` |  |
| `armor_class` | `[]any` |  |
| `challenge_rating` | `float64` |  |
| `charisma` | `int` |  |
| `constitution` | `int` |  |
| `dexterity` | `int` |  |
| `hit_dice` | `string` |  |
| `hit_point` | `int` |  |
| `index` | `string` |  |
| `intelligence` | `int` |  |
| `name` | `string` |  |
| `size` | `string` |  |
| `speed` | `map[string]any` |  |
| `strength` | `int` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `wisdom` | `int` |  |
| `xp` | `int` |  |

#### Example: Load

```go
monster, err := client.Monster(nil).Load(map[string]any{"id": "monster_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(monster) // the loaded record
```

#### Example: List

```go
monsters, err := client.Monster(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(monsters) // the array of records
```


### Spell

Create an instance: `spell := client.Spell(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casting_time` | `string` |  |
| `class` | `[]any` |  |
| `component` | `[]any` |  |
| `desc` | `[]any` |  |
| `duration` | `string` |  |
| `index` | `string` |  |
| `level` | `int` |  |
| `name` | `string` |  |
| `range` | `string` |  |
| `school` | `map[string]any` |  |
| `url` | `string` |  |

#### Example: Load

```go
spell, err := client.Spell(nil).Load(map[string]any{"id": "spell_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(spell) // the loaded record
```

#### Example: List

```go
spells, err := client.Spell(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(spells) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/go/
├── dungeons-and-dragons-two.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
class := client.Class(nil)
class.List(nil, nil)

// class.Data() now returns the class data from the last list
// class.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
