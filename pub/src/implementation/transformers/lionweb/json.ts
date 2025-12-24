
import * as d_in from "../../../interface/generated/pareto/schemas/lionweb/data_types/target"
import * as d_out from "pareto-json/dist/interface/generated/pareto/schemas/json/data_types/target"

import { Signature as x } from "../../../interface/algorithms/transformations/lionweb/json"

import * as sh from "pareto-json/dist/shorthands/json"


export const MetaPointer = ($: d_in.MetaPointer): d_out.Value => {
    return sh.v.object({
        "key": sh.v.string($.key),
        "version": sh.v.string($.version),
        "language": sh.v.string($.language),
    })
}

export const SerializationChunks = ($: d_in.SerializationChunks): d_out.Document => {
    return ['object', ['dictionary', $.map(($) => SerializationChunk($))]]
}

export const SerializationChunk = ($: d_in.SerializationChunk): d_out.Document => {
    return sh.v.object({
        "serializationFormatVersion": sh.v.string($.serializationFormatVersion),
        "languages": sh.v.array($.languages.map(($) => sh.v.object({
            "key": sh.v.string($.key),
            "version": sh.v.string($.version),
        }))),
        "nodes": sh.v.array($.nodes.map(($) => sh.v.object({
            "id": sh.v.string($.id),
            "parent": $.parent.transform(
                ($) => sh.v.string($),
                () => sh.v.null_()
            ),
            "annotations": sh.v.array($.annotations.map(($) => sh.v.string($))),
            "classifier": MetaPointer($['classifier']),
            "containments": sh.v.array($.containments.map(($) => sh.v.object({
                "containment": MetaPointer($.containment),
                "children": sh.v.array($.children.map(($) => sh.v.string($))),
            }))),
            "properties": sh.v.array($.properties.map(($) => sh.v.object({
                "value": sh.v.string($.value),
                "property": MetaPointer($.property),
            }))),
            "references": sh.v.array($.references.map(($) => sh.v.object({
                "targets": sh.v.array($.targets.map(($) => sh.v.object({
                    "reference": sh.v.string($.reference),
                    "resolveInfo": sh.v.string($.resolveInfo),
                }))),
                "reference": MetaPointer($.reference),
            }))),
        }))),
    })

}
