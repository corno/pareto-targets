
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/graphviz_high_level/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/graphviz_high_level/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Graph_Attributes: t_signatures.Graph_Attributes = ($, abort) => _p.list.map(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null]
        )
    ),
    ($) => _p_cc(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null]
            )
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Graph_Attributes.L => {
                switch ($t) {
                    case 'concentrate':
                        return _p_cc(
                            $['value'],
                            ($) => ['concentrate', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'charset':
                        return _p_cc(
                            $['value'],
                            ($) => ['charset', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'clusterrank':
                        return _p_cc(
                            $['value'],
                            ($) => ['clusterrank', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.clusterrank => {
                                        switch ($t) {
                                            case 'none':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'local':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['local', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'global':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['global', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )]
                        )
                    case 'color':
                        return _p_cc(
                            $['value'],
                            ($) => ['color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'color scheme':
                        return _p_cc(
                            $['value'],
                            ($) => ['color scheme', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'comment':
                        return _p_cc(
                            $['value'],
                            ($) => ['comment', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'compound':
                        return _p_cc(
                            $['value'],
                            ($) => ['compound', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'dpi':
                        return _p_cc(
                            $['value'],
                            ($) => ['dpi', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'font color':
                        return _p_cc(
                            $['value'],
                            ($) => ['font color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'font name':
                        return _p_cc(
                            $['value'],
                            ($) => ['font name', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'font path':
                        return _p_cc(
                            $['value'],
                            ($) => ['font path', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'font size':
                        return _p_cc(
                            $['value'],
                            ($) => ['font size', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'label':
                        return _p_cc(
                            $['value'],
                            ($) => ['label', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'label distance':
                        return _p_cc(
                            $['value'],
                            ($) => ['label distance', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'label scheme':
                        return _p_cc(
                            $['value'],
                            ($) => ['label scheme', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'label location':
                        return _p_cc(
                            $['value'],
                            ($) => ['label location', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.label_location => {
                                        switch ($t) {
                                            case 'top':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['top', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'bottom':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['bottom', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )]
                        )
                    case 'landscape':
                        return _p_cc(
                            $['value'],
                            ($) => ['landscape', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'layer list':
                        return _p_cc(
                            $['value'],
                            ($) => ['layer list', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'layer separator':
                        return _p_cc(
                            $['value'],
                            ($) => ['layer separator', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'layers':
                        return _p_cc(
                            $['value'],
                            ($) => ['layers', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'margin':
                        return _p_cc(
                            $['value'],
                            ($) => ['margin', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'max iteration':
                        return _p_cc(
                            $['value'],
                            ($) => ['max iteration', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'mclimit':
                        return _p_cc(
                            $['value'],
                            ($) => ['mclimit', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'mindist':
                        return _p_cc(
                            $['value'],
                            ($) => ['mindist', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'mode':
                        return _p_cc(
                            $['value'],
                            ($) => ['mode', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.mode => {
                                        switch ($t) {
                                            case 'no output':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['no output', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'out':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['out', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'in':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['in', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'in out':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['in out', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )]
                        )
                    case 'newrank':
                        return _p_cc(
                            $['value'],
                            ($) => ['newrank', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'no loop':
                        return _p_cc(
                            $['value'],
                            ($) => ['no loop', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'normalize':
                        return _p_cc(
                            $['value'],
                            ($) => ['normalize', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'ordering':
                        return _p_cc(
                            $['value'],
                            ($) => ['ordering', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.ordering => {
                                        switch ($t) {
                                            case 'out':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['out', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'in':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['in', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'in out':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['in out', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )]
                        )
                    case 'orientation':
                        return _p_cc(
                            $['value'],
                            ($) => ['orientation', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'output order':
                        return _p_cc(
                            $['value'],
                            ($) => ['output order', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.output_order => {
                                        switch ($t) {
                                            case 'breadth first':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['breadth first', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'dfs':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['dfs', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )]
                        )
                    case 'overlap':
                        return _p_cc(
                            $['value'],
                            ($) => ['overlap', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'output mode':
                        return _p_cc(
                            $['value'],
                            ($) => ['output mode', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.output_mode => {
                                        switch ($t) {
                                            case 'edges first':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['edges first', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'nodes first':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['nodes first', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )]
                        )
                    case 'pack':
                        return _p_cc(
                            $['value'],
                            ($) => ['pack', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'pack mode':
                        return _p_cc(
                            $['value'],
                            ($) => ['pack mode', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.pack_mode => {
                                        switch ($t) {
                                            case 'node':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['node', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'graph':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['graph', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )]
                        )
                    case 'pad':
                        return _p_cc(
                            $['value'],
                            ($) => ['pad', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'page':
                        return _p_cc(
                            $['value'],
                            ($) => ['page', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'quadtree':
                        return _p_cc(
                            $['value'],
                            ($) => ['quadtree', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'quantum':
                        return _p_cc(
                            $['value'],
                            ($) => ['quantum', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'rankdir':
                        return _p_cc(
                            $['value'],
                            ($) => ['rankdir', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.rankdir => {
                                        switch ($t) {
                                            case 'top bottom':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['top bottom', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'bottom top':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['bottom top', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'left right':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['left right', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'right left':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['right left', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )]
                        )
                    case 'ranksep':
                        return _p_cc(
                            $['value'],
                            ($) => ['ranksep', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'ratio':
                        return _p_cc(
                            $['value'],
                            ($) => ['ratio', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'remincross':
                        return _p_cc(
                            $['value'],
                            ($) => ['remincross', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'rotate':
                        return _p_cc(
                            $['value'],
                            ($) => ['rotate', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'scale':
                        return _p_cc(
                            $['value'],
                            ($) => ['scale', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'searchsize':
                        return _p_cc(
                            $['value'],
                            ($) => ['searchsize', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'sep':
                        return _p_cc(
                            $['value'],
                            ($) => ['sep', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'showboxes':
                        return _p_cc(
                            $['value'],
                            ($) => ['showboxes', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'size':
                        return _p_cc(
                            $['value'],
                            ($) => ['size', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'smoothing':
                        return _p_cc(
                            $['value'],
                            ($) => ['smoothing', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.smoothing => {
                                        switch ($t) {
                                            case 'none':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'spring':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['spring', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'triangle':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['triangle', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )]
                        )
                    case 'sortv':
                        return _p_cc(
                            $['value'],
                            ($) => ['sortv', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'splines':
                        return _p_cc(
                            $['value'],
                            ($) => ['splines', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'start':
                        return _p_cc(
                            $['value'],
                            ($) => ['start', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'style':
                        return _p_cc(
                            $['value'],
                            ($) => ['style', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'stylesheet':
                        return _p_cc(
                            $['value'],
                            ($) => ['stylesheet', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'target':
                        return _p_cc(
                            $['value'],
                            ($) => ['target', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'tooltip':
                        return _p_cc(
                            $['value'],
                            ($) => ['tooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'truecolor':
                        return _p_cc(
                            $['value'],
                            ($) => ['truecolor', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'viewport':
                        return _p_cc(
                            $['value'],
                            ($) => ['viewport', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'width':
                        return _p_cc(
                            $['value'],
                            ($) => ['width', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'xdotversion':
                        return _p_cc(
                            $['value'],
                            ($) => ['xdotversion', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'xlabel':
                        return _p_cc(
                            $['value'],
                            ($) => ['xlabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']]
                        )
                }
            }
        )
    )
)

export const Node_Attributes: t_signatures.Node_Attributes = ($, abort) => _p.list.map(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null]
        )
    ),
    ($) => _p_cc(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null]
            )
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Node_Attributes.L => {
                switch ($t) {
                    case 'color':
                        return _p_cc(
                            $['value'],
                            ($) => ['color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'colorscheme':
                        return _p_cc(
                            $['value'],
                            ($) => ['colorscheme', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'comment':
                        return _p_cc(
                            $['value'],
                            ($) => ['comment', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'concentrate':
                        return _p_cc(
                            $['value'],
                            ($) => ['concentrate', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'fill color':
                        return _p_cc(
                            $['value'],
                            ($) => ['fill color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'fixed size':
                        return _p_cc(
                            $['value'],
                            ($) => ['fixed size', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'font color':
                        return _p_cc(
                            $['value'],
                            ($) => ['font color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'font name':
                        return _p_cc(
                            $['value'],
                            ($) => ['font name', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'font size':
                        return _p_cc(
                            $['value'],
                            ($) => ['font size', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'group':
                        return _p_cc(
                            $['value'],
                            ($) => ['group', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'height':
                        return _p_cc(
                            $['value'],
                            ($) => ['height', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'image':
                        return _p_cc(
                            $['value'],
                            ($) => ['image', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'label':
                        return _p_cc(
                            $['value'],
                            ($) => ['label', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'labelloc':
                        return _p_cc(
                            $['value'],
                            ($) => ['labelloc', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Node_Attributes.L.labelloc => {
                                        switch ($t) {
                                            case 'top':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['top', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'center':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['center', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'bottom':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['bottom', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )]
                        )
                    case 'layers':
                        return _p_cc(
                            $['value'],
                            ($) => ['layers', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'margin':
                        return _p_cc(
                            $['value'],
                            ($) => ['margin', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'nojustify':
                        return _p_cc(
                            $['value'],
                            ($) => ['nojustify', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'orientation':
                        return _p_cc(
                            $['value'],
                            ($) => ['orientation', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'pen width':
                        return _p_cc(
                            $['value'],
                            ($) => ['pen width', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'peripheries':
                        return _p_cc(
                            $['value'],
                            ($) => ['peripheries', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'pos':
                        return _p_cc(
                            $['value'],
                            ($) => ['pos', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'rects':
                        return _p_cc(
                            $['value'],
                            ($) => ['rects', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'regular':
                        return _p_cc(
                            $['value'],
                            ($) => ['regular', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'root':
                        return _p_cc(
                            $['value'],
                            ($) => ['root', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'shape':
                        return _p_cc(
                            $['value'],
                            ($) => ['shape', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'showboxes':
                        return _p_cc(
                            $['value'],
                            ($) => ['showboxes', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'sides':
                        return _p_cc(
                            $['value'],
                            ($) => ['sides', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'skew':
                        return _p_cc(
                            $['value'],
                            ($) => ['skew', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'style':
                        return _p_cc(
                            $['value'],
                            ($) => ['style', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'target':
                        return _p_cc(
                            $['value'],
                            ($) => ['target', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'tooltip':
                        return _p_cc(
                            $['value'],
                            ($) => ['tooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'width':
                        return _p_cc(
                            $['value'],
                            ($) => ['width', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'xlabel':
                        return _p_cc(
                            $['value'],
                            ($) => ['xlabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'xlp':
                        return _p_cc(
                            $['value'],
                            ($) => ['xlp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']]
                        )
                }
            }
        )
    )
)

export const Tree: t_signatures.Tree = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'attributes': _p_cc(
            $.__get_entry(
                'attributes',
                ($) => abort(
                    ['no such entry', "attributes"]
                )
            ),
            ($) => Graph_Attributes(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'elements': _p_cc(
            $.__get_entry(
                'elements',
                ($) => abort(
                    ['no such entry', "elements"]
                )
            ),
            ($) => _p.dictionary.map(
                v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ),
                ($, id) => _p_cc(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            ['expected a state', null]
                        )
                    ),
                    ($) => _p.decide.text(
                        $['option']['value'],
                        ($t): t_out.Tree.elements.D => {
                            switch ($t) {
                                case 'node':
                                    return _p_cc(
                                        $['value'],
                                        ($) => ['node', _p_cc(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null]
                                                )
                                            ),
                                            ($) => ({
                                                'attributes': _p_cc(
                                                    $.__get_entry(
                                                        'attributes',
                                                        ($) => abort(
                                                            ['no such entry', "attributes"]
                                                        )
                                                    ),
                                                    ($) => Node_Attributes(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        )
                                                    )
                                                ),
                                            })
                                        )]
                                    )
                                case 'sub':
                                    return _p_cc(
                                        $['value'],
                                        ($) => ['sub', _p_cc(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null]
                                                )
                                            ),
                                            ($) => ({
                                                'type': _p_cc(
                                                    $.__get_entry(
                                                        'type',
                                                        ($) => abort(
                                                            ['no such entry', "type"]
                                                        )
                                                    ),
                                                    ($) => _p_cc(
                                                        v_unmarshalled_from_parse_tree.State(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a state', null]
                                                            )
                                                        ),
                                                        ($) => _p.decide.text(
                                                            $['option']['value'],
                                                            ($t): t_out.Tree.elements.D.sub.type_ => {
                                                                switch ($t) {
                                                                    case 'group':
                                                                        return _p_cc(
                                                                            $['value'],
                                                                            ($) => ['group', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null]
                                                                                )
                                                                            )]
                                                                        )
                                                                    case 'cluster':
                                                                        return _p_cc(
                                                                            $['value'],
                                                                            ($) => ['cluster', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null]
                                                                                )
                                                                            )]
                                                                        )
                                                                    case 'subgraph':
                                                                        return _p_cc(
                                                                            $['value'],
                                                                            ($) => ['subgraph', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null]
                                                                                )
                                                                            )]
                                                                        )
                                                                    default:
                                                                        return abort(
                                                                            ['unknown option', $['option']['value']]
                                                                        )
                                                                }
                                                            }
                                                        )
                                                    )
                                                ),
                                                'tree': _p_cc(
                                                    $.__get_entry(
                                                        'tree',
                                                        ($) => abort(
                                                            ['no such entry', "tree"]
                                                        )
                                                    ),
                                                    ($) => Tree(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        )
                                                    )
                                                ),
                                            })
                                        )]
                                    )
                                default:
                                    return abort(
                                        ['unknown option', $['option']['value']]
                                    )
                            }
                        }
                    )
                )
            )
        ),
    })
)

export const End_Point_Specification: t_signatures.End_Point_Specification = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'start': _p_cc(
            $.__get_entry(
                'start',
                ($) => abort(
                    ['no such entry', "start"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
        'tail': _p_cc(
            $.__get_entry(
                'tail',
                ($) => abort(
                    ['no such entry', "tail"]
                )
            ),
            ($) => _p.list.map(
                v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null]
                    )
                ),
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null]
                    )
                )
            )
        ),
        'port data': _p_cc(
            $.__get_entry(
                'port data',
                ($) => abort(
                    ['no such entry', "port data"]
                )
            ),
            ($) => _p.optional.map(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null]
                    )
                ),
                ($) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ),
                    ($) => ({
                        'port': _p_cc(
                            $.__get_entry(
                                'port',
                                ($) => abort(
                                    ['no such entry', "port"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        ),
                        'compass direction': _p_cc(
                            $.__get_entry(
                                'compass direction',
                                ($) => abort(
                                    ['no such entry', "compass direction"]
                                )
                            ),
                            ($) => _p.optional.map(
                                v_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    ($) => abort(
                                        ['expected an optional', null]
                                    )
                                ),
                                ($) => v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                )
                            )
                        ),
                    })
                )
            )
        ),
    })
)

export const Edge_Attributes: t_signatures.Edge_Attributes = ($, abort) => _p.list.map(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null]
        )
    ),
    ($) => _p_cc(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null]
            )
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Edge_Attributes.L => {
                switch ($t) {
                    case 'arrowhead':
                        return _p_cc(
                            $['value'],
                            ($) => ['arrowhead', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'arrowsize':
                        return _p_cc(
                            $['value'],
                            ($) => ['arrowsize', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'arrowtail':
                        return _p_cc(
                            $['value'],
                            ($) => ['arrowtail', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'bgcolor':
                        return _p_cc(
                            $['value'],
                            ($) => ['bgcolor', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'color':
                        return _p_cc(
                            $['value'],
                            ($) => ['color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'colorscheme':
                        return _p_cc(
                            $['value'],
                            ($) => ['colorscheme', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'comment':
                        return _p_cc(
                            $['value'],
                            ($) => ['comment', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'constraint':
                        return _p_cc(
                            $['value'],
                            ($) => ['constraint', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'decorate':
                        return _p_cc(
                            $['value'],
                            ($) => ['decorate', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'dir':
                        return _p_cc(
                            $['value'],
                            ($) => ['dir', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Edge_Attributes.L.dir => {
                                        switch ($t) {
                                            case 'forward':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['forward', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'back':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['back', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'both':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['both', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            case 'none':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )]
                        )
                    case 'edge url':
                        return _p_cc(
                            $['value'],
                            ($) => ['edge url', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'edge lp':
                        return _p_cc(
                            $['value'],
                            ($) => ['edge lp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'edge target':
                        return _p_cc(
                            $['value'],
                            ($) => ['edge target', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'edge tooltip':
                        return _p_cc(
                            $['value'],
                            ($) => ['edge tooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'head lp':
                        return _p_cc(
                            $['value'],
                            ($) => ['head lp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'headclip':
                        return _p_cc(
                            $['value'],
                            ($) => ['headclip', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'headlabel':
                        return _p_cc(
                            $['value'],
                            ($) => ['headlabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'headport':
                        return _p_cc(
                            $['value'],
                            ($) => ['headport', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'height':
                        return _p_cc(
                            $['value'],
                            ($) => ['height', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'id':
                        return _p_cc(
                            $['value'],
                            ($) => ['id', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'label':
                        return _p_cc(
                            $['value'],
                            ($) => ['label', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'label distance':
                        return _p_cc(
                            $['value'],
                            ($) => ['label distance', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'label angle':
                        return _p_cc(
                            $['value'],
                            ($) => ['label angle', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'label float':
                        return _p_cc(
                            $['value'],
                            ($) => ['label float', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'labelfloat':
                        return _p_cc(
                            $['value'],
                            ($) => ['labelfloat', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'labelhref':
                        return _p_cc(
                            $['value'],
                            ($) => ['labelhref', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'label lp':
                        return _p_cc(
                            $['value'],
                            ($) => ['label lp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'layer':
                        return _p_cc(
                            $['value'],
                            ($) => ['layer', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'len':
                        return _p_cc(
                            $['value'],
                            ($) => ['len', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'lhead':
                        return _p_cc(
                            $['value'],
                            ($) => ['lhead', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'lp':
                        return _p_cc(
                            $['value'],
                            ($) => ['lp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'ltail':
                        return _p_cc(
                            $['value'],
                            ($) => ['ltail', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'minlen':
                        return _p_cc(
                            $['value'],
                            ($) => ['minlen', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'pen width':
                        return _p_cc(
                            $['value'],
                            ($) => ['pen width', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'pos':
                        return _p_cc(
                            $['value'],
                            ($) => ['pos', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'same head':
                        return _p_cc(
                            $['value'],
                            ($) => ['same head', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'same tail':
                        return _p_cc(
                            $['value'],
                            ($) => ['same tail', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'showboxes':
                        return _p_cc(
                            $['value'],
                            ($) => ['showboxes', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'style':
                        return _p_cc(
                            $['value'],
                            ($) => ['style', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'tail lp':
                        return _p_cc(
                            $['value'],
                            ($) => ['tail lp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'tailclip':
                        return _p_cc(
                            $['value'],
                            ($) => ['tailclip', v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )]
                        )
                    case 'taillabel':
                        return _p_cc(
                            $['value'],
                            ($) => ['taillabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'tailport':
                        return _p_cc(
                            $['value'],
                            ($) => ['tailport', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'tooltip':
                        return _p_cc(
                            $['value'],
                            ($) => ['tooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'weight':
                        return _p_cc(
                            $['value'],
                            ($) => ['weight', v_deserialize_number.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid number', null]
                                )
                            )]
                        )
                    case 'xlabel':
                        return _p_cc(
                            $['value'],
                            ($) => ['xlabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    case 'xlp':
                        return _p_cc(
                            $['value'],
                            ($) => ['xlp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )]
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']]
                        )
                }
            }
        )
    )
)

export const Graph: t_signatures.Graph = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'name': _p_cc(
            $.__get_entry(
                'name',
                ($) => abort(
                    ['no such entry', "name"]
                )
            ),
            ($) => _p.optional.map(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null]
                    )
                ),
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null]
                    )
                )
            )
        ),
        'tree': _p_cc(
            $.__get_entry(
                'tree',
                ($) => abort(
                    ['no such entry', "tree"]
                )
            ),
            ($) => Tree(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'type': _p_cc(
            $.__get_entry(
                'type',
                ($) => abort(
                    ['no such entry', "type"]
                )
            ),
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null]
                    )
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Graph.type_ => {
                        switch ($t) {
                            case 'undirected':
                                return _p_cc(
                                    $['value'],
                                    ($) => ['undirected', _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            'edges': _p_cc(
                                                $.__get_entry(
                                                    'edges',
                                                    ($) => abort(
                                                        ['no such entry', "edges"]
                                                    )
                                                ),
                                                ($) => _p.list.map(
                                                    v_unmarshalled_from_parse_tree.List(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a list', null]
                                                        )
                                                    ),
                                                    ($) => _p_cc(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null]
                                                            )
                                                        ),
                                                        ($) => ({
                                                            'yin': _p_cc(
                                                                $.__get_entry(
                                                                    'yin',
                                                                    ($) => abort(
                                                                        ['no such entry', "yin"]
                                                                    )
                                                                ),
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                            'yang': _p_cc(
                                                                $.__get_entry(
                                                                    'yang',
                                                                    ($) => abort(
                                                                        ['no such entry', "yang"]
                                                                    )
                                                                ),
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                            'attributes': _p_cc(
                                                                $.__get_entry(
                                                                    'attributes',
                                                                    ($) => abort(
                                                                        ['no such entry', "attributes"]
                                                                    )
                                                                ),
                                                                ($) => Edge_Attributes(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                        })
                                                    )
                                                )
                                            ),
                                        })
                                    )]
                                )
                            case 'directed':
                                return _p_cc(
                                    $['value'],
                                    ($) => ['directed', _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            'edges': _p_cc(
                                                $.__get_entry(
                                                    'edges',
                                                    ($) => abort(
                                                        ['no such entry', "edges"]
                                                    )
                                                ),
                                                ($) => _p.list.map(
                                                    v_unmarshalled_from_parse_tree.List(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a list', null]
                                                        )
                                                    ),
                                                    ($) => _p_cc(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null]
                                                            )
                                                        ),
                                                        ($) => ({
                                                            'from': _p_cc(
                                                                $.__get_entry(
                                                                    'from',
                                                                    ($) => abort(
                                                                        ['no such entry', "from"]
                                                                    )
                                                                ),
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                            'to': _p_cc(
                                                                $.__get_entry(
                                                                    'to',
                                                                    ($) => abort(
                                                                        ['no such entry', "to"]
                                                                    )
                                                                ),
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                            'attributes': _p_cc(
                                                                $.__get_entry(
                                                                    'attributes',
                                                                    ($) => abort(
                                                                        ['no such entry', "attributes"]
                                                                    )
                                                                ),
                                                                ($) => Edge_Attributes(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                        })
                                                    )
                                                )
                                            ),
                                        })
                                    )]
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']]
                                )
                        }
                    }
                )
            )
        ),
    })
)

export const Attribute_Value: t_signatures.Attribute_Value = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Attribute_Value => {
            switch ($t) {
                case 'number':
                    return _p_cc(
                        $['value'],
                        ($) => ['number', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null]
                            )
                        )]
                    )
                case 'string':
                    return _p_cc(
                        $['value'],
                        ($) => ['string', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null]
                            )
                        )]
                    )
                case 'html string':
                    return _p_cc(
                        $['value'],
                        ($) => ['html string', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null]
                            )
                        )]
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']]
                    )
            }
        }
    )
)
