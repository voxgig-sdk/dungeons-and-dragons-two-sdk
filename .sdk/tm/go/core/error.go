package core

type DungeonsAndDragonsTwoError struct {
	IsDungeonsAndDragonsTwoError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewDungeonsAndDragonsTwoError(code string, msg string, ctx *Context) *DungeonsAndDragonsTwoError {
	return &DungeonsAndDragonsTwoError{
		IsDungeonsAndDragonsTwoError: true,
		Sdk:              "DungeonsAndDragonsTwo",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *DungeonsAndDragonsTwoError) Error() string {
	return e.Msg
}
