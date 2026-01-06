import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/graphviz_low_level/data_types/target"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

type Parameters = {
    'graph type': d_in.Graph._type
}

namespace signatures {
    export type Graph = _pi.Transformer<d_in.Graph, d_out.Group>
    export type Statement_List = _pi.Transformer_With_Parameters<d_in.Statement_List, d_out.Block_Part, Parameters>
    export type ID = _pi.Transformer<d_in.ID, d_out.Block_Part>
    export type Attribute_List = _pi.Transformer<d_in.Attribute_List, d_out.Block_Part>
    export type Node_ID = _pi.Transformer<d_in.Node_ID, d_out.Block_Part>
    export type Subgraph = _pi.Transformer_With_Parameters<d_in.Subgraph, d_out.Block_Part, Parameters>
}

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"


//dependencies
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted"
import { $$ as op_enrich_list_elements_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"


export const Graph: signatures.Graph = ($) => sh.group([
    sh.g.nested_block([
        $.strict
            ? sh.b.snippet("strict ")
            : sh.b.nothing(),
        _p.sg($.type, ($) => {
            switch ($[0]) {
                case 'digraph': return _p.ss($, () => sh.b.snippet("digraph "))
                case 'graph': return _p.ss($, () => sh.b.snippet("graph "))
                default: return _p.au($[0])
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

export const Statement_List: signatures.Statement_List = ($, $p) => sh.b.sub([
    sh.b.snippet("{"),
    sh.b.indent([
        sh.g.sub($.map(($) => sh.g.nested_block([
            _p.sg($, ($) => {
                switch ($[0]) {
                    case 'attribute assignment': return _p.ss($, ($) => sh.b.sub([
                        ID($.name),
                        sh.b.snippet(" = "),
                        ID($.value),
                        sh.b.snippet(";"),
                    ]))
                    case 'attribute list': return _p.ss($, ($) => sh.b.sub([
                        _p.sg($.type, ($) => {
                            switch ($[0]) {
                                case 'edge': return _p.ss($, () => sh.b.snippet("edge "))
                                case 'node': return _p.ss($, () => sh.b.snippet("node "))
                                case 'graph': return _p.ss($, () => sh.b.snippet("graph "))
                                default: return _p.au($[0])
                            }
                        }),
                        Attribute_List($.attributes),
                        sh.b.snippet(";"),
                    ]))
                    case 'edge': return _p.ss($, ($) => sh.b.sub([
                        _p.sg($.left, ($) => {
                            switch ($[0]) {
                                case 'node': return _p.ss($, ($) => Node_ID($))
                                case 'subgraph': return _p.ss($, ($) => Subgraph($, $p))
                                default: return _p.au($[0])
                            }
                        }),
                        _p.sg($p['graph type'], ($) => {
                            switch ($[0]) {
                                case 'digraph': return _p.ss($, () => sh.b.snippet(" -> "))
                                case 'graph': return _p.ss($, () => sh.b.snippet(" -- "))
                                default: return _p.au($[0])
                            }
                        }),
                        sh.b.sub(op_enrich_list_elements_with_position_information($.right).map(($) => sh.b.sub([
                            _p.sg($.value, ($) => {
                                switch ($[0]) {
                                    case 'node': return _p.ss($, ($) => Node_ID($))
                                    case 'subgraph': return _p.ss($, ($) => Subgraph($, $p))
                                    default: return _p.au($[0])
                                }
                            }),
                            $['is last']
                                ? sh.b.nothing()
                                : sh.b.snippet(", "),
                        ]))),
                        Attribute_List($.attributes),
                    ]))
                    case 'node': return _p.ss($, ($) => sh.b.sub([
                        Node_ID($.node),
                        _p.boolean.list_is_empty($['attribute list'])
                            ? sh.b.nothing()
                            : Attribute_List($['attribute list']),
                        sh.b.snippet(";"),
                    ]))
                    case 'subgraph': return _p.ss($, ($) => Subgraph($, $p))
                    default: return _p.au($[0])
                }
            })
        ]))),
    ]),
    sh.b.snippet("}"),
])

export const ID: signatures.ID = ($) => _p.sg($, ($) => {
    switch ($[0]) {
        case 'id': return _p.ss($, ($) => sh.b.snippet($)) //FIX escaping
        case 'string': return _p.ss($, ($) => sh.b.snippet(s_quoted($)))
        case 'html': return _p.ss($, ($) => sh.b.snippet($))
        case 'number': return _p.ss($, ($) => sh.b.snippet("FIXME NUMBER"))
        default: return _p.au($[0])
    }
})

export const Attribute_List: signatures.Attribute_List = ($) => sh.b.sub([
    sh.b.snippet(" [ "),
    sh.b.sub($.map(($) => sh.b.sub([
        ID($.name),
        sh.b.snippet("="),
        ID($.value),
        sh.b.snippet(" "),
    ]))),
    sh.b.snippet("]"),
])

export const Node_ID: signatures.Node_ID = ($) => sh.b.sub([
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

export const Subgraph: signatures.Subgraph = ($, $p) => sh.b.sub([
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