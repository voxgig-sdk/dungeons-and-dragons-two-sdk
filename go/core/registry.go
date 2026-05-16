package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewClassEntityFunc func(client *DungeonsAndDragonsTwoSDK, entopts map[string]any) DungeonsAndDragonsTwoEntity

var NewFeatureEntityFunc func(client *DungeonsAndDragonsTwoSDK, entopts map[string]any) DungeonsAndDragonsTwoEntity

var NewMonsterEntityFunc func(client *DungeonsAndDragonsTwoSDK, entopts map[string]any) DungeonsAndDragonsTwoEntity

var NewSpellEntityFunc func(client *DungeonsAndDragonsTwoSDK, entopts map[string]any) DungeonsAndDragonsTwoEntity

