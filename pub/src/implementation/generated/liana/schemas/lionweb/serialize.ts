
import * as _p from "pareto-core/dist/serializer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/lionweb/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"
export const MetaPointer: t_signatures.MetaPointer = ($) => v_serialize.Document(
    v_marshall.MetaPointer(
        $
    )
)
export const SerializationChunk: t_signatures.SerializationChunk = ($) => v_serialize.Document(
    v_marshall.SerializationChunk(
        $
    )
)
export const SerializationChunks: t_signatures.SerializationChunks = ($) => v_serialize.Document(
    v_marshall.SerializationChunks(
        $
    )
)
