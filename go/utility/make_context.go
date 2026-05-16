package utility

import "github.com/voxgig-sdk/dungeons-and-dragons-two-sdk/core"

func makeContextUtil(ctxmap map[string]any, basectx *core.Context) *core.Context {
	return core.NewContext(ctxmap, basectx)
}
