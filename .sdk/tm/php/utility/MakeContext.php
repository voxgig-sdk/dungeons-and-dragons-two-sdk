<?php
declare(strict_types=1);

// DungeonsAndDragonsTwo SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class DungeonsAndDragonsTwoMakeContext
{
    public static function call(array $ctxmap, ?DungeonsAndDragonsTwoContext $basectx): DungeonsAndDragonsTwoContext
    {
        return new DungeonsAndDragonsTwoContext($ctxmap, $basectx);
    }
}
