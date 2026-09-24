"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SpellEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.DungeonsAndDragonsTwoSDK.test();
        const ent = testsdk.Spell();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'spell.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "casting_time": { "a": true, "h": "Casting Time", "n": "casting_time", "r": false, "t": "`$STRING`", "key$": "casting_time", "index$": 0 }, "classes": { "a": true, "h": "Classes", "n": "classes", "r": false, "t": "`$ARRAY`", "key$": "classes", "index$": 1 }, "components": { "a": true, "h": "Components", "n": "components", "r": false, "t": "`$ARRAY`", "key$": "components", "index$": 2 }, "desc": { "a": true, "h": "Desc", "n": "desc", "r": false, "t": "`$ARRAY`", "key$": "desc", "index$": 3 }, "duration": { "a": true, "h": "Duration", "n": "duration", "r": false, "t": "`$STRING`", "key$": "duration", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 5 }, "index": { "a": true, "h": "Index", "n": "index", "r": false, "sh": "Resource index for the spell", "t": "`$STRING`", "key$": "index", "index$": 6 }, "level": { "a": true, "h": "Level", "n": "level", "r": false, "t": "`$INTEGER`", "key$": "level", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the spell", "t": "`$STRING`", "key$": "name", "index$": 8 }, "range": { "a": true, "h": "Range", "n": "range", "r": false, "t": "`$STRING`", "key$": "range", "index$": 9 }, "school": { "a": true, "h": "School", "n": "school", "r": false, "t": "`$OBJECT`", "key$": "school", "index$": 10 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "sh": "URL to the spell resource", "t": "`$STRING`", "key$": "url", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "spell", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /spells", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "Acid Arrow", "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/spells", "q": { "exist": ["name"] }, "r": {}, "s": [{ "lit": "spells" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /spells/{index}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "index", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/spells/{index}", "q": { "exist": ["id"] }, "r": { "param": { "index": "id" } }, "s": [{ "lit": "spells" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "spell", "name__orig": "spell", "Name": "Spell", "name_": "spell", "name-": "spell", "NAME": "SPELL", "index$": 3 }, { "active": true, "entity": "spell", "key$": "BasicSpellFlow", "kind": "basic", "name": "BasicSpellFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "spell_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "spell_ref01", "srcdatavar": "spell_ref01_data", "suffix": "_dt0" }, "m": { "id": "spell01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-spell_ref01" } }], "index$": 1 }] }, 'Spell', { "GET /spells": { "protocol": "http", "operationId": "getSpells", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "count": { "description": "Number of spells returned", "key$": "count", "type": "integer" }, "results": { "items": { "properties": { "index": { "description": "Resource index for the spell", "type": "string", "key$": "index" }, "name": { "description": "Name of the spell", "type": "string", "key$": "name" }, "url": { "description": "URL to the spell resource", "type": "string", "key$": "url" } }, "type": "object", "index$": 0 }, "key$": "results", "type": "array" } } } } } } }, "parameters": [{ "name": "name", "in": "query", "required": false, "description": "Filter spells by name (e.g., 'Acid Arrow')", "schema": { "type": "string" }, "example": "Acid Arrow", "index$": 0 }], "securitySource": "unspecified" }, "GET /spells/{index}": { "protocol": "http", "operationId": "getSpellByIndex", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "index": { "type": "string", "key$": "index" }, "name": { "type": "string", "key$": "name" }, "level": { "type": "integer", "key$": "level" }, "school": { "type": "object", "key$": "school" }, "casting_time": { "type": "string", "key$": "casting_time" }, "range": { "type": "string", "key$": "range" }, "components": { "type": "array", "items": { "type": "string" }, "key$": "components" }, "duration": { "type": "string", "key$": "duration" }, "desc": { "type": "array", "items": { "type": "string" }, "key$": "desc" }, "classes": { "type": "array", "items": { "type": "object" }, "key$": "classes" }, "url": { "type": "string", "key$": "url" } }, "index$": 0 } } } }, "404": { "description": "Spell not found" } }, "parameters": [{ "name": "index", "in": "path", "required": true, "description": "The index of the spell to retrieve", "schema": { "type": "string" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let spell_ref01_data = Object.values(setup.data.existing.spell)[0];
        // LIST
        const spell_ref01_ent = client.Spell();
        const spell_ref01_match = {};
        const spell_ref01_list = (await spell_ref01_ent.list(spell_ref01_match)).map((e) => e.data());
        // LOAD
        const spell_ref01_match_dt0 = {};
        spell_ref01_match_dt0.id = spell_ref01_data.id;
        const spell_ref01_data_dt0 = (await spell_ref01_ent.load(spell_ref01_match_dt0)).data();
        (0, node_assert_1.default)(spell_ref01_data_dt0.id === spell_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/spell/SpellTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.DungeonsAndDragonsTwoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['spell01', 'spell02', 'spell03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DUNGEONS_AND_DRAGONS_TWO_TEST_SPELL_ENTID': idmap,
        'DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE': 'FALSE',
        'DUNGEONS_AND_DRAGONS_TWO_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['DUNGEONS_AND_DRAGONS_TWO_TEST_SPELL_ENTID'];
    const live = 'TRUE' === env.DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DUNGEONS_AND_DRAGONS_TWO_TEST_SPELL_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.DungeonsAndDragonsTwoSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.DUNGEONS_AND_DRAGONS_TWO_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SpellEntity.test.js.map