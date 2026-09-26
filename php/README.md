# DungeonsAndDragonsTwo PHP SDK



The PHP SDK for the DungeonsAndDragonsTwo API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Class()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/releases](https://github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'dungeonsanddragonstwo_sdk.php';

$client = new DungeonsAndDragonsTwoSDK();
```

### 2. List class records

```php
try {
    // list() returns entity instances; data_get() reads each record.
    $classs = $client->Class()->list();
    foreach ($classs as $record) {
        $item = $record->data_get();
        echo $item["id"] . " " . $item["hit_die"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a class

```php
try {
    // load() returns the ENTITY — call data_get() for the Class record (throws on error).
    $class = $client->Class()->load(["id" => "example_id"]);
    print_r($class->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $classs = $client->Class()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = DungeonsAndDragonsTwoSDK::test([
    "entity" => ["class" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$class = $client->Class()->list();
print_r(array_map(fn($item) => $item->data_get(), $class));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new DungeonsAndDragonsTwoSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### DungeonsAndDragonsTwoSDK

```php
require_once 'dungeonsanddragonstwo_sdk.php';
$client = new DungeonsAndDragonsTwoSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = DungeonsAndDragonsTwoSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### DungeonsAndDragonsTwoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Class` | `($data): ClassEntity` | Create a Class entity instance. |
| `Feature` | `($data): FeatureEntity` | Create a Feature entity instance. |
| `Monster` | `($data): MonsterEntity` | Create a Monster entity instance. |
| `Spell` | `($data): SpellEntity` | Create a Spell entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Class

| Field | Description |
| --- | --- |
| `hit_die` |  |
| `id` |  |
| `index` | Resource index for the class |
| `name` | Name of the class |
| `proficiencies` |  |
| `saving_throws` |  |
| `url` | URL to the class resource |

Operations: List, Load.

API path: `/classes`

#### Feature

| Field | Description |
| --- | --- |
| `class` |  |
| `desc` |  |
| `id` |  |
| `index` | Resource index for the feature |
| `level` |  |
| `name` | Name of the feature |
| `url` | URL to the feature resource |

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
| `hit_points` |  |
| `id` |  |
| `index` | Resource index for the monster |
| `intelligence` |  |
| `name` | Name of the monster |
| `size` |  |
| `speed` |  |
| `strength` |  |
| `type` |  |
| `url` | URL to the monster resource |
| `wisdom` |  |
| `xp` |  |

Operations: List, Load.

API path: `/monsters`

#### Spell

| Field | Description |
| --- | --- |
| `casting_time` |  |
| `classes` |  |
| `components` |  |
| `desc` |  |
| `duration` |  |
| `id` |  |
| `index` | Resource index for the spell |
| `level` |  |
| `name` | Name of the spell |
| `range` |  |
| `school` |  |
| `url` | URL to the spell resource |

Operations: List, Load.

API path: `/spells`



## Entities


### Class

Create an instance: `$class = $client->Class();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hit_die` | `int` |  |
| `id` | `string` |  |
| `index` | `string` | Resource index for the class |
| `name` | `string` | Name of the class |
| `proficiencies` | `array` |  |
| `saving_throws` | `array` |  |
| `url` | `string` | URL to the class resource |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Class record (throws on error).
$class = $client->Class()->load(["id" => "class_id"]);
```

#### Example: List

```php
// list() returns an array of Class records (throws on error).
$classs = $client->Class()->list();
```


### Feature

Create an instance: `$feature = $client->Feature();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `class` | `array` |  |
| `desc` | `array` |  |
| `id` | `string` |  |
| `index` | `string` | Resource index for the feature |
| `level` | `int` |  |
| `name` | `string` | Name of the feature |
| `url` | `string` | URL to the feature resource |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Feature record (throws on error).
$feature = $client->Feature()->load(["id" => "feature_id"]);
```

#### Example: List

```php
// list() returns an array of Feature records (throws on error).
$features = $client->Feature()->list();
```


### Monster

Create an instance: `$monster = $client->Monster();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alignment` | `string` |  |
| `armor_class` | `array` |  |
| `challenge_rating` | `float` |  |
| `charisma` | `int` |  |
| `constitution` | `int` |  |
| `dexterity` | `int` |  |
| `hit_dice` | `string` |  |
| `hit_points` | `int` |  |
| `id` | `string` |  |
| `index` | `string` | Resource index for the monster |
| `intelligence` | `int` |  |
| `name` | `string` | Name of the monster |
| `size` | `string` |  |
| `speed` | `array` |  |
| `strength` | `int` |  |
| `type` | `string` |  |
| `url` | `string` | URL to the monster resource |
| `wisdom` | `int` |  |
| `xp` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Monster record (throws on error).
$monster = $client->Monster()->load(["id" => "monster_id"]);
```

#### Example: List

```php
// list() returns an array of Monster records (throws on error).
$monsters = $client->Monster()->list();
```


### Spell

Create an instance: `$spell = $client->Spell();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casting_time` | `string` |  |
| `classes` | `array` |  |
| `components` | `array` |  |
| `desc` | `array` |  |
| `duration` | `string` |  |
| `id` | `string` |  |
| `index` | `string` | Resource index for the spell |
| `level` | `int` |  |
| `name` | `string` | Name of the spell |
| `range` | `string` |  |
| `school` | `array` |  |
| `url` | `string` | URL to the spell resource |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Spell record (throws on error).
$spell = $client->Spell()->load(["id" => "spell_id"]);
```

#### Example: List

```php
// list() returns an array of Spell records (throws on error).
$spells = $client->Spell()->list();
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── dungeonsanddragonstwo_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`dungeonsanddragonstwo_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$class = $client->Class();
$class->list();

// $class->data_get() now returns the class data from the last list
// $class->match_get() returns the last match criteria
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
