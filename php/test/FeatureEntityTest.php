<?php
declare(strict_types=1);

// Feature entity test

require_once __DIR__ . '/../dungeonsanddragonstwo_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class FeatureEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = DungeonsAndDragonsTwoSDK::test(null, null);
        $ent = $testsdk->Feature(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = feature_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "feature." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set DUNGEONSANDDRAGONSTWO_TEST_FEATURE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $feature_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.feature")));
        $feature_ref01_data = null;
        if (count($feature_ref01_data_raw) > 0) {
            $feature_ref01_data = Helpers::to_map($feature_ref01_data_raw[0][1]);
        }

        // LIST
        $feature_ref01_ent = $client->Feature(null);
        $feature_ref01_match = [];

        $feature_ref01_list_result = $feature_ref01_ent->list($feature_ref01_match, null);
        $this->assertIsArray($feature_ref01_list_result);

        // LOAD
        $feature_ref01_match_dt0 = [];
        $feature_ref01_data_dt0_loaded = $feature_ref01_ent->load($feature_ref01_match_dt0, null);
        $this->assertNotNull($feature_ref01_data_dt0_loaded);

    }
}

function feature_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/feature/FeatureTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = DungeonsAndDragonsTwoSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["feature01", "feature02", "feature03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("DUNGEONSANDDRAGONSTWO_TEST_FEATURE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "DUNGEONSANDDRAGONSTWO_TEST_FEATURE_ENTID" => $idmap,
        "DUNGEONSANDDRAGONSTWO_TEST_LIVE" => "FALSE",
        "DUNGEONSANDDRAGONSTWO_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["DUNGEONSANDDRAGONSTWO_TEST_FEATURE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["DUNGEONSANDDRAGONSTWO_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new DungeonsAndDragonsTwoSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["DUNGEONSANDDRAGONSTWO_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["DUNGEONSANDDRAGONSTWO_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
