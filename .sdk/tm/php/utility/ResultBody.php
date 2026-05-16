<?php
declare(strict_types=1);

// DungeonsAndDragonsTwo SDK utility: result_body

class DungeonsAndDragonsTwoResultBody
{
    public static function call(DungeonsAndDragonsTwoContext $ctx): ?DungeonsAndDragonsTwoResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
