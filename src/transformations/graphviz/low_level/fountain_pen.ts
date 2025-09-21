import * as pa from 'exupery-core-alg'

import * as s_in from "../../../generated/interface/schemas/graphviz_low_level/data_types/target"
import * as s_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import {
    b, l, block,
} from "pareto-fountain-pen/dist/shorthands/block"

import { impure, pure } from "pareto-standard-operations"

const op = {
    'enrich list elements with position information': impure.list['enrich with position information'],
    'dictionary to list, sorted by code point': impure.dictionary['to list, sorted by code point'],
    'filter': pure.dictionary.filter,
    'serialize with quote delimiter': impure.text['serialize with quote delimiter'],
    'is equal to': pure.list['is equal to'],
    'is empty': impure.list['is empty'],
}

export const Graph = ($: s_in.Graph): s_out.Block => {
    return block([
        b.nested_line([
            $.strict
                ? l.snippet("strict ")
                : l.nothing(),
            pa.cc($.type, ($) => {
                switch ($[0]) {
                    case 'digraph': return pa.ss($, () => l.snippet("digraph "))
                    case 'graph': return pa.ss($, () => l.snippet("graph "))
                    default: return pa.au($[0])
                }
            }),
            $.name.transform(
                ($) => l.sub([
                    ID($),
                    l.snippet(" "),
                ]),
                () => l.nothing()
            ),
            Statement_List($.statements, {
                'graph type': $.type
            }),
        ]),
    ])
}

export const Statement_List = (
    $: s_in.Statement_List,
    $p: {
        'graph type': s_in.Graph._type
    }
): s_out.Line_Part => {
    return l.sub([
        l.snippet("{"),
        l.indent([
            b.sub_decorated($.map(($) => {
                return b.nested_line([
                    pa.cc($, ($) => {
                        switch ($[0]) {
                            case 'attribute assignment': return pa.ss($, ($) => l.sub([
                                ID($.name),
                                l.snippet(" = "),
                                ID($.value),
                                l.snippet(";"),
                            ]))
                            case 'attribute list': return pa.ss($, ($) => l.sub([
                                pa.cc($.type, ($) => {
                                    switch ($[0]) {
                                        case 'edge': return pa.ss($, () => l.snippet("edge "))
                                        case 'node': return pa.ss($, () => l.snippet("node "))
                                        case 'graph': return pa.ss($, () => l.snippet("graph "))
                                        default: return pa.au($[0])
                                    }
                                }),
                                Attribute_List($.attributes),
                                l.snippet(";"),
                            ]))
                            case 'edge': return pa.ss($, ($) => l.sub([
                                pa.cc($.left, ($) => {
                                    switch ($[0]) {
                                        case 'node': return pa.ss($, ($) => Node_ID($))
                                        case 'subgraph': return pa.ss($, ($) => Subgraph($, $p))
                                        default: return pa.au($[0])
                                    }
                                }),
                                pa.cc($p['graph type'], ($) => {
                                    switch ($[0]) {
                                        case 'digraph': return pa.ss($, () => l.snippet(" -> "))
                                        case 'graph': return pa.ss($, () => l.snippet(" -- "))
                                        default: return pa.au($[0])
                                    }
                                }),
                                l.sub_decorated(op['enrich list elements with position information']($.right).map(($) => {
                                    return l.sub([
                                        pa.cc($.value, ($) => {
                                            switch ($[0]) {
                                                case 'node': return pa.ss($, ($) => Node_ID($))
                                                case 'subgraph': return pa.ss($, ($) => Subgraph($, $p))
                                                default: return pa.au($[0])
                                            }
                                        }),
                                        $['is last']
                                            ? l.nothing()
                                            : l.snippet(", "),
                                    ])
                                })),
                                Attribute_List($.attributes),
                            ]))
                            case 'node': return pa.ss($, ($) => l.sub([
                                Node_ID($.node),
                                op['is empty']($['attribute list'])
                                    ? l.nothing()
                                    : Attribute_List($['attribute list']),
                                l.snippet(";"),
                            ]))
                            case 'subgraph': return pa.ss($, ($) => Subgraph($, $p))
                            default: return pa.au($[0])
                        }
                    })
                ])
            })),
        ]),
        l.snippet("}"),
    ])
}

export const ID = ($: s_in.ID): s_out.Line_Part => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'id': return pa.ss($, ($) => l.snippet($)) //FIX escaping
            case 'string': return pa.ss($, ($) => l.snippet(op['serialize with quote delimiter']($)))
            case 'html': return pa.ss($, ($) => l.snippet($))
            case 'number': return pa.ss($, ($) => l.snippet("FIXME NUMBER"))
            default: return pa.au($[0])
        }
    })
}

export const Attribute_List = ($: s_in.Attribute_List): s_out.Line_Part => {
    return l.sub([
        l.snippet(" [ "),
            l.sub_decorated($.map(($) => {
                return l.sub([
                    ID($.name),
                    l.snippet("="),
                    ID($.value),
                    l.snippet(" "),
                ])
            })),
        l.snippet("]"),
    ])
}

export const Node_ID = ($: s_in.Node_ID): s_out.Line_Part => {
    return l.sub([
        ID($.id),
        $.port.transform(
            ($) => l.sub([
                l.snippet(":"),
                ID($.port),
                $['compass point'].transform(
                    ($) => l.sub([
                        l.snippet(":"),
                        ID($),
                    ]),
                    () => l.nothing()
                ),
            ]),
            () => l.nothing()
        ),
    ])
}

export const Subgraph = (
    $: s_in.Subgraph,
    $p: {
        'graph type': s_in.Graph._type
    }
): s_out.Line_Part => {
    return l.sub([
        $.subgraph.transform(
            ($) => l.sub([
                l.snippet("subgraph "),
                $.transform(
                    ($) => l.sub([
                        ID($),
                        l.snippet(" "),
                    ]),
                    () => l.nothing()
                ),
            ]),
            () => l.nothing()
        ),
        Statement_List($.statements, {
            'graph type': $p['graph type']
        }),
    ])
}