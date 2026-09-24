

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"class":{"a":true,"h":"Class","n":"class","r":false,"t":"`$OBJECT`","key$":"class","index$":0},"desc":{"a":true,"h":"Desc","n":"desc","r":false,"t":"`$ARRAY`","key$":"desc","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"index":{"a":true,"h":"Index","n":"index","r":false,"sh":"Resource index for the feature","t":"`$STRING`","key$":"index","index$":3},"level":{"a":true,"h":"Level","n":"level","r":false,"t":"`$INTEGER`","key$":"level","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the feature","t":"`$STRING`","key$":"name","index$":5},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"URL to the feature resource","t":"`$STRING`","key$":"url","index$":6}},"id":{"field":"id","name":"id"},"name":"feature","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /features","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/features","q":{},"r":{},"s":[{"lit":"features"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /features/{index}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"index","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/features/{index}","q":{"exist":["id"]},"r":{"param":{"index":"id"}},"s":[{"lit":"features"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"feature","name__orig":"feature","Name":"Feature","name_":"feature","name-":"feature","NAME":"FEATURE","index$":1}, {"active":true,"entity":"feature","key$":"BasicFeatureFlow","kind":"basic","name":"BasicFeatureFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"feature_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"feature_ref01","srcdatavar":"feature_ref01_data","suffix":"_dt0"},"m":{"id":"feature01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-feature_ref01"}}],"index$":1}]}, 'Feature', {"GET /features":{"protocol":"http","operationId":"getFeatures","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"count":{"description":"Number of features returned","key$":"count","type":"integer"},"results":{"items":{"properties":{"index":{"description":"Resource index for the feature","type":"string","key$":"index"},"name":{"description":"Name of the feature","type":"string","key$":"name"},"url":{"description":"URL to the feature resource","type":"string","key$":"url"}},"type":"object","index$":0},"key$":"results","type":"array"}}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /features/{index}":{"protocol":"http","operationId":"getFeatureByIndex","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"index":{"type":"string","key$":"index"},"name":{"type":"string","key$":"name"},"level":{"type":"integer","key$":"level"},"class":{"type":"object","key$":"class"},"desc":{"type":"array","items":{"type":"string"},"key$":"desc"},"url":{"type":"string","key$":"url"}},"index$":0}}}},"404":{"description":"Feature not found"}},"parameters":[{"name":"index","in":"path","required":true,"description":"The index of the feature to retrieve","schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
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
  
