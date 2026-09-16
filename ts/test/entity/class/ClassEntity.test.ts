

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"hit_die","req":false,"type":"`$INTEGER`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"index","req":false,"short":"Resource index for the class","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"short":"Name of the class","type":"`$STRING`","index$":3},{"active":true,"name":"proficiencies","req":false,"type":"`$ARRAY`","index$":4},{"active":true,"name":"saving_throws","req":false,"type":"`$ARRAY`","index$":5},{"active":true,"name":"url","req":false,"short":"URL to the class resource","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"class","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /classes","json":"{\"operationId\":\"getClasses\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"count\":{\"description\":\"Number of classes returned\",\"type\":\"integer\"},\"results\":{\"items\":{\"properties\":{\"index\":{\"description\":\"Resource index for the class\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the class\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the class resource\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/classes","segments":[{"lit":"classes"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"index","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /classes/{index}","json":"{\"operationId\":\"getClassByIndex\",\"parameters\":[{\"description\":\"The index of the class to retrieve\",\"in\":\"path\",\"name\":\"index\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"hit_die\":{\"type\":\"integer\"},\"index\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"proficiencies\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"saving_throws\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Class not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/classes/{index}","rename":{"param":{"index":"id"}},"segments":[{"lit":"classes"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"class","name__orig":"class","Name":"Class","name_":"class","name-":"class","NAME":"CLASS","index$":0}, {"active":true,"entity":"class","key$":"BasicClassFlow","kind":"basic","name":"BasicClassFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"class_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"class_ref01","srcdatavar":"class_ref01_data","suffix":"_dt0"},"match":{"id":"class01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-class_ref01"}}],"index$":1}]}, 'Class')
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
  
