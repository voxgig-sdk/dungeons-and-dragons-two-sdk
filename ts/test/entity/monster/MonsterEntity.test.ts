

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { DungeonsAndDragonsTwoSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('MonsterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE=TRUE.
  afterEach(liveDelay('DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DungeonsAndDragonsTwoSDK.test()
    const ent = testsdk.Monster()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'monster.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alignment":{"a":true,"h":"Alignment","n":"alignment","r":false,"t":"`$STRING`","key$":"alignment","index$":0},"armor_class":{"a":true,"h":"Armor Class","n":"armor_class","r":false,"t":"`$ARRAY`","key$":"armor_class","index$":1},"challenge_rating":{"a":true,"h":"Challenge Rating","n":"challenge_rating","r":false,"t":"`$NUMBER`","key$":"challenge_rating","index$":2},"charisma":{"a":true,"h":"Charisma","n":"charisma","r":false,"t":"`$INTEGER`","key$":"charisma","index$":3},"constitution":{"a":true,"h":"Constitution","n":"constitution","r":false,"t":"`$INTEGER`","key$":"constitution","index$":4},"dexterity":{"a":true,"h":"Dexterity","n":"dexterity","r":false,"t":"`$INTEGER`","key$":"dexterity","index$":5},"hit_dice":{"a":true,"h":"Hit Dice","n":"hit_dice","r":false,"t":"`$STRING`","key$":"hit_dice","index$":6},"hit_points":{"a":true,"h":"Hit Points","n":"hit_points","r":false,"t":"`$INTEGER`","key$":"hit_points","index$":7},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":8},"index":{"a":true,"h":"Index","n":"index","r":false,"sh":"Resource index for the monster","t":"`$STRING`","key$":"index","index$":9},"intelligence":{"a":true,"h":"Intelligence","n":"intelligence","r":false,"t":"`$INTEGER`","key$":"intelligence","index$":10},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the monster","t":"`$STRING`","key$":"name","index$":11},"size":{"a":true,"h":"Size","n":"size","r":false,"t":"`$STRING`","key$":"size","index$":12},"speed":{"a":true,"h":"Speed","n":"speed","r":false,"t":"`$OBJECT`","key$":"speed","index$":13},"strength":{"a":true,"h":"Strength","n":"strength","r":false,"t":"`$INTEGER`","key$":"strength","index$":14},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":15},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"URL to the monster resource","t":"`$STRING`","key$":"url","index$":16},"wisdom":{"a":true,"h":"Wisdom","n":"wisdom","r":false,"t":"`$INTEGER`","key$":"wisdom","index$":17},"xp":{"a":true,"h":"Xp","n":"xp","r":false,"t":"`$INTEGER`","key$":"xp","index$":18}},"id":{"field":"id","name":"id"},"name":"monster","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /monsters","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/monsters","q":{},"r":{},"s":[{"lit":"monsters"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /monsters/{index}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"adult-black-dragon","k":"param","n":"id","or":"index","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/monsters/{index}","q":{"exist":["id"]},"r":{"param":{"index":"id"}},"s":[{"lit":"monsters"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"monster","name__orig":"monster","Name":"Monster","name_":"monster","name-":"monster","NAME":"MONSTER","index$":2}, {"active":true,"entity":"monster","key$":"BasicMonsterFlow","kind":"basic","name":"BasicMonsterFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"monster_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"monster_ref01","srcdatavar":"monster_ref01_data","suffix":"_dt0"},"m":{"id":"monster01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-monster_ref01"}}],"index$":1}]}, 'Monster', {"GET /monsters":{"protocol":"http","operationId":"getMonsters","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"count":{"description":"Number of monsters returned","key$":"count","type":"integer"},"results":{"items":{"properties":{"index":{"description":"Resource index for the monster","type":"string","key$":"index"},"name":{"description":"Name of the monster","type":"string","key$":"name"},"url":{"description":"URL to the monster resource","type":"string","key$":"url"}},"type":"object","index$":0},"key$":"results","type":"array"}}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /monsters/{index}":{"protocol":"http","operationId":"getMonsterByIndex","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"index":{"type":"string","key$":"index"},"name":{"type":"string","key$":"name"},"size":{"type":"string","key$":"size"},"type":{"type":"string","key$":"type"},"alignment":{"type":"string","key$":"alignment"},"armor_class":{"type":"array","items":{"type":"object"},"key$":"armor_class"},"hit_points":{"type":"integer","key$":"hit_points"},"hit_dice":{"type":"string","key$":"hit_dice"},"speed":{"type":"object","key$":"speed"},"strength":{"type":"integer","key$":"strength"},"dexterity":{"type":"integer","key$":"dexterity"},"constitution":{"type":"integer","key$":"constitution"},"intelligence":{"type":"integer","key$":"intelligence"},"wisdom":{"type":"integer","key$":"wisdom"},"charisma":{"type":"integer","key$":"charisma"},"challenge_rating":{"type":"number","key$":"challenge_rating"},"xp":{"type":"integer","key$":"xp"},"url":{"type":"string","key$":"url"}},"index$":0}}}},"404":{"description":"Monster not found"}},"parameters":[{"name":"index","in":"path","required":true,"description":"The index of the monster to retrieve (e.g., 'adult-black-dragon')","schema":{"type":"string"},"example":"adult-black-dragon","index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let monster_ref01_data = Object.values(setup.data.existing.monster)[0] as any

    // LIST
    const monster_ref01_ent = client.Monster()
    const monster_ref01_match: any = {}

    const monster_ref01_list = (await monster_ref01_ent.list(monster_ref01_match)).map((e: any) => e.data())


    // LOAD
    const monster_ref01_match_dt0: any = {}
    monster_ref01_match_dt0.id = monster_ref01_data.id
    const monster_ref01_data_dt0 = (await monster_ref01_ent.load(monster_ref01_match_dt0)).data()
    assert(monster_ref01_data_dt0.id === monster_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/monster/MonsterTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = DungeonsAndDragonsTwoSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['monster01','monster02','monster03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DUNGEONS_AND_DRAGONS_TWO_TEST_MONSTER_ENTID': idmap,
    'DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE': 'FALSE',
    'DUNGEONS_AND_DRAGONS_TWO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DUNGEONS_AND_DRAGONS_TWO_TEST_MONSTER_ENTID']

  const live = 'TRUE' === env.DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DUNGEONS_AND_DRAGONS_TWO_TEST_MONSTER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new DungeonsAndDragonsTwoSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
