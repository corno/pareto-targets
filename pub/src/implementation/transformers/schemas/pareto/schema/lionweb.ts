import * as _ed from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

//interface

import * as d_in from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "../../../../../interface/generated/pareto/schemas/lionweb/data_types/target"

//dependencies

import { $$ as op_flatten_list } from "pareto-standard-operations/dist/implementation/operations/pure/list/flatten"


export const MetaPointer = (
    $: string,
): d_out.MetaPointer => ({
    'language': "astn",
    'version': "0.1",
    'key': $,
})

export const Type_Node_2_properties = (
    $: d_in.Type_Node,
    $p: {
        'path': string,
    }
): d_out.SerializationChunk.nodes.L.properties => {
    return _ea.list_literal([])
}

export const Type_Node_2_Document_nodes = (
    $: d_in.Type_Node,
    $p: {
        'path': string,
    }
): d_out.SerializationChunk.nodes => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'dictionary': return _ea.ss($, ($): d_out.SerializationChunk.nodes => op_flatten_list(_ea.list_literal([
                _ea.list_literal([
                    {
                        'id': $p.path,
                        'parent': _ea.not_set(),
                        'annotations': _ea.list_literal([]),
                        'classifier': MetaPointer("dictionary"),
                        'containments': _ea.list_literal([
                            {
                                'containment': MetaPointer("entry"),
                                'children': _ea.list_literal([$p.path + ".D"]),
                            },
                        ]),
                        'properties': _ea.list_literal([]),
                        'references': _ea.list_literal([])
                    },
                    {
                        'id': $p.path + ".D",
                        'parent': _ea.not_set(),
                        'annotations': _ea.list_literal([]),
                        'classifier': MetaPointer("entry"),
                        'containments': _ea.list_literal([
                            {
                                'containment': MetaPointer("entries"),
                                'children': _ea.list_literal([$p.path + ".D"]),
                            },
                        ]),
                        'properties': _ea.list_literal([]),
                        'references': _ea.list_literal([])
                    }
                ]),
                Type_Node_2_Document_nodes(
                    $.node,
                    {
                        'path': $p.path + ".D",
                    }
                ),
            ])))
            case 'group': return _ea.ss($, ($): d_out.SerializationChunk.nodes => op_flatten_list(_ea.list_literal([
                _ea.list_literal([
                    {
                        'id': $p.path,
                        'parent': _ea.not_set(),
                        'annotations': _ea.list_literal([]),
                        'classifier': MetaPointer("group"),
                        'containments': _ea.list_literal([
                            {
                                'containment': MetaPointer("properties"),
                                'children': $['ordered list'].map(($) => $p.path + "." + $.key),
                            },
                        ]),
                        'properties': _ea.list_literal([]),
                        'references': _ea.list_literal([])
                    }]),
                op_flatten_list($['ordered list'].map(($) => Type_Node_2_Document_nodes(
                    $.value.node,
                    {
                        'path': $p.path + "." + $.key,
                    }
                ))),
            ])))
            case 'list': return _ea.ss($, ($): d_out.SerializationChunk.nodes => op_flatten_list(_ea.list_literal([
                _ea.list_literal([{
                    'id': $p.path,
                    'parent': _ea.not_set(),
                    'annotations': _ea.list_literal([]),
                    'classifier': MetaPointer("list"),
                    'containments': _ea.list_literal([
                        {
                            'containment': MetaPointer("elements"),
                            'children': _ea.list_literal([$p.path + ".L"]),
                        },
                    ]),
                    'properties': _ea.list_literal([]),
                    'references': _ea.list_literal([])
                }]),
                Type_Node_2_Document_nodes(
                    $.node,
                    {
                        'path': $p.path + ".L",
                    }
                ),
            ])))
            case 'optional': return _ea.ss($, ($): d_out.SerializationChunk.nodes => op_flatten_list(_ea.list_literal([
                _ea.list_literal([{
                    'id': $p.path,
                    'parent': _ea.not_set(),
                    'annotations': _ea.list_literal([]),
                    'classifier': MetaPointer("list"),
                    'containments': _ea.list_literal([
                        {
                            'containment': MetaPointer("optional"),
                            'children': _ea.list_literal([$p.path + ".O"]),
                        },
                    ]),
                    'properties': _ea.list_literal([]),
                    'references': _ea.list_literal([])
                }]),
                Type_Node_2_Document_nodes(
                    $,
                    {
                        'path': $p.path + ".O",
                    }
                ),
            ])))
            case 'state group': return _ea.ss($, ($): d_out.SerializationChunk.nodes => op_flatten_list(_ea.list_literal([
                _ea.list_literal([{
                    'id': $p.path,
                    'parent': _ea.not_set(),
                    'annotations': _ea.list_literal([]),
                    'classifier': MetaPointer("state group"),
                    'containments': _ea.list_literal([
                        {
                            'containment': MetaPointer("states"),
                            'children': $.to_list(($, key) => $p.path + "." + key),
                        },
                    ]),
                    'properties': _ea.list_literal([]),
                    'references': _ea.list_literal([])
                }]),
                $.to_list(($, key) => ({
                    'id': $p.path,
                    'parent': _ea.not_set(),
                    'annotations': _ea.list_literal([]),
                    'classifier': MetaPointer("state"),
                    'containments': _ea.list_literal([
                        {
                            'containment': MetaPointer("states"),
                            'children': _ea.list_literal([$p.path + "." + key]),
                        },
                    ]),
                    'properties': _ea.list_literal([
                        {
                            'value': key,
                            'property': MetaPointer("state"),
                        }
                    ]),
                    'references': _ea.list_literal([])
                })),
                op_flatten_list($.to_list(($, key) => Type_Node_2_Document_nodes(
                    $.node,
                    {
                        'path': $p.path + "." + key,
                    }
                ))),
            ])))
            default: return _ea.list_literal([])
        }
    })
}


export const Schema = (
    $: d_in.Schema,
): d_out.SerializationChunk => {
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