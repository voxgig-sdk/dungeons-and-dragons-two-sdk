<?php
declare(strict_types=1);

// DungeonsAndDragonsTwo SDK base feature

class DungeonsAndDragonsTwoBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(DungeonsAndDragonsTwoContext $ctx, array $options): void {}
    public function PostConstruct(DungeonsAndDragonsTwoContext $ctx): void {}
    public function PostConstructEntity(DungeonsAndDragonsTwoContext $ctx): void {}
    public function SetData(DungeonsAndDragonsTwoContext $ctx): void {}
    public function GetData(DungeonsAndDragonsTwoContext $ctx): void {}
    public function GetMatch(DungeonsAndDragonsTwoContext $ctx): void {}
    public function SetMatch(DungeonsAndDragonsTwoContext $ctx): void {}
    public function PrePoint(DungeonsAndDragonsTwoContext $ctx): void {}
    public function PreSpec(DungeonsAndDragonsTwoContext $ctx): void {}
    public function PreRequest(DungeonsAndDragonsTwoContext $ctx): void {}
    public function PreResponse(DungeonsAndDragonsTwoContext $ctx): void {}
    public function PreResult(DungeonsAndDragonsTwoContext $ctx): void {}
    public function PreDone(DungeonsAndDragonsTwoContext $ctx): void {}
    public function PreUnexpected(DungeonsAndDragonsTwoContext $ctx): void {}
}
