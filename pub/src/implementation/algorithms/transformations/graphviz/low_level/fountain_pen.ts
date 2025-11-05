import * as _ea from 'exupery-core-alg'

import * as d_in from "../../../../../interface/generated/pareto/schemas/graphviz_low_level/data_types/target"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_serialize_with_quote_delimiter } from "../../../operations/impure/text/serialize_quoted_string"
import { $$ as op_is_empty } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/is_empty"
import { $$ as op_enrich_list_elements_with_position_information } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/enrich_with_position_information"
import { Signature } from "../../../../../interface/algorithms/transformations/graphviz/low_level/fountain_pen"


export const Graph = ($: d_in.Graph): d_out.Group => {
    return sh.group([
        sh.g.nested_block([
            $.strict
                ? sh.b.snippet("strict ")
                : sh.b.nothing(),
            _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'digraph': return _ea.ss($, () => sh.b.snippet("digraph "))
                    case 'graph': return _ea.ss($, () => sh.b.snippet("graph "))
                    default: return _ea.au($[0])
                }
            }),
            $.name.transform(
                ($) => sh.b.sub([
                    ID($),
                    sh.b.snippet(" "),
                ]),
                () => sh.b.nothing()
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
): d_out.Block_Part => {
    return sh.b.sub([
        sh.b.snippet("{"),
        sh.b.indent([
            sh.g.sub($.map(($) => {
                return sh.g.nested_block([
                    _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'attribute assignment': return _ea.ss($, ($) => sh.b.sub([
                                ID($.name),
                                sh.b.snippet(" = "),
                                ID($.value),
                                sh.b.snippet(";"),
                            ]))
                            case 'attribute list': return _ea.ss($, ($) => sh.b.sub([
                                _ea.cc($.type, ($) => {
                                    switch ($[0]) {
                                        case 'edge': return _ea.ss($, () => sh.b.snippet("edge "))
                                        case 'node': return _ea.ss($, () => sh.b.snippet("node "))
                                        case 'graph': return _ea.ss($, () => sh.b.snippet("graph "))
                                        default: return _ea.au($[0])
                                    }
                                }),
                                Attribute_List($.attributes),
                                sh.b.snippet(";"),
                            ]))
                            case 'edge': return _ea.ss($, ($) => sh.b.sub([
                                _ea.cc($.left, ($) => {
                                    switch ($[0]) {
                                        case 'node': return _ea.ss($, ($) => Node_ID($))
                                        case 'subgraph': return _ea.ss($, ($) => Subgraph($, $p))
                                        default: return _ea.au($[0])
                                    }
                                }),
                                _ea.cc($p['graph type'], ($) => {
                                    switch ($[0]) {
                                        case 'digraph': return _ea.ss($, () => sh.b.snippet(" -> "))
                                        case 'graph': return _ea.ss($, () => sh.b.snippet(" -- "))
                                        default: return _ea.au($[0])
                                    }
                                }),
                               sh.b.sub(op_enrich_list_elements_with_position_information($.right).map(($) => {
                                    return sh.b.sub([
                                        _ea.cc($.value, ($) => {
                                            switch ($[0]) {
                                                case 'node': return _ea.ss($, ($) => Node_ID($))
                                                case 'subgraph': return _ea.ss($, ($) => Subgraph($, $p))
                                                default: return _ea.au($[0])
                                            }
                                        }),
                                        $['is last']
                                            ? sh.b.nothing()
                                            : sh.b.snippet(", "),
                                    ])
                                })),
                                Attribute_List($.attributes),
                            ]))
                            case 'node': return _ea.ss($, ($) => sh.b.sub([
                                Node_ID($.node),
                                op_is_empty($['attribute list'])
                                    ? sh.b.nothing()
                                    : Attribute_List($['attribute list']),
                                sh.b.snippet(";"),
                            ]))
                            case 'subgraph': return _ea.ss($, ($) => Subgraph($, $p))
                            default: return _ea.au($[0])
                        }
                    })
                ])
            })),
        ]),
        sh.b.snippet("}"),
    ])
}

export const ID = ($: d_in.ID): d_out.Block_Part => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'id': return _ea.ss($, ($) => sh.b.snippet($)) //FIX escaping
            case 'string': return _ea.ss($, ($) => sh.b.snippet(op_serialize_with_quote_delimiter($)))
            case 'html': return _ea.ss($, ($) => sh.b.snippet($))
            case 'number': return _ea.ss($, ($) => sh.b.snippet("FIXME NUMBER"))
            default: return _ea.au($[0])
        }
    })
}

export const Attribute_List = ($: d_in.Attribute_List): d_out.Block_Part => {
    return sh.b.sub([
        sh.b.snippet(" [ "),
           sh.b.sub($.map(($) => {
                return sh.b.sub([
                    ID($.name),
                    sh.b.snippet("="),
                    ID($.value),
                    sh.b.snippet(" "),
                ])
            })),
        sh.b.snippet("]"),
    ])
}

export const Node_ID = ($: d_in.Node_ID): d_out.Block_Part => {
    return sh.b.sub([
        ID($.id),
        $.port.transform(
            ($) => sh.b.sub([
                sh.b.snippet(":"),
                ID($.port),
                $['compass point'].transform(
                    ($) => sh.b.sub([
                        sh.b.snippet(":"),
                        ID($),
                    ]),
                    () => sh.b.nothing()
                ),
            ]),
            () => sh.b.nothing()
        ),
    ])
}

export const Subgraph = (
    $: d_in.Subgraph,
    $p: {
        'graph type': d_in.Graph._type
    }
): d_out.Block_Part => {
    return sh.b.sub([
        $.subgraph.transform(
            ($) => sh.b.sub([
                sh.b.snippet("subgraph "),
                $.transform(
                    ($) => sh.b.sub([
                        ID($),
                        sh.b.snippet(" "),
                    ]),
                    () => sh.b.nothing()
                ),
            ]),
            () => sh.b.nothing()
        ),
        Statement_List($.statements, {
            'graph type': $p['graph type']
        }),
    ])
}