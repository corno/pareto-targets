
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/graphviz_low_level/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/graphviz_low_level/data"

export const ID: t_signatures.ID = ($) => _p.decide.state(
    $,
    ($): t_out.ID => {
        switch ($[0]) {
            case 'id':
                return _p.ss(
                    $,
                    ($) => ['id', $]
                )
            case 'string':
                return _p.ss(
                    $,
                    ($) => ['string', $]
                )
            case 'html':
                return _p.ss(
                    $,
                    ($) => ['html', $]
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ['number', $]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Node_ID: t_signatures.Node_ID = ($) => ({
    'id': _p_cc(
        $['id'],
        ($) => ID(
            $
        )
    ),
    'port': _p_cc(
        $['port'],
        ($) => $.__o_map(
            ($) => ({
                'port': _p_cc(
                    $['port'],
                    ($) => ID(
                        $
                    )
                ),
                'compass point': _p_cc(
                    $['compass point'],
                    ($) => $.__o_map(
                        ($) => ID(
                            $
                        )
                    )
                ),
            })
        )
    ),
})

export const Attribute_List: t_signatures.Attribute_List = ($) => $.__l_map(
    ($) => ({
        'name': _p_cc(
            $['name'],
            ($) => ID(
                $
            )
        ),
        'value': _p_cc(
            $['value'],
            ($) => ID(
                $
            )
        ),
    })
)

export const Subgraph: t_signatures.Subgraph = ($) => ({
    'subgraph': _p_cc(
        $['subgraph'],
        ($) => $.__o_map(
            ($) => $.__o_map(
                ($) => ID(
                    $
                )
            )
        )
    ),
    'statements': _p_cc(
        $['statements'],
        ($) => Statement_List(
            $
        )
    ),
})

export const Statement_List: t_signatures.Statement_List = ($) => $.__l_map(
    ($) => _p.decide.state(
        $,
        ($): t_out.Statement_List.L => {
            switch ($[0]) {
                case 'node':
                    return _p.ss(
                        $,
                        ($) => ['node', ({
                            'node': _p_cc(
                                $['node'],
                                ($) => Node_ID(
                                    $
                                )
                            ),
                            'attribute list': _p_cc(
                                $['attribute list'],
                                ($) => Attribute_List(
                                    $
                                )
                            ),
                        })]
                    )
                case 'edge':
                    return _p.ss(
                        $,
                        ($) => ['edge', ({
                            'left': _p_cc(
                                $['left'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Statement_List.L.edge.left => {
                                        switch ($[0]) {
                                            case 'node':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['node', Node_ID(
                                                        $
                                                    )]
                                                )
                                            case 'subgraph':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['subgraph', Subgraph(
                                                        $
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            ),
                            'right': _p_cc(
                                $['right'],
                                ($) => $.__l_map(
                                    ($) => _p.decide.state(
                                        $,
                                        ($): t_out.Statement_List.L.edge.right.L => {
                                            switch ($[0]) {
                                                case 'node':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['node', Node_ID(
                                                            $
                                                        )]
                                                    )
                                                case 'subgraph':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['subgraph', Subgraph(
                                                            $
                                                        )]
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0]
                                                    )
                                            }
                                        }
                                    )
                                )
                            ),
                            'attributes': _p_cc(
                                $['attributes'],
                                ($) => Attribute_List(
                                    $
                                )
                            ),
                        })]
                    )
                case 'attribute list':
                    return _p.ss(
                        $,
                        ($) => ['attribute list', ({
                            'type': _p_cc(
                                $['type'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Statement_List.L.attribute_list.type_ => {
                                        switch ($[0]) {
                                            case 'graph':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['graph', null]
                                                )
                                            case 'node':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['node', null]
                                                )
                                            case 'edge':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['edge', null]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            ),
                            'attributes': _p_cc(
                                $['attributes'],
                                ($) => Attribute_List(
                                    $
                                )
                            ),
                        })]
                    )
                case 'attribute assignment':
                    return _p.ss(
                        $,
                        ($) => ['attribute assignment', ({
                            'name': _p_cc(
                                $['name'],
                                ($) => ID(
                                    $
                                )
                            ),
                            'value': _p_cc(
                                $['value'],
                                ($) => ID(
                                    $
                                )
                            ),
                        })]
                    )
                case 'subgraph':
                    return _p.ss(
                        $,
                        ($) => ['subgraph', Subgraph(
                            $
                        )]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )
)

export const Graph: t_signatures.Graph = ($) => ({
    'strict': _p_cc(
        $['strict'],
        ($) => $
    ),
    'type': _p_cc(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Graph.type_ => {
                switch ($[0]) {
                    case 'graph':
                        return _p.ss(
                            $,
                            ($) => ['graph', null]
                        )
                    case 'digraph':
                        return _p.ss(
                            $,
                            ($) => ['digraph', null]
                        )
                    default:
                        return _p.au(
                            $[0]
                        )
                }
            }
        )
    ),
    'name': _p_cc(
        $['name'],
        ($) => $.__o_map(
            ($) => ID(
                $
            )
        )
    ),
    'statements': _p_cc(
        $['statements'],
        ($) => Statement_List(
            $
        )
    ),
})
