import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/alan_light/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Identifier: _i_signatures._T_Identifier = ($, $p) => _i_serialize.Document(
    _i_marshall.Identifier(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Path: _i_signatures._T_Path = ($, $p) => _i_serialize.Document(
    _i_marshall.Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Node: _i_signatures._T_Node = ($, $p) => _i_serialize.Document(
    _i_marshall.Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Root: _i_signatures._T_Root = ($, $p) => _i_serialize.Document(
    _i_marshall.Root(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
