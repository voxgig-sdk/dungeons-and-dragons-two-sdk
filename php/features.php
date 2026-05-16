<?php
declare(strict_types=1);

// DungeonsAndDragonsTwo SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class DungeonsAndDragonsTwoFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new DungeonsAndDragonsTwoBaseFeature();
            case "test":
                return new DungeonsAndDragonsTwoTestFeature();
            default:
                return new DungeonsAndDragonsTwoBaseFeature();
        }
    }
}
