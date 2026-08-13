# DungeonsAndDragonsTwo SDK feature factory

from dungeonsanddragonstwo_sdk.feature.base_feature import DungeonsAndDragonsTwoBaseFeature
from dungeonsanddragonstwo_sdk.feature.test_feature import DungeonsAndDragonsTwoTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DungeonsAndDragonsTwoBaseFeature(),
        "test": lambda: DungeonsAndDragonsTwoTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
