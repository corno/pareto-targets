import * as _pt from 'pareto-core-transformer'

//interface

import * as d_in from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "../../../../../interface/generated/pareto/schemas/lionweb/data_types/target"

//dependencies

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
    return _pt.list_literal([])
}

export const Type_Node_2_Document_nodes = (
    $: d_in.Type_Node,
    $p: {
        'path': string,
    }
): d_out.SerializationChunk.nodes => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'dictionary': return _pt.ss($, ($): d_out.SerializationChunk.nodes => _pt.list_literal<d_out.SerializationChunk.nodes>([
                _pt.list_literal([
                    {
                        'id': $p.path,
                        'parent': _pt.not_set(),
                        'annotations': _pt.list_literal([]),
                        'classifier': MetaPointer("dictionary"),
                        'containments': _pt.list_literal([
                            {
                                'containment': MetaPointer("entry"),
                                'children': _pt.list_literal([$p.path + ".D"]),
                            },
                        ]),
                        'properties': _pt.list_literal([]),
                        'references': _pt.list_literal([])
                    },
                    {
                        'id': $p.path + ".D",
                        'parent': _pt.not_set(),
                        'annotations': _pt.list_literal([]),
                        'classifier': MetaPointer("entry"),
                        'containments': _pt.list_literal([
                            {
                                'containment': MetaPointer("entries"),
                                'children': _pt.list_literal([$p.path + ".D"]),
                            },
                        ]),
                        'properties': _pt.list_literal([]),
                        'references': _pt.list_literal([])
                    }
                ]),
                Type_Node_2_Document_nodes(
                    $.node,
                    {
                        'path': $p.path + ".D",
                    }
                ),
            ]).flatten(($) => $))
            case 'group': return _pt.ss($, ($): d_out.SerializationChunk.nodes => _pt.list_literal<d_out.SerializationChunk.nodes>([
                _pt.list_literal([
                    {
                        'id': $p.path,
                        'parent': _pt.not_set(),
                        'annotations': _pt.list_literal([]),
                        'classifier': MetaPointer("group"),
                        'containments': _pt.list_literal([
                            {
                                'containment': MetaPointer("properties"),
                                'children': $['ordered list'].map(($) => $p.path + "." + $.key),
                            },
                        ]),
                        'properties': _pt.list_literal([]),
                        'references': _pt.list_literal([])
                    }
                ]),
                $['ordered list'].flatten(($) => Type_Node_2_Document_nodes(
                    $.value.node,
                    {
                        'path': $p.path + "." + $.key,
                    }
                )),
            ]).flatten(($) => $))
            case 'list': return _pt.ss($, ($): d_out.SerializationChunk.nodes => _pt.list_literal<d_out.SerializationChunk.nodes>([
                _pt.list_literal([{
                    'id': $p.path,
                    'parent': _pt.not_set(),
                    'annotations': _pt.list_literal([]),
                    'classifier': MetaPointer("list"),
                    'containments': _pt.list_literal([
                        {
                            'containment': MetaPointer("elements"),
                            'children': _pt.list_literal([$p.path + ".L"]),
                        },
                    ]),
                    'properties': _pt.list_literal([]),
                    'references': _pt.list_literal([])
                }]),
                Type_Node_2_Document_nodes(
                    $.node,
                    {
                        'path': $p.path + ".L",
                    }
                ),
            ]).flatten(($) => $))
            case 'optional': return _pt.ss($, ($): d_out.SerializationChunk.nodes => _pt.list_literal<d_out.SerializationChunk.nodes>([
                _pt.list_literal([{
                    'id': $p.path,
                    'parent': _pt.not_set(),
                    'annotations': _pt.list_literal([]),
                    'classifier': MetaPointer("list"),
                    'containments': _pt.list_literal([
                        {
                            'containment': MetaPointer("optional"),
                            'children': _pt.list_literal([$p.path + ".O"]),
                        },
                    ]),
                    'properties': _pt.list_literal([]),
                    'references': _pt.list_literal([])
                }]),
                Type_Node_2_Document_nodes(
                    $,
                    {
                        'path': $p.path + ".O",
                    }
                ),
            ]).flatten(($) => $))
            case 'state group': return _pt.ss($, ($): d_out.SerializationChunk.nodes => _pt.list_literal<d_out.SerializationChunk.nodes>([
                _pt.list_literal([{
                    'id': $p.path,
                    'parent': _pt.not_set(),
                    'annotations': _pt.list_literal([]),
                    'classifier': MetaPointer("state group"),
                    'containments': _pt.list_literal([
                        {
                            'containment': MetaPointer("states"),
                            'children': $.to_list(($, key) => $p.path + "." + key),
                        },
                    ]),
                    'properties': _pt.list_literal([]),
                    'references': _pt.list_literal([])
                }]),
                $.to_list(($, key) => ({
                    'id': $p.path,
                    'parent': _pt.not_set(),
                    'annotations': _pt.list_literal([]),
                    'classifier': MetaPointer("state"),
                    'containments': _pt.list_literal([
                        {
                            'containment': MetaPointer("states"),
                            'children': _pt.list_literal([$p.path + "." + key]),
                        },
                    ]),
                    'properties': _pt.list_literal([
                        {
                            'value': key,
                            'property': MetaPointer("state"),
                        }
                    ]),
                    'references': _pt.list_literal([])
                })),
                $.to_list(($, key) => Type_Node_2_Document_nodes(
                    $.node,
                    {
                        'path': $p.path + "." + key,
                    }
                )).flatten(($) => $),
            ]).flatten(($) => $))
            default: return _pt.list_literal([])
        }
    })
}


export const Schema = (
    $: d_in.Schema,
): d_out.SerializationChunk => {
    return {
        'serializationFormatVersion': "2023.1",
        'languages': _pt.list_literal([
            {
                'key': "LionCore-M3",
                'version': "2023.1",
            },
            {
                'key': "LionCore-builtins",
                'version': "2023.1",
            }
        ]),
        'nodes': $.types['ordered list'].flatten(($) => Type_Node_2_Document_nodes(
            $.value.node,
            {
                'path': $.key,
            }
        )),
    }
}