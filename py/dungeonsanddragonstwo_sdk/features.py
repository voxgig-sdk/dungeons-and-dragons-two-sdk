# DungeonsAndDragonsTwo SDK feature factory

from dungeonsanddragonstwo_sdk.feature.base_feature import DungeonsAndDragonsTwoBaseFeature
from dungeonsanddragonstwo_sdk.feature.ratelimit_feature import DungeonsAndDragonsTwoRatelimitFeature
from dungeonsanddragonstwo_sdk.feature.retry_feature import DungeonsAndDragonsTwoRetryFeature
from dungeonsanddragonstwo_sdk.feature.test_feature import DungeonsAndDragonsTwoTestFeature
from dungeonsanddragonstwo_sdk.feature.timeout_feature import DungeonsAndDragonsTwoTimeoutFeature


_FEATURES = {
    "base": lambda: DungeonsAndDragonsTwoBaseFeature(),
    "ratelimit": lambda: DungeonsAndDragonsTwoRatelimitFeature(),
    "retry": lambda: DungeonsAndDragonsTwoRetryFeature(),
    "test": lambda: DungeonsAndDragonsTwoTestFeature(),
    "timeout": lambda: DungeonsAndDragonsTwoTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
