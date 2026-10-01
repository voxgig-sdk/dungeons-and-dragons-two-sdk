package core

import "encoding/json"

type DungeonsAndDragonsTwoError struct {
	IsDungeonsAndDragonsTwoError bool
	Sdk                string
	Code               string
	Msg                string
	// Reachable for a debugger, invisible to a serialiser: the context holds
	// the live spec and options, and an error is what gets logged.
	Ctx    *Context `json:"-"`
	Result any
	Spec   any
}

func NewDungeonsAndDragonsTwoError(code string, msg string, ctx *Context) *DungeonsAndDragonsTwoError {
	return &DungeonsAndDragonsTwoError{
		IsDungeonsAndDragonsTwoError: true,
		Sdk:                "DungeonsAndDragonsTwo",
		Code:               code,
		Msg:                msg,
		Ctx:                ctx,
	}
}

func (e *DungeonsAndDragonsTwoError) Error() string {
	return e.Msg
}

// What makeError attached is already cleaned; the context is not part of
// the record.
func (e *DungeonsAndDragonsTwoError) Record() map[string]any {
	return map[string]any{
		"sdk":     e.Sdk,
		"code":    e.Code,
		"message": e.Msg,
		"result":  e.Result,
		"spec":    e.Spec,
	}
}

func (e *DungeonsAndDragonsTwoError) MarshalJSON() ([]byte, error) {
	return json.Marshal(e.Record())
}
