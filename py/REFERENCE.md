# DungeonsAndDragonsTwo Python SDK Reference

Complete API reference for the DungeonsAndDragonsTwo Python SDK.


## DungeonsAndDragonsTwoSDK

### Constructor

```python
from dungeonsanddragonstwo_sdk import DungeonsAndDragonsTwoSDK

client = DungeonsAndDragonsTwoSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DungeonsAndDragonsTwoSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = DungeonsAndDragonsTwoSDK.test()
```


### Instance Methods

#### `Class(data=None)`

Create a new `ClassEntity` instance. Pass `None` for no initial data.

#### `Feature(data=None)`

Create a new `FeatureEntity` instance. Pass `None` for no initial data.

#### `Monster(data=None)`

Create a new `MonsterEntity` instance. Pass `None` for no initial data.

#### `Spell(data=None)`

Create a new `SpellEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ClassEntity

```python
class_ = client.Class()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hit_die` | `int` | No |  |
| `index` | `str` | No |  |
| `name` | `str` | No |  |
| `proficiency` | `list` | No |  |
| `saving_throw` | `list` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Class().list()
for class_ in results:
    print(class_)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Class().load({"id": "class_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClassEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeatureEntity

```python
feature = client.Feature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class` | `dict` | No |  |
| `desc` | `list` | No |  |
| `index` | `str` | No |  |
| `level` | `int` | No |  |
| `name` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Feature().list()
for feature in results:
    print(feature)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Feature().load({"id": "feature_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MonsterEntity

```python
monster = client.Monster()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alignment` | `str` | No |  |
| `armor_class` | `list` | No |  |
| `challenge_rating` | `float` | No |  |
| `charisma` | `int` | No |  |
| `constitution` | `int` | No |  |
| `dexterity` | `int` | No |  |
| `hit_dice` | `str` | No |  |
| `hit_point` | `int` | No |  |
| `index` | `str` | No |  |
| `intelligence` | `int` | No |  |
| `name` | `str` | No |  |
| `size` | `str` | No |  |
| `speed` | `dict` | No |  |
| `strength` | `int` | No |  |
| `type` | `str` | No |  |
| `url` | `str` | No |  |
| `wisdom` | `int` | No |  |
| `xp` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Monster().list()
for monster in results:
    print(monster)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Monster().load({"id": "monster_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonsterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SpellEntity

```python
spell = client.Spell()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casting_time` | `str` | No |  |
| `class` | `list` | No |  |
| `component` | `list` | No |  |
| `desc` | `list` | No |  |
| `duration` | `str` | No |  |
| `index` | `str` | No |  |
| `level` | `int` | No |  |
| `name` | `str` | No |  |
| `range` | `str` | No |  |
| `school` | `dict` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Spell().list()
for spell in results:
    print(spell)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Spell().load({"id": "spell_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SpellEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = DungeonsAndDragonsTwoSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

