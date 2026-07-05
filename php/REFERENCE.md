# DungeonsAndDragonsTwo PHP SDK Reference

Complete API reference for the DungeonsAndDragonsTwo PHP SDK.


## DungeonsAndDragonsTwoSDK

### Constructor

```php
require_once __DIR__ . '/dungeonsanddragonstwo_sdk.php';

$client = new DungeonsAndDragonsTwoSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DungeonsAndDragonsTwoSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = DungeonsAndDragonsTwoSDK::test();
```


### Instance Methods

#### `Class($data = null)`

Create a new `ClassEntity` instance. Pass `null` for no initial data.

#### `Feature($data = null)`

Create a new `FeatureEntity` instance. Pass `null` for no initial data.

#### `Monster($data = null)`

Create a new `MonsterEntity` instance. Pass `null` for no initial data.

#### `Spell($data = null)`

Create a new `SpellEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): DungeonsAndDragonsTwoUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ClassEntity

```php
$class = $client->Class();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hit_die` | `int` | No |  |
| `index` | `string` | No |  |
| `name` | `string` | No |  |
| `proficiency` | `array` | No |  |
| `saving_throw` | `array` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Class()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Class()->load(["id" => "class_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClassEntity`

Create a new `ClassEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeatureEntity

```php
$feature = $client->Feature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class` | `array` | No |  |
| `desc` | `array` | No |  |
| `index` | `string` | No |  |
| `level` | `int` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Feature()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Feature()->load(["id" => "feature_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeatureEntity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MonsterEntity

```php
$monster = $client->Monster();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alignment` | `string` | No |  |
| `armor_class` | `array` | No |  |
| `challenge_rating` | `float` | No |  |
| `charisma` | `int` | No |  |
| `constitution` | `int` | No |  |
| `dexterity` | `int` | No |  |
| `hit_dice` | `string` | No |  |
| `hit_point` | `int` | No |  |
| `index` | `string` | No |  |
| `intelligence` | `int` | No |  |
| `name` | `string` | No |  |
| `size` | `string` | No |  |
| `speed` | `array` | No |  |
| `strength` | `int` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `wisdom` | `int` | No |  |
| `xp` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Monster()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Monster()->load(["id" => "monster_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MonsterEntity`

Create a new `MonsterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SpellEntity

```php
$spell = $client->Spell();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casting_time` | `string` | No |  |
| `class` | `array` | No |  |
| `component` | `array` | No |  |
| `desc` | `array` | No |  |
| `duration` | `string` | No |  |
| `index` | `string` | No |  |
| `level` | `int` | No |  |
| `name` | `string` | No |  |
| `range` | `string` | No |  |
| `school` | `array` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Spell()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Spell()->load(["id" => "spell_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SpellEntity`

Create a new `SpellEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new DungeonsAndDragonsTwoSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

