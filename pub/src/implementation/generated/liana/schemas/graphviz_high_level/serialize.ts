
import * as _p from "pareto-core/dist/serializer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/graphviz_high_level/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

export const Graph_Attributes: t_signatures.Graph_Attributes = ($) => v_serialize.Document(
    v_marshall.Graph_Attributes(
        $
    )
)

export const Node_Attributes: t_signatures.Node_Attributes = ($) => v_serialize.Document(
    v_marshall.Node_Attributes(
        $
    )
)

export const Tree: t_signatures.Tree = ($) => v_serialize.Document(
    v_marshall.Tree(
        $
    )
)

export const End_Point_Specification: t_signatures.End_Point_Specification = ($) => v_serialize.Document(
    v_marshall.End_Point_Specification(
        $
    )
)

export const Edge_Attributes: t_signatures.Edge_Attributes = ($) => v_serialize.Document(
    v_marshall.Edge_Attributes(
        $
    )
)

export const Graph: t_signatures.Graph = ($) => v_serialize.Document(
    v_marshall.Graph(
        $
    )
)

export const Attribute_Value: t_signatures.Attribute_Value = ($) => v_serialize.Document(
    v_marshall.Attribute_Value(
        $
    )
)
