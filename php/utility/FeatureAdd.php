<?php
declare(strict_types=1);

// DungeonsAndDragonsTwo SDK utility: feature_add

class DungeonsAndDragonsTwoFeatureAdd
{
    public static function call(DungeonsAndDragonsTwoContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
