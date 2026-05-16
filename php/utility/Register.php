<?php
declare(strict_types=1);

// DungeonsAndDragonsTwo SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

DungeonsAndDragonsTwoUtility::setRegistrar(function (DungeonsAndDragonsTwoUtility $u): void {
    $u->clean = [DungeonsAndDragonsTwoClean::class, 'call'];
    $u->done = [DungeonsAndDragonsTwoDone::class, 'call'];
    $u->make_error = [DungeonsAndDragonsTwoMakeError::class, 'call'];
    $u->feature_add = [DungeonsAndDragonsTwoFeatureAdd::class, 'call'];
    $u->feature_hook = [DungeonsAndDragonsTwoFeatureHook::class, 'call'];
    $u->feature_init = [DungeonsAndDragonsTwoFeatureInit::class, 'call'];
    $u->fetcher = [DungeonsAndDragonsTwoFetcher::class, 'call'];
    $u->make_fetch_def = [DungeonsAndDragonsTwoMakeFetchDef::class, 'call'];
    $u->make_context = [DungeonsAndDragonsTwoMakeContext::class, 'call'];
    $u->make_options = [DungeonsAndDragonsTwoMakeOptions::class, 'call'];
    $u->make_request = [DungeonsAndDragonsTwoMakeRequest::class, 'call'];
    $u->make_response = [DungeonsAndDragonsTwoMakeResponse::class, 'call'];
    $u->make_result = [DungeonsAndDragonsTwoMakeResult::class, 'call'];
    $u->make_point = [DungeonsAndDragonsTwoMakePoint::class, 'call'];
    $u->make_spec = [DungeonsAndDragonsTwoMakeSpec::class, 'call'];
    $u->make_url = [DungeonsAndDragonsTwoMakeUrl::class, 'call'];
    $u->param = [DungeonsAndDragonsTwoParam::class, 'call'];
    $u->prepare_auth = [DungeonsAndDragonsTwoPrepareAuth::class, 'call'];
    $u->prepare_body = [DungeonsAndDragonsTwoPrepareBody::class, 'call'];
    $u->prepare_headers = [DungeonsAndDragonsTwoPrepareHeaders::class, 'call'];
    $u->prepare_method = [DungeonsAndDragonsTwoPrepareMethod::class, 'call'];
    $u->prepare_params = [DungeonsAndDragonsTwoPrepareParams::class, 'call'];
    $u->prepare_path = [DungeonsAndDragonsTwoPreparePath::class, 'call'];
    $u->prepare_query = [DungeonsAndDragonsTwoPrepareQuery::class, 'call'];
    $u->result_basic = [DungeonsAndDragonsTwoResultBasic::class, 'call'];
    $u->result_body = [DungeonsAndDragonsTwoResultBody::class, 'call'];
    $u->result_headers = [DungeonsAndDragonsTwoResultHeaders::class, 'call'];
    $u->transform_request = [DungeonsAndDragonsTwoTransformRequest::class, 'call'];
    $u->transform_response = [DungeonsAndDragonsTwoTransformResponse::class, 'call'];
});
