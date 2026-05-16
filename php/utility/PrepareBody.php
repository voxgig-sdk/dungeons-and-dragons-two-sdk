<?php
declare(strict_types=1);

// DungeonsAndDragonsTwo SDK utility: prepare_body

class DungeonsAndDragonsTwoPrepareBody
{
    public static function call(DungeonsAndDragonsTwoContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
