import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz_high_level/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Graph_Attributes: _i_signatures._T_Graph_Attributes = ($, $p) => _i_serialize.Document(
    _i_marshall.Graph_Attributes(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Node_Attributes: _i_signatures._T_Node_Attributes = ($, $p) => _i_serialize.Document(
    _i_marshall.Node_Attributes(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Tree: _i_signatures._T_Tree = ($, $p) => _i_serialize.Document(
    _i_marshall.Tree(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const End_Point_Specification: _i_signatures._T_End_Point_Specification = ($, $p) => _i_serialize.Document(
    _i_marshall.End_Point_Specification(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Edge_Attributes: _i_signatures._T_Edge_Attributes = ($, $p) => _i_serialize.Document(
    _i_marshall.Edge_Attributes(
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
export const Attribute_Value: _i_signatures._T_Attribute_Value = ($, $p) => _i_serialize.Document(
    _i_marshall.Attribute_Value(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
