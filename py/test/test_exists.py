# ProjectName SDK exists test

import pytest
from dungeonsanddragonstwo_sdk import DungeonsAndDragonsTwoSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = DungeonsAndDragonsTwoSDK.test(None, None)
        assert testsdk is not None
