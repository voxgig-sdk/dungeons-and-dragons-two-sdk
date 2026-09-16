package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewClassEntityFunc func(client *DungeonsAndDragonsTwoSDK, entopts map[string]any) DungeonsAndDragonsTwoEntity

var NewFeatureEntityFunc func(client *DungeonsAndDragonsTwoSDK, entopts map[string]any) DungeonsAndDragonsTwoEntity

var NewMonsterEntityFunc func(client *DungeonsAndDragonsTwoSDK, entopts map[string]any) DungeonsAndDragonsTwoEntity

var NewSpellEntityFunc func(client *DungeonsAndDragonsTwoSDK, entopts map[string]any) DungeonsAndDragonsTwoEntity

