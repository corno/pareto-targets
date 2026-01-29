
import * as _p from "pareto-core/dist/serializer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/graphviz_low_level/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"
export const ID: t_signatures.ID = ($) => v_serialize.Document(
    v_marshall.ID(
        $
    )
)
export const Node_ID: t_signatures.Node_ID = ($) => v_serialize.Document(
    v_marshall.Node_ID(
        $
    )
)
export const Attribute_List: t_signatures.Attribute_List = ($) => v_serialize.Document(
    v_marshall.Attribute_List(
        $
    )
)
export const Subgraph: t_signatures.Subgraph = ($) => v_serialize.Document(
    v_marshall.Subgraph(
        $
    )
)
export const Statement_List: t_signatures.Statement_List = ($) => v_serialize.Document(
    v_marshall.Statement_List(
        $
    )
)
export const Graph: t_signatures.Graph = ($) => v_serialize.Document(
    v_marshall.Graph(
        $
    )
)
