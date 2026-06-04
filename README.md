# DungeonsAndDragonsTwo SDK

Query 5th Edition D&D System Reference Document data — classes, features, monsters, and spells — via a public REST API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Dungeons and Dragons API

The [D&D 5e API](https://www.dnd5eapi.co/) exposes the 5th Edition Dungeons & Dragons System Reference Document (SRD) as a REST API. It is maintained by the [5e-bits](https://5e-bits.github.io/docs/introduction) open-source contributors.

This slice of the API focuses on a subset of the SRD's resource categories. From the served data you can fetch:

- Character **classes** and their progression details
- Class and racial **features**
- **Monsters** with stat blocks and lore
- **Spells** with casting rules and effects

The service is publicly reachable at `https://www.dnd5eapi.co/api` with CORS enabled, and community monitoring reports consistent availability. Full documentation, including the schema for each resource, lives at the [5e-bits docs site](https://5e-bits.github.io/docs/introduction).

This is the same upstream API as the `dungeons-and-dragons` SDK, packaged here with a different entity slicing.

## Try it

**TypeScript**
```bash
npm install dungeons-and-dragons-two
```

**Python**
```bash
pip install dungeons-and-dragons-two-sdk
```

**PHP**
```bash
composer require voxgig/dungeons-and-dragons-two-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/go
```

**Ruby**
```bash
gem install dungeons-and-dragons-two-sdk
```

**Lua**
```bash
luarocks install dungeons-and-dragons-two-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { DungeonsAndDragonsTwoSDK } from 'dungeons-and-dragons-two'

const client = new DungeonsAndDragonsTwoSDK({})

// List all classs
const classs = await client.Class().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o dungeons-and-dragons-two-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "dungeons-and-dragons-two": {
      "command": "/abs/path/to/dungeons-and-dragons-two-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Class** | A D&D 5e character class (e.g. wizard, fighter), available under `/api/classes`. | `/classes` |
| **Feature** | A class or racial feature granted at specific levels, available under `/api/features`. | `/features` |
| **Monster** | A creature stat block from the SRD bestiary, available under `/api/monsters` (e.g. `/api/monsters/adult-black-dragon`). | `/monsters` |
| **Spell** | A spell definition with school, level, and casting details, available under `/api/spells`. | `/spells` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from dungeonsanddragonstwo_sdk import DungeonsAndDragonsTwoSDK

client = DungeonsAndDragonsTwoSDK({})

# List all classs
classs, err = client.Class(None).list(None, None)

# Load a specific class
class, err = client.Class(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'dungeonsanddragonstwo_sdk.php';

$client = new DungeonsAndDragonsTwoSDK([]);

// List all classs
[$classs, $err] = $client->Class(null)->list(null, null);

// Load a specific class
[$class, $err] = $client->Class(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/go"

client := sdk.NewDungeonsAndDragonsTwoSDK(map[string]any{})

// List all classs
classs, err := client.Class(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "DungeonsAndDragonsTwo_sdk"

client = DungeonsAndDragonsTwoSDK.new({})

# List all classs
classs, err = client.Class(nil).list(nil, nil)

# Load a specific class
class, err = client.Class(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("dungeons-and-dragons-two_sdk")

local client = sdk.new({})

-- List all classs
local classs, err = client:Class(nil):list(nil, nil)

-- Load a specific class
local class, err = client:Class(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = DungeonsAndDragonsTwoSDK.test()
const result = await client.Class().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = DungeonsAndDragonsTwoSDK.test(None, None)
result, err = client.Class(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = DungeonsAndDragonsTwoSDK::test(null, null);
[$result, $err] = $client->Class(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Class(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = DungeonsAndDragonsTwoSDK.test(nil, nil)
result, err = client.Class(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Class(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Dungeons and Dragons API

- Upstream: [https://www.dnd5eapi.co/](https://www.dnd5eapi.co/)
- API docs: [https://5e-bits.github.io/docs/introduction](https://5e-bits.github.io/docs/introduction)

- API content is sourced from the D&D 5th Edition System Reference Document (SRD).
- Users should respect the SRD's open licensing terms when redistributing data.
- The API project is maintained by the 5e-bits contributors on GitHub.
- No explicit licence statement is published on the API landing page; consult the upstream project for details.

---

Generated from the Dungeons and Dragons API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
