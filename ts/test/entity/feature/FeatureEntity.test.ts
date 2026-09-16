

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


describe('FeatureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE=TRUE.
  afterEach(liveDelay('DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DungeonsAndDragonsTwoSDK.test()
    const ent = testsdk.Feature()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'feature.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"class","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"desc","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"index","req":false,"short":"Resource index for the feature","type":"`$STRING`","index$":3},{"active":true,"name":"level","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"name","req":false,"short":"Name of the feature","type":"`$STRING`","index$":5},{"active":true,"name":"url","req":false,"short":"URL to the feature resource","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"feature","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /features","json":"{\"operationId\":\"getFeatures\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"count\":{\"description\":\"Number of features returned\",\"type\":\"integer\"},\"results\":{\"items\":{\"properties\":{\"index\":{\"description\":\"Resource index for the feature\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the feature\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the feature resource\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/features","segments":[{"lit":"features"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"index","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /features/{index}","json":"{\"operationId\":\"getFeatureByIndex\",\"parameters\":[{\"description\":\"The index of the feature to retrieve\",\"in\":\"path\",\"name\":\"index\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"class\":{\"type\":\"object\"},\"desc\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"index\":{\"type\":\"string\"},\"level\":{\"type\":\"integer\"},\"name\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Feature not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/features/{index}","rename":{"param":{"index":"id"}},"segments":[{"lit":"features"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"feature","name__orig":"feature","Name":"Feature","name_":"feature","name-":"feature","NAME":"FEATURE","index$":1}, {"active":true,"entity":"feature","key$":"BasicFeatureFlow","kind":"basic","name":"BasicFeatureFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"feature_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"feature_ref01","srcdatavar":"feature_ref01_data","suffix":"_dt0"},"match":{"id":"feature01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-feature_ref01"}}],"index$":1}]}, 'Feature')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let feature_ref01_data = Object.values(setup.data.existing.feature)[0] as any

    // LIST
    const feature_ref01_ent = client.Feature()
    const feature_ref01_match: any = {}

    const feature_ref01_list = (await feature_ref01_ent.list(feature_ref01_match)).map((e: any) => e.data())


    // LOAD
    const feature_ref01_match_dt0: any = {}
    feature_ref01_match_dt0.id = feature_ref01_data.id
    const feature_ref01_data_dt0 = (await feature_ref01_ent.load(feature_ref01_match_dt0)).data()
    assert(feature_ref01_data_dt0.id === feature_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/feature/FeatureTestData.json')

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
    ['feature01','feature02','feature03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DUNGEONS_AND_DRAGONS_TWO_TEST_FEATURE_ENTID': idmap,
    'DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE': 'FALSE',
    'DUNGEONS_AND_DRAGONS_TWO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DUNGEONS_AND_DRAGONS_TWO_TEST_FEATURE_ENTID']

  const live = 'TRUE' === env.DUNGEONS_AND_DRAGONS_TWO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DUNGEONS_AND_DRAGONS_TWO_TEST_FEATURE_ENTID']
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
  
