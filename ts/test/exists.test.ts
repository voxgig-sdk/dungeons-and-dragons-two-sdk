
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DungeonsAndDragonsTwoSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = DungeonsAndDragonsTwoSDK.test()
    equal(testsdk instanceof DungeonsAndDragonsTwoSDK, true,
      'DungeonsAndDragonsTwoSDK.test() must return a client synchronously')
  })

})
