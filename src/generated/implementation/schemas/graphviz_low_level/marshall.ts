import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/graphviz_low_level/marshall"


export const Attribute_List: _i_signatures._T_s_Attribute_List = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'name': _pa.cc($['name'], ($) => ID(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'value': _pa.cc($['value'], ($) => ID(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
export const Graph: _i_signatures._T_s_Graph = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'name': _pa.cc($['name'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ID(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )],
        () => ['not set', null]
    )]),
    'statements': _pa.cc($['statements'], ($) => Statement_List(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'strict': _pa.cc($['strict'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'digraph': return _pa.ss($, ($) => ({
                'state': "digraph",
                'value': ['nothing', null],
            }))
            case 'graph': return _pa.ss($, ($) => ({
                'state': "graph",
                'value': ['nothing', null],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const ID: _i_signatures._T_s_ID = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'html': return _pa.ss($, ($) => ({
            'state': "html",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'id': return _pa.ss($, ($) => ({
            'state': "id",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'number': return _pa.ss($, ($) => ({
            'state': "number",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': _pd.implement_me(),
            })],
        }))
        case 'string': return _pa.ss($, ($) => ({
            'state': "string",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Node_ID: _i_signatures._T_s_Node_ID = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'id': _pa.cc($['id'], ($) => ID(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'port': _pa.cc($['port'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _pa.dictionary_literal({
            'compass point': _pa.cc($['compass point'], ($) => ['optional', $.transform(
                ($): _i_out._T_Value.SG.optional => ['set', ID(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )],
                () => ['not set', null]
            )]),
            'port': _pa.cc($['port'], ($) => ID(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]],
        () => ['not set', null]
    )]),
})]
export const Statement_List: _i_signatures._T_s_Statement_List = ($, $p) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'attribute assignment': return _pa.ss($, ($) => ({
            'state': "attribute assignment",
            'value': ['verbose group', _pa.dictionary_literal({
                'name': _pa.cc($['name'], ($) => ID(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'value': _pa.cc($['value'], ($) => ID(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'attribute list': return _pa.ss($, ($) => ({
            'state': "attribute list",
            'value': ['verbose group', _pa.dictionary_literal({
                'attributes': _pa.cc($['attributes'], ($) => Attribute_List(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'edge': return _pa.ss($, ($) => ({
                            'state': "edge",
                            'value': ['nothing', null],
                        }))
                        case 'graph': return _pa.ss($, ($) => ({
                            'state': "graph",
                            'value': ['nothing', null],
                        }))
                        case 'node': return _pa.ss($, ($) => ({
                            'state': "node",
                            'value': ['nothing', null],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })],
        }))
        case 'edge': return _pa.ss($, ($) => ({
            'state': "edge",
            'value': ['verbose group', _pa.dictionary_literal({
                'attributes': _pa.cc($['attributes'], ($) => Attribute_List(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'left': _pa.cc($['left'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'node': return _pa.ss($, ($) => ({
                            'state': "node",
                            'value': Node_ID(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        case 'subgraph': return _pa.ss($, ($) => ({
                            'state': "subgraph",
                            'value': Subgraph(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
                'right': _pa.cc($['right'], ($) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'node': return _pa.ss($, ($) => ({
                            'state': "node",
                            'value': Node_ID(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        case 'subgraph': return _pa.ss($, ($) => ({
                            'state': "subgraph",
                            'value': Subgraph(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        default: return _pa.au($[0])
                    }
                })])]),
            })],
        }))
        case 'node': return _pa.ss($, ($) => ({
            'state': "node",
            'value': ['verbose group', _pa.dictionary_literal({
                'attribute list': _pa.cc($['attribute list'], ($) => Attribute_List(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'node': _pa.cc($['node'], ($) => Node_ID(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'subgraph': return _pa.ss($, ($) => ({
            'state': "subgraph",
            'value': Subgraph(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})])]
export const Subgraph: _i_signatures._T_s_Subgraph = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'statements': _pa.cc($['statements'], ($) => Statement_List(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'subgraph': _pa.cc($['subgraph'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['optional', $.transform(
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
})]
