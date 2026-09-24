

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


describe('ClassEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE=TRUE.
  afterEach(liveDelay('DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DungeonsAndDragonsTwoSDK.test()
    const ent = testsdk.Class()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'class.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"hit_die":{"a":true,"h":"Hit Die","n":"hit_die","r":false,"t":"`$INTEGER`","key$":"hit_die","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"index":{"a":true,"h":"Index","n":"index","r":false,"sh":"Resource index for the class","t":"`$STRING`","key$":"index","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the class","t":"`$STRING`","key$":"name","index$":3},"proficiencies":{"a":true,"h":"Proficiencies","n":"proficiencies","r":false,"t":"`$ARRAY`","key$":"proficiencies","index$":4},"saving_throws":{"a":true,"h":"Saving Throws","n":"saving_throws","r":false,"t":"`$ARRAY`","key$":"saving_throws","index$":5},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"URL to the class resource","t":"`$STRING`","key$":"url","index$":6}},"id":{"field":"id","name":"id"},"name":"class","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /classes","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/classes","q":{},"r":{},"s":[{"lit":"classes"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /classes/{index}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"index","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/classes/{index}","q":{"exist":["id"]},"r":{"param":{"index":"id"}},"s":[{"lit":"classes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"class","name__orig":"class","Name":"Class","name_":"class","name-":"class","NAME":"CLASS","index$":0}, {"active":true,"entity":"class","key$":"BasicClassFlow","kind":"basic","name":"BasicClassFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"class_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"class_ref01","srcdatavar":"class_ref01_data","suffix":"_dt0"},"m":{"id":"class01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-class_ref01"}}],"index$":1}]}, 'Class', {"GET /classes":{"protocol":"http","operationId":"getClasses","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"count":{"description":"Number of classes returned","key$":"count","type":"integer"},"results":{"items":{"properties":{"index":{"description":"Resource index for the class","type":"string","key$":"index"},"name":{"description":"Name of the class","type":"string","key$":"name"},"url":{"description":"URL to the class resource","type":"string","key$":"url"}},"type":"object","index$":0},"key$":"results","type":"array"}}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /classes/{index}":{"protocol":"http","operationId":"getClassByIndex","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"index":{"type":"string","key$":"index"},"name":{"type":"string","key$":"name"},"hit_die":{"type":"integer","key$":"hit_die"},"proficiencies":{"type":"array","items":{"type":"object"},"key$":"proficiencies"},"saving_throws":{"type":"array","items":{"type":"object"},"key$":"saving_throws"},"url":{"type":"string","key$":"url"}},"index$":0}}}},"404":{"description":"Class not found"}},"parameters":[{"name":"index","in":"path","required":true,"description":"The index of the class to retrieve","schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let class_ref01_data = Object.values(setup.data.existing.class)[0] as any

    // LIST
    const class_ref01_ent = client.Class()
    const class_ref01_match: any = {}

    const class_ref01_list = (await class_ref01_ent.list(class_ref01_match)).map((e: any) => e.data())


    // LOAD
    const class_ref01_match_dt0: any = {}
    class_ref01_match_dt0.id = class_ref01_data.id
    const class_ref01_data_dt0 = (await class_ref01_ent.load(class_ref01_match_dt0)).data()
    assert(class_ref01_data_dt0.id === class_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/class/ClassTestData.json')

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
    ['class01','class02','class03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DUNGEONS_AND_DRAGONS_TWO_TEST_CLASS_ENTID': idmap,
    'DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE': 'FALSE',
    'DUNGEONS_AND_DRAGONS_TWO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DUNGEONS_AND_DRAGONS_TWO_TEST_CLASS_ENTID']

  const live = 'TRUE' === env.DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DUNGEONS_AND_DRAGONS_TWO_TEST_CLASS_ENTID']
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
  
