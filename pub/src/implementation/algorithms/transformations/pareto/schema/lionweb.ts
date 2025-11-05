import * as _ed from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

import * as _in from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as _in_m from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as _out from "../../../../../interface/generated/pareto/schemas/lionweb/data_types/target"

import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_flatten_list } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/flatten"
import { Signature } from "../../../../../interface/algorithms/transformations/pareto/schema/lionweb"


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
    return _ea.array_literal([])
}

export const Type_Node_2_Document_nodes = (
    $: _in.Type_Node,
    $p: {
        'path': string,
    }
): _out.SerializationChunk.nodes => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'dictionary': return _ea.ss($, ($): _out.SerializationChunk.nodes => op_flatten_list(_ea.array_literal([
                _ea.array_literal([
                    {
                        'id': $p.path,
                        'parent': _ea.not_set(),
                        'annotations': _ea.array_literal([]),
                        'classifier': MetaPointer("dictionary"),
                        'containments': _ea.array_literal([
                            {
                                'containment': MetaPointer("entry"),
                                'children': _ea.array_literal([$p.path + ".D"]),
                            },
                        ]),
                        'properties': _ea.array_literal([]),
                        'references': _ea.array_literal([])
                    },
                    {
                        'id': $p.path + ".D",
                        'parent': _ea.not_set(),
                        'annotations': _ea.array_literal([]),
                        'classifier': MetaPointer("entry"),
                        'containments': _ea.array_literal([
                            {
                                'containment': MetaPointer("entries"),
                                'children': _ea.array_literal([$p.path + ".D"]),
                            },
                        ]),
                        'properties': _ea.array_literal([]),
                        'references': _ea.array_literal([])
                    }
                ]),
                Type_Node_2_Document_nodes(
                    $.node,
                    {
                        'path': $p.path + ".D",
                    }
                ),
            ])))
            case 'group': return _ea.ss($, ($): _out.SerializationChunk.nodes => op_flatten_list(_ea.array_literal([
                _ea.array_literal([
                    {
                        'id': $p.path,
                        'parent': _ea.not_set(),
                        'annotations': _ea.array_literal([]),
                        'classifier': MetaPointer("group"),
                        'containments': _ea.array_literal([
                            {
                                'containment': MetaPointer("properties"),
                                'children': $['ordered list'].map(($) => $p.path + "." + $.key),
                            },
                        ]),
                        'properties': _ea.array_literal([]),
                        'references': _ea.array_literal([])
                    }]),
                op_flatten_list($['ordered list'].map(($) => Type_Node_2_Document_nodes(
                    $.value.node,
                    {
                        'path': $p.path + "." + $.key,
                    }
                ))),
            ])))
            case 'list': return _ea.ss($, ($): _out.SerializationChunk.nodes => op_flatten_list(_ea.array_literal([
                _ea.array_literal([{
                    'id': $p.path,
                    'parent': _ea.not_set(),
                    'annotations': _ea.array_literal([]),
                    'classifier': MetaPointer("list"),
                    'containments': _ea.array_literal([
                        {
                            'containment': MetaPointer("elements"),
                            'children': _ea.array_literal([$p.path + ".L"]),
                        },
                    ]),
                    'properties': _ea.array_literal([]),
                    'references': _ea.array_literal([])
                }]),
                Type_Node_2_Document_nodes(
                    $.node,
                    {
                        'path': $p.path + ".L",
                    }
                ),
            ])))
            case 'optional': return _ea.ss($, ($): _out.SerializationChunk.nodes => op_flatten_list(_ea.array_literal([
                _ea.array_literal([{
                    'id': $p.path,
                    'parent': _ea.not_set(),
                    'annotations': _ea.array_literal([]),
                    'classifier': MetaPointer("list"),
                    'containments': _ea.array_literal([
                        {
                            'containment': MetaPointer("optional"),
                            'children': _ea.array_literal([$p.path + ".O"]),
                        },
                    ]),
                    'properties': _ea.array_literal([]),
                    'references': _ea.array_literal([])
                }]),
                Type_Node_2_Document_nodes(
                    $,
                    {
                        'path': $p.path + ".O",
                    }
                ),
            ])))
            case 'state group': return _ea.ss($, ($): _out.SerializationChunk.nodes => op_flatten_list(_ea.array_literal([
                _ea.array_literal([{
                    'id': $p.path,
                    'parent': _ea.not_set(),
                    'annotations': _ea.array_literal([]),
                    'classifier': MetaPointer("state group"),
                    'containments': _ea.array_literal([
                        {
                            'containment': MetaPointer("states"),
                            'children': op_dictionary_to_list($).map(($) => $p.path + "." + $.key),
                        },
                    ]),
                    'properties': _ea.array_literal([]),
                    'references': _ea.array_literal([])
                }]),
                op_dictionary_to_list($).map(($) => ({
                    'id': $p.path,
                    'parent': _ea.not_set(),
                    'annotations': _ea.array_literal([]),
                    'classifier': MetaPointer("state"),
                    'containments': _ea.array_literal([
                        {
                            'containment': MetaPointer("states"),
                            'children': _ea.array_literal([$p.path + "." + $.key]),
                        },
                    ]),
                    'properties': _ea.array_literal([
                        {
                            'value': $.key,
                            'property': MetaPointer("state"),
                        }
                    ]),
                    'references': _ea.array_literal([])
                })),
                op_flatten_list(op_dictionary_to_list($).map(($) => Type_Node_2_Document_nodes(
                    $.value.node,
                    {
                        'path': $p.path + "." + $.key,
                    }
                ))),
            ])))
            default: return _ea.array_literal([])
        }
    })
}


export const Schema = (
    $: _in.Schema,
): _out.SerializationChunk => {
    return {
        'serializationFormatVersion': "2023.1",
        'languages': _ed.a([
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