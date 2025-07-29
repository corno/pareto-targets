import * as pd from 'exupery-core-data'
import * as pa from 'exupery-core-alg'

import * as _in from "pareto/dist/generated/interface/schemas/schema/resolved"
import * as _in_m from "pareto/dist/generated/interface/schemas/module/resolved"
import * as _out from "../../../generated/interface/schemas/lionweb/unconstrained"


import { pure, impure } from "pareto-standard-operations"

const op = {
    'flatten list': pure.list.flatten,
    'dictionary to list': impure.dictionary['to list, sorted by code point']
}

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
            case 'dictionary': return pa.ss($, ($): _out.SerializationChunk.nodes => op['flatten list'](pa.array_literal([
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
            case 'group': return pa.ss($, ($): _out.SerializationChunk.nodes => op['flatten list'](pa.array_literal([
                pa.array_literal([
                    {
                        'id': $p.path,
                        'parent': pa.not_set(),
                        'annotations': pa.array_literal([]),
                        'classifier': MetaPointer("group"),
                        'containments': pa.array_literal([
                            {
                                'containment': MetaPointer("properties"),
                                'children': op['dictionary to list']($).map(($) => $p.path + "." + $.key),
                            },
                        ]),
                        'properties': pa.array_literal([]),
                        'references': pa.array_literal([])
                    }]),
                op['flatten list'](op['dictionary to list']($).map(($) => Type_Node_2_Document_nodes(
                    $.value,
                    {
                        'path': $p.path + "." + $.key,
                    }
                ))),
            ])))
            case 'list': return pa.ss($, ($): _out.SerializationChunk.nodes => op['flatten list'](pa.array_literal([
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
            case 'optional': return pa.ss($, ($): _out.SerializationChunk.nodes => op['flatten list'](pa.array_literal([
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
            case 'state group': return pa.ss($, ($): _out.SerializationChunk.nodes => op['flatten list'](pa.array_literal([
                pa.array_literal([{
                    'id': $p.path,
                    'parent': pa.not_set(),
                    'annotations': pa.array_literal([]),
                    'classifier': MetaPointer("state group"),
                    'containments': pa.array_literal([
                        {
                            'containment': MetaPointer("states"),
                            'children': op['dictionary to list']($).map(($) => $p.path + "." + $.key),
                        },
                    ]),
                    'properties': pa.array_literal([]),
                    'references': pa.array_literal([])
                }]),
                op['dictionary to list']($).map(($) => ({
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
                op['flatten list'](op['dictionary to list']($).map(($) => Type_Node_2_Document_nodes(
                    $.value,
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
    $: _in.Schemas.D.SG.schema,
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
        'nodes': op['flatten list']($.types['ordered list'].map(($) => Type_Node_2_Document_nodes(
            $.value.node,
            {
                'path': $.key,
            }
        ))),
    }
}