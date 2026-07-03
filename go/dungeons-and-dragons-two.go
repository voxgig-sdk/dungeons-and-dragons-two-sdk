package voxgigdungeonsanddragonstwosdk

import (
	"github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/go/core"
	"github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/go/entity"
	"github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/go/feature"
	_ "github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/go/utility"
)

// Type aliases preserve external API.
type DungeonsAndDragonsTwoSDK = core.DungeonsAndDragonsTwoSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type DungeonsAndDragonsTwoEntity = core.DungeonsAndDragonsTwoEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type DungeonsAndDragonsTwoError = core.DungeonsAndDragonsTwoError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewClassEntityFunc = func(client *core.DungeonsAndDragonsTwoSDK, entopts map[string]any) core.DungeonsAndDragonsTwoEntity {
		return entity.NewClassEntity(client, entopts)
	}
	core.NewFeatureEntityFunc = func(client *core.DungeonsAndDragonsTwoSDK, entopts map[string]any) core.DungeonsAndDragonsTwoEntity {
		return entity.NewFeatureEntity(client, entopts)
	}
	core.NewMonsterEntityFunc = func(client *core.DungeonsAndDragonsTwoSDK, entopts map[string]any) core.DungeonsAndDragonsTwoEntity {
		return entity.NewMonsterEntity(client, entopts)
	}
	core.NewSpellEntityFunc = func(client *core.DungeonsAndDragonsTwoSDK, entopts map[string]any) core.DungeonsAndDragonsTwoEntity {
		return entity.NewSpellEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewDungeonsAndDragonsTwoSDK = core.NewDungeonsAndDragonsTwoSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewDungeonsAndDragonsTwoSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *DungeonsAndDragonsTwoSDK  { return NewDungeonsAndDragonsTwoSDK(nil) }
func Test() *DungeonsAndDragonsTwoSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
