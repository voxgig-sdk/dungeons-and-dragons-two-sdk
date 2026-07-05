# DungeonsAndDragonsTwo TypeScript SDK Reference

Complete API reference for the DungeonsAndDragonsTwo TypeScript SDK.


## DungeonsAndDragonsTwoSDK

### Constructor

```ts
new DungeonsAndDragonsTwoSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DungeonsAndDragonsTwoSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = DungeonsAndDragonsTwoSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `DungeonsAndDragonsTwoSDK` instance in test mode.


### Instance Methods

#### `Class(data?: object)`

Create a new `Class` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClassEntity` instance.

#### `Feature(data?: object)`

Create a new `Feature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeatureEntity` instance.

#### `Monster(data?: object)`

Create a new `Monster` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MonsterEntity` instance.

#### `Spell(data?: object)`

Create a new `Spell` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SpellEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `DungeonsAndDragonsTwoSDK.test()`.

**Returns:** `DungeonsAndDragonsTwoSDK` instance in test mode.


---

## ClassEntity

```ts
const class_ = client.Class()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hit_die` | `number` | No |  |
| `index` | `string` | No |  |
| `name` | `string` | No |  |
| `proficiency` | `any[]` | No |  |
| `saving_throw` | `any[]` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Class().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Class().load({ id: 'class_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClassEntity` instance with the same client and
options.

#### `client()`

Return the parent `DungeonsAndDragonsTwoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeatureEntity

```ts
const feature = client.Feature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class` | `Record<string, any>` | No |  |
| `desc` | `any[]` | No |  |
| `index` | `string` | No |  |
| `level` | `number` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Feature().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Feature().load({ id: 'feature_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `DungeonsAndDragonsTwoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MonsterEntity

```ts
const monster = client.Monster()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alignment` | `string` | No |  |
| `armor_class` | `any[]` | No |  |
| `challenge_rating` | `number` | No |  |
| `charisma` | `number` | No |  |
| `constitution` | `number` | No |  |
| `dexterity` | `number` | No |  |
| `hit_dice` | `string` | No |  |
| `hit_point` | `number` | No |  |
| `index` | `string` | No |  |
| `intelligence` | `number` | No |  |
| `name` | `string` | No |  |
| `size` | `string` | No |  |
| `speed` | `Record<string, any>` | No |  |
| `strength` | `number` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `wisdom` | `number` | No |  |
| `xp` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Monster().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Monster().load({ id: 'monster_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MonsterEntity` instance with the same client and
options.

#### `client()`

Return the parent `DungeonsAndDragonsTwoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SpellEntity

```ts
const spell = client.Spell()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casting_time` | `string` | No |  |
| `class` | `any[]` | No |  |
| `component` | `any[]` | No |  |
| `desc` | `any[]` | No |  |
| `duration` | `string` | No |  |
| `index` | `string` | No |  |
| `level` | `number` | No |  |
| `name` | `string` | No |  |
| `range` | `string` | No |  |
| `school` | `Record<string, any>` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Spell().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Spell().load({ id: 'spell_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SpellEntity` instance with the same client and
options.

#### `client()`

Return the parent `DungeonsAndDragonsTwoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new DungeonsAndDragonsTwoSDK({
  feature: {
    test: { active: true },
  }
})
```

