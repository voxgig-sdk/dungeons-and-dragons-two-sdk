<?php
declare(strict_types=1);

// DungeonsAndDragonsTwo SDK utility: prepare_method

class DungeonsAndDragonsTwoPrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(DungeonsAndDragonsTwoContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}
