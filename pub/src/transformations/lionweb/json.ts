import * as pd from 'exupery-core-data'
import * as pa from 'exupery-core-alg'

import * as _in from "../../generated/interface/schemas/lionweb/data_types/target"
import * as _out from "pareto-json/dist/generated/interface/schemas/json/data_types/target"

import { v } from "pareto-json/dist/shorthands/json"

export const MetaPointer = ($: _in.MetaPointer): _out.Value => {
    return v.object({
        "key": v.string($.key),
        "version": v.string($.version),
        "language": v.string($.language),
    })
}

export const SerializationChunks = ($: _in.SerializationChunks): _out.Document => {
    return ['object', ['dictionary', $.map(($) => SerializationChunk($))]]
}

export const SerializationChunk = ($: _in.SerializationChunk): _out.Document => {
    return v.object({
        "serializationFormatVersion": v.string($.serializationFormatVersion),
        "languages": v.array($.languages.map(($) => v.object({
            "key": v.string($.key),
            "version": v.string($.version),
        }))),
        "nodes": v.array($.nodes.map(($) => v.object({
            "id": v.string($.id),
            "parent": $.parent.transform(
                ($) => v.string($),
                () => v.null_()
            ),
            "annotations": v.array($.annotations.map(($) => v.string($))),
            "classifier": MetaPointer($['classifier']),
            "containments": v.array($.containments.map(($) => v.object({
                "containment": MetaPointer($.containment),
                "children": v.array($.children.map(($) => v.string($))),
            }))),
            "properties": v.array($.properties.map(($) => v.object({
                "value": v.string($.value),
                "property": MetaPointer($.property),
            }))),
            "references": v.array($.references.map(($) => v.object({
                "targets": v.array($.targets.map(($) => v.object({
                    "reference": v.string($.reference),
                    "resolveInfo": v.string($.resolveInfo),
                }))),
                "reference": MetaPointer($.reference),
            }))),
        }))),
    })

}
