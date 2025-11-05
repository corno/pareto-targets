import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_marshall from "./marshall"
import * as _i_serialize from "../../generic/serialize"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz_low_level/serialize"


export const Attribute_List: _i_signatures._T_Attribute_List = ($, $p) => _i_serialize.Document(
    _i_marshall.Attribute_List(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Graph: _i_signatures._T_Graph = ($, $p) => _i_serialize.Document(
    _i_marshall.Graph(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const ID: _i_signatures._T_ID = ($, $p) => _i_serialize.Document(
    _i_marshall.ID(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Node_ID: _i_signatures._T_Node_ID = ($, $p) => _i_serialize.Document(
    _i_marshall.Node_ID(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Statement_List: _i_signatures._T_Statement_List = ($, $p) => _i_serialize.Document(
    _i_marshall.Statement_List(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Subgraph: _i_signatures._T_Subgraph = ($, $p) => _i_serialize.Document(
    _i_marshall.Subgraph(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
