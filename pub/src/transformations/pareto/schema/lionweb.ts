import * as pd from 'exupery-core-data'
import * as pa from 'exupery-core-alg'

import * as _in from "pareto/dist/generated/interface/schemas/schema/data_types/source"
import * as _in_m from "pareto/dist/generated/interface/schemas/module/data_types/source"
import * as _out from "../../../generated/interface/schemas/lionweb/data_types/target"

import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/operations/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_flatten_list } from "pareto-standard-operations/dist/operations/pure/list/flatten"

export const MetaPointer = (
    $: string,
): _out.MetaPointer => ({
    'language': "astn",
    'version': "0.1",
    'key': $,
})

export const Type_Node_2_properties = (
    $: _in.Type_Node,
    $p: {
        'path': string,
    }
): _out.SerializationChunk.nodes.L.properties => {
    return pa.array_literal([])
}

export const Type_Node_2_Document_nodes = (
    $: _in.Type_Node,
    $p: {
        'path': string,
    }
): _out.SerializationChunk.nodes => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'dictionary': return pa.ss($, ($): _out.SerializationChunk.nodes => op_flatten_list(pa.array_literal([
                pa.array_literal([
                    {
                        'id': $p.path,
                        'parent': pa.not_set(),
                        'annotations': pa.array_literal([]),
                        'classifier': MetaPointer("dictionary"),
                        'containments': pa.array_literal([
                            {
                                'containment': MetaPointer("entry"),
                                'children': pa.array_literal([$p.path + ".D"]),
                            },
                        ]),
                        'properties': pa.array_literal([]),
                        'references': pa.array_literal([])
                    },
                    {
                        'id': $p.path + ".D",
                        'parent': pa.not_set(),
                        'annotations': pa.array_literal([]),
                        'classifier': MetaPointer("entry"),
                        'containments': pa.array_literal([
                            {
                                'containment': MetaPointer("entries"),
                                'children': pa.array_literal([$p.path + ".D"]),
                            },
                        ]),
                        'properties': pa.array_literal([]),
                        'references': pa.array_literal([])
                    }
                ]),
                Type_Node_2_Document_nodes(
                    $.node,
                    {
                        'path': $p.path + ".D",
                    }
                ),
            ])))
            case 'group': return pa.ss($, ($): _out.SerializationChunk.nodes => op_flatten_list(pa.array_literal([
                pa.array_literal([
                    {
                        'id': $p.path,
                        'parent': pa.not_set(),
                        'annotations': pa.array_literal([]),
                        'classifier': MetaPointer("group"),
                        'containments': pa.array_literal([
                            {
                                'containment': MetaPointer("properties"),
                                'children': $['ordered list'].map(($) => $p.path + "." + $.key),
                            },
                        ]),
                        'properties': pa.array_literal([]),
                        'references': pa.array_literal([])
                    }]),
                op_flatten_list($['ordered list'].map(($) => Type_Node_2_Document_nodes(
                    $.value.node,
                    {
                        'path': $p.path + "." + $.key,
                    }
                ))),
            ])))
            case 'list': return pa.ss($, ($): _out.SerializationChunk.nodes => op_flatten_list(pa.array_literal([
                pa.array_literal([{
                    'id': $p.path,
                    'parent': pa.not_set(),
                    'annotations': pa.array_literal([]),
                    'classifier': MetaPointer("list"),
                    'containments': pa.array_literal([
                        {
                            'containment': MetaPointer("elements"),
                            'children': pa.array_literal([$p.path + ".L"]),
                        },
                    ]),
                    'properties': pa.array_literal([]),
                    'references': pa.array_literal([])
                }]),
                Type_Node_2_Document_nodes(
                    $.node,
                    {
                        'path': $p.path + ".L",
                    }
                ),
            ])))
            case 'optional': return pa.ss($, ($): _out.SerializationChunk.nodes => op_flatten_list(pa.array_literal([
                pa.array_literal([{
                    'id': $p.path,
                    'parent': pa.not_set(),
                    'annotations': pa.array_literal([]),
                    'classifier': MetaPointer("list"),
                    'containments': pa.array_literal([
                        {
                            'containment': MetaPointer("optional"),
                            'children': pa.array_literal([$p.path + ".O"]),
                        },
                    ]),
                    'properties': pa.array_literal([]),
                    'references': pa.array_literal([])
                }]),
                Type_Node_2_Document_nodes(
                    $,
                    {
                        'path': $p.path + ".O",
                    }
                ),
            ])))
            case 'state group': return pa.ss($, ($): _out.SerializationChunk.nodes => op_flatten_list(pa.array_literal([
                pa.array_literal([{
                    'id': $p.path,
                    'parent': pa.not_set(),
                    'annotations': pa.array_literal([]),
                    'classifier': MetaPointer("state group"),
                    'containments': pa.array_literal([
                        {
                            'containment': MetaPointer("states"),
                            'children': op_dictionary_to_list($).map(($) => $p.path + "." + $.key),
                        },
                    ]),
                    'properties': pa.array_literal([]),
                    'references': pa.array_literal([])
                }]),
                op_dictionary_to_list($).map(($) => ({
                    'id': $p.path,
                    'parent': pa.not_set(),
                    'annotations': pa.array_literal([]),
                    'classifier': MetaPointer("state"),
                    'containments': pa.array_literal([
                        {
                            'containment': MetaPointer("states"),
                            'children': pa.array_literal([$p.path + "." + $.key]),
                        },
                    ]),
                    'properties': pa.array_literal([
                        {
                            'value': $.key,
                            'property': MetaPointer("state"),
                        }
                    ]),
                    'references': pa.array_literal([])
                })),
                op_flatten_list(op_dictionary_to_list($).map(($) => Type_Node_2_Document_nodes(
                    $.value.node,
                    {
                        'path': $p.path + "." + $.key,
                    }
                ))),
            ])))
            default: return pa.array_literal([])
        }
    })
}


export const Schema = (
    $: _in.Schema,
): _out.SerializationChunk => {
    return {
        'serializationFormatVersion': "2023.1",
        'languages': pd.a([
            {
                'key': "LionCore-M3",
                'version': "2023.1",
            },
            {
                'key': "LionCore-builtins",
                'version': "2023.1",
            }
        ]),
        'nodes': op_flatten_list($.types['ordered list'].map(($) => Type_Node_2_Document_nodes(
            $.value.node,
            {
                'path': $.key,
            }
        ))),
    }
}