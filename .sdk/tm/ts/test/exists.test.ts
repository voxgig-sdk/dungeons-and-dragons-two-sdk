
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DungeonsAndDragonsTwoSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await DungeonsAndDragonsTwoSDK.test()
    equal(null !== testsdk, true)
  })

})
