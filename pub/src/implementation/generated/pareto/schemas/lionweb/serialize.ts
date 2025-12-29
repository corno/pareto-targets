import * as _pa from 'pareto-core-serializer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/lionweb/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const MetaPointer: _i_signatures._T_MetaPointer = ($, $p) => _i_serialize.Document(
    _i_marshall.MetaPointer(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const SerializationChunk: _i_signatures._T_SerializationChunk = ($, $p) => _i_serialize.Document(
    _i_marshall.SerializationChunk(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const SerializationChunks: _i_signatures._T_SerializationChunks = ($, $p) => _i_serialize.Document(
    _i_marshall.SerializationChunks(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
