
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/pareto_documentation/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

export const Graphviz_Directory: t_signatures.Graphviz_Directory = ($) => v_serialize.Document(
    v_marshall.Graphviz_Directory(
        $
    )
)
