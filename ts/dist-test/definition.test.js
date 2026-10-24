"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "class",
        "accessor": "Class",
        "op": "list",
        "method": "GET",
        "path": "/classes",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "count": 1,
            "results": [
                {
                    "index": "x",
                    "name": "x",
                    "url": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "class",
        "accessor": "Class",
        "op": "load",
        "method": "GET",
        "path": "/classes/{index}",
        "args": [
            {
                "name": "id",
                "wire": "index",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "index": "x",
            "name": "x",
            "hit_die": 1,
            "proficiencies": [
                {}
            ],
            "saving_throws": [
                {}
            ],
            "url": "x"
        },
        "idField": "id"
    },
    {
        "entity": "feature",
        "accessor": "Feature",
        "op": "list",
        "method": "GET",
        "path": "/features",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "count": 1,
            "results": [
                {
                    "index": "x",
                    "name": "x",
                    "url": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "feature",
        "accessor": "Feature",
        "op": "load",
        "method": "GET",
        "path": "/features/{index}",
        "args": [
            {
                "name": "id",
                "wire": "index",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "index": "x",
            "name": "x",
            "level": 1,
            "class": {},
            "desc": [
                "x"
            ],
            "url": "x"
        },
        "idField": "id"
    },
    {
        "entity": "monster",
        "accessor": "Monster",
        "op": "list",
        "method": "GET",
        "path": "/monsters",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "count": 1,
            "results": [
                {
                    "index": "x",
                    "name": "x",
                    "url": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "monster",
        "accessor": "Monster",
        "op": "load",
        "method": "GET",
        "path": "/monsters/{index}",
        "args": [
            {
                "name": "id",
                "wire": "index",
                "value": "adult-black-dragon"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "index": "x",
            "name": "x",
            "size": "x",
            "type": "x",
            "alignment": "x",
            "armor_class": [
                {}
            ],
            "hit_points": 1,
            "hit_dice": "x",
            "speed": {},
            "strength": 1,
            "dexterity": 1,
            "constitution": 1,
            "intelligence": 1,
            "wisdom": 1,
            "charisma": 1,
            "challenge_rating": 1,
            "xp": 1,
            "url": "x"
        },
        "idField": "id"
    },
    {
        "entity": "spell",
        "accessor": "Spell",
        "op": "list",
        "method": "GET",
        "path": "/spells",
        "args": [],
        "select": {
            "name": "Acid Arrow"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "name"
        ],
        "queryArgs": [
            {
                "name": "name",
                "wire": "name"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "count": 1,
            "results": [
                {
                    "index": "x",
                    "name": "x",
                    "url": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "spell",
        "accessor": "Spell",
        "op": "load",
        "method": "GET",
        "path": "/spells/{index}",
        "args": [
            {
                "name": "id",
                "wire": "index",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "index": "x",
            "name": "x",
            "level": 1,
            "school": {},
            "casting_time": "x",
            "range": "x",
            "components": [
                "x"
            ],
            "duration": "x",
            "desc": [
                "x"
            ],
            "classes": [
                {}
            ],
            "url": "x"
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map