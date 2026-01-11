import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz_low_level/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const ID: _i_signatures._T_ID = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'id': return _p.ss($, ($) => ({
            'state': "id",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'string': return _p.ss($, ($) => ({
            'state': "string",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'html': return _p.ss($, ($) => ({
            'state': "html",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'number': return _p.ss($, ($) => ({
            'state': "number",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        default: return _p.au($[0])
    }
})]
export const Node_ID: _i_signatures._T_Node_ID = ($, $p) => ['verbose group', _p.dictionary.literal({
    'id': _p.deprecated_cc($['id'], ($) => ID(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'port': _p.deprecated_cc($['port'], ($) => ['optional', $.__decide(
        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _p.dictionary.literal({
            'port': _p.deprecated_cc($['port'], ($) => ID(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'compass point': _p.deprecated_cc($['compass point'], ($) => ['optional', $.__decide(
                ($): _i_out._T_Value.SG.optional => ['set', ID(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )],
                () => ['not set', null]
            )]),
        })]],
        () => ['not set', null]
    )]),
})]
export const Attribute_List: _i_signatures._T_Attribute_List = ($, $p) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
    'name': _p.deprecated_cc($['name'], ($) => ID(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'value': _p.deprecated_cc($['value'], ($) => ID(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
export const Subgraph: _i_signatures._T_Subgraph = ($, $p) => ['verbose group', _p.dictionary.literal({
    'subgraph': _p.deprecated_cc($['subgraph'], ($) => ['optional', $.__decide(
        ($): _i_out._T_Value.SG.optional => ['set', ['optional', $.__decide(
            ($): _i_out._T_Value.SG.optional => ['set', ID(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )],
            () => ['not set', null]
        )]],
        () => ['not set', null]
    )]),
    'statements': _p.deprecated_cc($['statements'], ($) => Statement_List(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Statement_List: _i_signatures._T_Statement_List = ($, $p) => ['list', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'node': return _p.ss($, ($) => ({
            'state': "node",
            'value': ['verbose group', _p.dictionary.literal({
                'node': _p.deprecated_cc($['node'], ($) => Node_ID(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'attribute list': _p.deprecated_cc($['attribute list'], ($) => Attribute_List(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'edge': return _p.ss($, ($) => ({
            'state': "edge",
            'value': ['verbose group', _p.dictionary.literal({
                'left': _p.deprecated_cc($['left'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'node': return _p.ss($, ($) => ({
                            'state': "node",
                            'value': Node_ID(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        case 'subgraph': return _p.ss($, ($) => ({
                            'state': "subgraph",
                            'value': Subgraph(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        default: return _p.au($[0])
                    }
                })]),
                'right': _p.deprecated_cc($['right'], ($) => ['list', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'node': return _p.ss($, ($) => ({
                            'state': "node",
                            'value': Node_ID(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        case 'subgraph': return _p.ss($, ($) => ({
                            'state': "subgraph",
                            'value': Subgraph(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        default: return _p.au($[0])
                    }
                })])]),
                'attributes': _p.deprecated_cc($['attributes'], ($) => Attribute_List(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'attribute list': return _p.ss($, ($) => ({
            'state': "attribute list",
            'value': ['verbose group', _p.dictionary.literal({
                'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'graph': return _p.ss($, ($) => ({
                            'state': "graph",
                            'value': ['nothing', null],
                        }))
                        case 'node': return _p.ss($, ($) => ({
                            'state': "node",
                            'value': ['nothing', null],
                        }))
                        case 'edge': return _p.ss($, ($) => ({
                            'state': "edge",
                            'value': ['nothing', null],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
                'attributes': _p.deprecated_cc($['attributes'], ($) => Attribute_List(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'attribute assignment': return _p.ss($, ($) => ({
            'state': "attribute assignment",
            'value': ['verbose group', _p.dictionary.literal({
                'name': _p.deprecated_cc($['name'], ($) => ID(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'value': _p.deprecated_cc($['value'], ($) => ID(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'subgraph': return _p.ss($, ($) => ({
            'state': "subgraph",
            'value': Subgraph(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _p.au($[0])
    }
})])]
export const Graph: _i_signatures._T_Graph = ($, $p) => ['verbose group', _p.dictionary.literal({
    'strict': _p.deprecated_cc($['strict'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'graph': return _p.ss($, ($) => ({
                'state': "graph",
                'value': ['nothing', null],
            }))
            case 'digraph': return _p.ss($, ($) => ({
                'state': "digraph",
                'value': ['nothing', null],
            }))
            default: return _p.au($[0])
        }
    })]),
    'name': _p.deprecated_cc($['name'], ($) => ['optional', $.__decide(
        ($): _i_out._T_Value.SG.optional => ['set', ID(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )],
        () => ['not set', null]
    )]),
    'statements': _p.deprecated_cc($['statements'], ($) => Statement_List(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
