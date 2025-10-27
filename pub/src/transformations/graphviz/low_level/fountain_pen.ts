import * as pa from 'exupery-core-alg'

import * as d_in from "../../../generated/interface/schemas/graphviz_low_level/data_types/target"
import * as d_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_serialize_with_quote_delimiter } from "../../../operations/impure/text/serialize_quoted_string"
import { $$ as op_is_empty } from "pareto-standard-operations/dist/operations/impure/list/is_empty"
import { $$ as op_enrich_list_elements_with_position_information } from "pareto-standard-operations/dist/operations/impure/list/enrich_with_position_information"

export const Graph = ($: d_in.Graph): d_out.Group => {
    return sh.group([
        sh.g.nested_line([
            $.strict
                ? sh.l.snippet("strict ")
                : sh.l.nothing(),
            pa.cc($.type, ($) => {
                switch ($[0]) {
                    case 'digraph': return pa.ss($, () => sh.l.snippet("digraph "))
                    case 'graph': return pa.ss($, () => sh.l.snippet("graph "))
                    default: return pa.au($[0])
                }
            }),
            $.name.transform(
                ($) => sh.l.sub([
                    ID($),
                    sh.l.snippet(" "),
                ]),
                () => sh.l.nothing()
            ),
            Statement_List($.statements, {
                'graph type': $.type
            }),
        ]),
    ])
}

export const Statement_List = (
    $: d_in.Statement_List,
    $p: {
        'graph type': d_in.Graph._type
    }
): d_out.Line_Part => {
    return sh.l.sub([
        sh.l.snippet("{"),
        sh.l.indent([
            sh.g.sub($.map(($) => {
                return sh.g.nested_line([
                    pa.cc($, ($) => {
                        switch ($[0]) {
                            case 'attribute assignment': return pa.ss($, ($) => sh.l.sub([
                                ID($.name),
                                sh.l.snippet(" = "),
                                ID($.value),
                                sh.l.snippet(";"),
                            ]))
                            case 'attribute list': return pa.ss($, ($) => sh.l.sub([
                                pa.cc($.type, ($) => {
                                    switch ($[0]) {
                                        case 'edge': return pa.ss($, () => sh.l.snippet("edge "))
                                        case 'node': return pa.ss($, () => sh.l.snippet("node "))
                                        case 'graph': return pa.ss($, () => sh.l.snippet("graph "))
                                        default: return pa.au($[0])
                                    }
                                }),
                                Attribute_List($.attributes),
                                sh.l.snippet(";"),
                            ]))
                            case 'edge': return pa.ss($, ($) => sh.l.sub([
                                pa.cc($.left, ($) => {
                                    switch ($[0]) {
                                        case 'node': return pa.ss($, ($) => Node_ID($))
                                        case 'subgraph': return pa.ss($, ($) => Subgraph($, $p))
                                        default: return pa.au($[0])
                                    }
                                }),
                                pa.cc($p['graph type'], ($) => {
                                    switch ($[0]) {
                                        case 'digraph': return pa.ss($, () => sh.l.snippet(" -> "))
                                        case 'graph': return pa.ss($, () => sh.l.snippet(" -- "))
                                        default: return pa.au($[0])
                                    }
                                }),
                               sh.l.sub(op_enrich_list_elements_with_position_information($.right).map(($) => {
                                    return sh.l.sub([
                                        pa.cc($.value, ($) => {
                                            switch ($[0]) {
                                                case 'node': return pa.ss($, ($) => Node_ID($))
                                                case 'subgraph': return pa.ss($, ($) => Subgraph($, $p))
                                                default: return pa.au($[0])
                                            }
                                        }),
                                        $['is last']
                                            ? sh.l.nothing()
                                            : sh.l.snippet(", "),
                                    ])
                                })),
                                Attribute_List($.attributes),
                            ]))
                            case 'node': return pa.ss($, ($) => sh.l.sub([
                                Node_ID($.node),
                                op_is_empty($['attribute list'])
                                    ? sh.l.nothing()
                                    : Attribute_List($['attribute list']),
                                sh.l.snippet(";"),
                            ]))
                            case 'subgraph': return pa.ss($, ($) => Subgraph($, $p))
                            default: return pa.au($[0])
                        }
                    })
                ])
            })),
        ]),
        sh.l.snippet("}"),
    ])
}

export const ID = ($: d_in.ID): d_out.Line_Part => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'id': return pa.ss($, ($) => sh.l.snippet($)) //FIX escaping
            case 'string': return pa.ss($, ($) => sh.l.snippet(op_serialize_with_quote_delimiter($)))
            case 'html': return pa.ss($, ($) => sh.l.snippet($))
            case 'number': return pa.ss($, ($) => sh.l.snippet("FIXME NUMBER"))
            default: return pa.au($[0])
        }
    })
}

export const Attribute_List = ($: d_in.Attribute_List): d_out.Line_Part => {
    return sh.l.sub([
        sh.l.snippet(" [ "),
           sh.l.sub($.map(($) => {
                return sh.l.sub([
                    ID($.name),
                    sh.l.snippet("="),
                    ID($.value),
                    sh.l.snippet(" "),
                ])
            })),
        sh.l.snippet("]"),
    ])
}

export const Node_ID = ($: d_in.Node_ID): d_out.Line_Part => {
    return sh.l.sub([
        ID($.id),
        $.port.transform(
            ($) => sh.l.sub([
                sh.l.snippet(":"),
                ID($.port),
                $['compass point'].transform(
                    ($) => sh.l.sub([
                        sh.l.snippet(":"),
                        ID($),
                    ]),
                    () => sh.l.nothing()
                ),
            ]),
            () => sh.l.nothing()
        ),
    ])
}

export const Subgraph = (
    $: d_in.Subgraph,
    $p: {
        'graph type': d_in.Graph._type
    }
): d_out.Line_Part => {
    return sh.l.sub([
        $.subgraph.transform(
            ($) => sh.l.sub([
                sh.l.snippet("subgraph "),
                $.transform(
                    ($) => sh.l.sub([
                        ID($),
                        sh.l.snippet(" "),
                    ]),
                    () => sh.l.nothing()
                ),
            ]),
            () => sh.l.nothing()
        ),
        Statement_List($.statements, {
            'graph type': $p['graph type']
        }),
    ])
}