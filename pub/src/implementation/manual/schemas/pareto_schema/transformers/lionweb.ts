import * as _p from 'pareto-core-transformer'

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
): d_out.SerializationChunk.nodes.L.properties => _p.list.literal([])

export const Type_Node_2_Document_nodes = (
    $: d_in.Type_Node,
    $p: {
        'path': string,
    }
): d_out.SerializationChunk.nodes => _p.cc($, ($) => {
    switch ($[0]) {
        case 'dictionary': return _p.ss($, ($): d_out.SerializationChunk.nodes => _p.list.literal<d_out.SerializationChunk.nodes>([
            _p.list.literal([
                {
                    'id': $p.path,
                    'parent': _p.optional.not_set(),
                    'annotations': _p.list.literal([]),
                    'classifier': MetaPointer("dictionary"),
                    'containments': _p.list.literal([
                        {
                            'containment': MetaPointer("entry"),
                            'children': _p.list.literal([$p.path + ".D"]),
                        },
                    ]),
                    'properties': _p.list.literal([]),
                    'references': _p.list.literal([])
                },
                {
                    'id': $p.path + ".D",
                    'parent': _p.optional.not_set(),
                    'annotations': _p.list.literal([]),
                    'classifier': MetaPointer("entry"),
                    'containments': _p.list.literal([
                        {
                            'containment': MetaPointer("entries"),
                            'children': _p.list.literal([$p.path + ".D"]),
                        },
                    ]),
                    'properties': _p.list.literal([]),
                    'references': _p.list.literal([])
                }
            ]),
            Type_Node_2_Document_nodes(
                $.node,
                {
                    'path': $p.path + ".D",
                }
            ),
        ]).flatten(($) => $))
        case 'group': return _p.ss($, ($): d_out.SerializationChunk.nodes => _p.list.literal<d_out.SerializationChunk.nodes>([
            _p.list.literal([
                {
                    'id': $p.path,
                    'parent': _p.optional.not_set(),
                    'annotations': _p.list.literal([]),
                    'classifier': MetaPointer("group"),
                    'containments': _p.list.literal([
                        {
                            'containment': MetaPointer("properties"),
                            'children': $['ordered list'].map(($) => $p.path + "." + $.key),
                        },
                    ]),
                    'properties': _p.list.literal([]),
                    'references': _p.list.literal([])
                }
            ]),
            $['ordered list'].flatten(($) => Type_Node_2_Document_nodes(
                $.value.node,
                {
                    'path': $p.path + "." + $.key,
                }
            )),
        ]).flatten(($) => $))
        case 'list': return _p.ss($, ($): d_out.SerializationChunk.nodes => _p.list.literal<d_out.SerializationChunk.nodes>([
            _p.list.literal([{
                'id': $p.path,
                'parent': _p.optional.not_set(),
                'annotations': _p.list.literal([]),
                'classifier': MetaPointer("list"),
                'containments': _p.list.literal([
                    {
                        'containment': MetaPointer("elements"),
                        'children': _p.list.literal([$p.path + ".L"]),
                    },
                ]),
                'properties': _p.list.literal([]),
                'references': _p.list.literal([])
            }]),
            Type_Node_2_Document_nodes(
                $.node,
                {
                    'path': $p.path + ".L",
                }
            ),
        ]).flatten(($) => $))
        case 'optional': return _p.ss($, ($): d_out.SerializationChunk.nodes => _p.list.literal<d_out.SerializationChunk.nodes>([
            _p.list.literal([{
                'id': $p.path,
                'parent': _p.optional.not_set(),
                'annotations': _p.list.literal([]),
                'classifier': MetaPointer("list"),
                'containments': _p.list.literal([
                    {
                        'containment': MetaPointer("optional"),
                        'children': _p.list.literal([$p.path + ".O"]),
                    },
                ]),
                'properties': _p.list.literal([]),
                'references': _p.list.literal([])
            }]),
            Type_Node_2_Document_nodes(
                $,
                {
                    'path': $p.path + ".O",
                }
            ),
        ]).flatten(($) => $))
        case 'state group': return _p.ss($, ($): d_out.SerializationChunk.nodes => _p.list.literal<d_out.SerializationChunk.nodes>([
            _p.list.literal([{
                'id': $p.path,
                'parent': _p.optional.not_set(),
                'annotations': _p.list.literal([]),
                'classifier': MetaPointer("state group"),
                'containments': _p.list.literal([
                    {
                        'containment': MetaPointer("states"),
                        'children': $.to_list(($, key) => $p.path + "." + key),
                    },
                ]),
                'properties': _p.list.literal([]),
                'references': _p.list.literal([])
            }]),
            $.to_list(($, key) => ({
                'id': $p.path,
                'parent': _p.optional.not_set(),
                'annotations': _p.list.literal([]),
                'classifier': MetaPointer("state"),
                'containments': _p.list.literal([
                    {
                        'containment': MetaPointer("states"),
                        'children': _p.list.literal([$p.path + "." + key]),
                    },
                ]),
                'properties': _p.list.literal([
                    {
                        'value': key,
                        'property': MetaPointer("state"),
                    }
                ]),
                'references': _p.list.literal([])
            })),
            $.to_list(($, key) => Type_Node_2_Document_nodes(
                $.node,
                {
                    'path': $p.path + "." + key,
                }
            )).flatten(($) => $),
        ]).flatten(($) => $))
        default: return _p.list.literal([])
    }
})


export const Schema = (
    $: d_in.Schema,
): d_out.SerializationChunk => ({
    'serializationFormatVersion': "2023.1",
    'languages': _p.list.literal([
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
})