<?php
declare(strict_types=1);

// DungeonsAndDragonsTwo SDK utility: result_headers

class DungeonsAndDragonsTwoResultHeaders
{
    public static function call(DungeonsAndDragonsTwoContext $ctx): ?DungeonsAndDragonsTwoResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
