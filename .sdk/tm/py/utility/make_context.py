# DungeonsAndDragonsTwo SDK utility: make_context

from core.context import DungeonsAndDragonsTwoContext


def make_context_util(ctxmap, basectx):
    return DungeonsAndDragonsTwoContext(ctxmap, basectx)
