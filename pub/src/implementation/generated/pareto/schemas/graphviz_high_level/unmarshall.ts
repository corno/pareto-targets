import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz_high_level/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/graphviz_high_level/data_types/target"


export const Graph_Attributes: _i_signatures._T_Graph_Attributes = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_unconstrained_state_group(
            $,
            {
                'states': _pa.dictionary.literal({
                    'concentrate': ($): _i_out._T_Graph_Attributes.L.SG => ['concentrate', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'charset': ($): _i_out._T_Graph_Attributes.L.SG => ['charset', _i_generic.process_text(
                        $,
                        null
                    )],
                    'clusterrank': ($): _i_out._T_Graph_Attributes.L.SG => ['clusterrank', _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'none': ($): _i_out._T_Graph_Attributes.L.SG.clusterrank.SG => ['none', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'local': ($): _i_out._T_Graph_Attributes.L.SG.clusterrank.SG => ['local', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'global': ($): _i_out._T_Graph_Attributes.L.SG.clusterrank.SG => ['global', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )],
                    'color': ($): _i_out._T_Graph_Attributes.L.SG => ['color', _i_generic.process_text(
                        $,
                        null
                    )],
                    'color scheme': ($): _i_out._T_Graph_Attributes.L.SG => ['color scheme', _i_generic.process_text(
                        $,
                        null
                    )],
                    'comment': ($): _i_out._T_Graph_Attributes.L.SG => ['comment', _i_generic.process_text(
                        $,
                        null
                    )],
                    'compound': ($): _i_out._T_Graph_Attributes.L.SG => ['compound', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'dpi': ($): _i_out._T_Graph_Attributes.L.SG => ['dpi', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'font color': ($): _i_out._T_Graph_Attributes.L.SG => ['font color', _i_generic.process_text(
                        $,
                        null
                    )],
                    'font name': ($): _i_out._T_Graph_Attributes.L.SG => ['font name', _i_generic.process_text(
                        $,
                        null
                    )],
                    'font path': ($): _i_out._T_Graph_Attributes.L.SG => ['font path', _i_generic.process_text(
                        $,
                        null
                    )],
                    'font size': ($): _i_out._T_Graph_Attributes.L.SG => ['font size', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'label': ($): _i_out._T_Graph_Attributes.L.SG => ['label', _i_generic.process_text(
                        $,
                        null
                    )],
                    'label distance': ($): _i_out._T_Graph_Attributes.L.SG => ['label distance', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'label scheme': ($): _i_out._T_Graph_Attributes.L.SG => ['label scheme', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'label location': ($): _i_out._T_Graph_Attributes.L.SG => ['label location', _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'top': ($): _i_out._T_Graph_Attributes.L.SG.label_location.SG => ['top', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'bottom': ($): _i_out._T_Graph_Attributes.L.SG.label_location.SG => ['bottom', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )],
                    'landscape': ($): _i_out._T_Graph_Attributes.L.SG => ['landscape', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'layer list': ($): _i_out._T_Graph_Attributes.L.SG => ['layer list', _i_generic.process_text(
                        $,
                        null
                    )],
                    'layer separator': ($): _i_out._T_Graph_Attributes.L.SG => ['layer separator', _i_generic.process_text(
                        $,
                        null
                    )],
                    'layers': ($): _i_out._T_Graph_Attributes.L.SG => ['layers', _i_generic.process_text(
                        $,
                        null
                    )],
                    'margin': ($): _i_out._T_Graph_Attributes.L.SG => ['margin', _i_generic.process_text(
                        $,
                        null
                    )],
                    'max iteration': ($): _i_out._T_Graph_Attributes.L.SG => ['max iteration', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'mclimit': ($): _i_out._T_Graph_Attributes.L.SG => ['mclimit', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'mindist': ($): _i_out._T_Graph_Attributes.L.SG => ['mindist', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'mode': ($): _i_out._T_Graph_Attributes.L.SG => ['mode', _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'no output': ($): _i_out._T_Graph_Attributes.L.SG.mode.SG => ['no output', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'out': ($): _i_out._T_Graph_Attributes.L.SG.mode.SG => ['out', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'in': ($): _i_out._T_Graph_Attributes.L.SG.mode.SG => ['in', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'in out': ($): _i_out._T_Graph_Attributes.L.SG.mode.SG => ['in out', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )],
                    'newrank': ($): _i_out._T_Graph_Attributes.L.SG => ['newrank', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'no loop': ($): _i_out._T_Graph_Attributes.L.SG => ['no loop', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'normalize': ($): _i_out._T_Graph_Attributes.L.SG => ['normalize', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'ordering': ($): _i_out._T_Graph_Attributes.L.SG => ['ordering', _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'out': ($): _i_out._T_Graph_Attributes.L.SG.ordering.SG => ['out', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'in': ($): _i_out._T_Graph_Attributes.L.SG.ordering.SG => ['in', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'in out': ($): _i_out._T_Graph_Attributes.L.SG.ordering.SG => ['in out', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )],
                    'orientation': ($): _i_out._T_Graph_Attributes.L.SG => ['orientation', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'output order': ($): _i_out._T_Graph_Attributes.L.SG => ['output order', _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'breadth first': ($): _i_out._T_Graph_Attributes.L.SG.output_order.SG => ['breadth first', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'dfs': ($): _i_out._T_Graph_Attributes.L.SG.output_order.SG => ['dfs', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )],
                    'overlap': ($): _i_out._T_Graph_Attributes.L.SG => ['overlap', _i_generic.process_text(
                        $,
                        null
                    )],
                    'output mode': ($): _i_out._T_Graph_Attributes.L.SG => ['output mode', _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'edges first': ($): _i_out._T_Graph_Attributes.L.SG.output_mode.SG => ['edges first', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'nodes first': ($): _i_out._T_Graph_Attributes.L.SG.output_mode.SG => ['nodes first', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )],
                    'pack': ($): _i_out._T_Graph_Attributes.L.SG => ['pack', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'pack mode': ($): _i_out._T_Graph_Attributes.L.SG => ['pack mode', _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'node': ($): _i_out._T_Graph_Attributes.L.SG.pack_mode.SG => ['node', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'graph': ($): _i_out._T_Graph_Attributes.L.SG.pack_mode.SG => ['graph', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )],
                    'pad': ($): _i_out._T_Graph_Attributes.L.SG => ['pad', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'page': ($): _i_out._T_Graph_Attributes.L.SG => ['page', _i_generic.process_text(
                        $,
                        null
                    )],
                    'quadtree': ($): _i_out._T_Graph_Attributes.L.SG => ['quadtree', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'quantum': ($): _i_out._T_Graph_Attributes.L.SG => ['quantum', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'rankdir': ($): _i_out._T_Graph_Attributes.L.SG => ['rankdir', _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'top bottom': ($): _i_out._T_Graph_Attributes.L.SG.rankdir.SG => ['top bottom', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'bottom top': ($): _i_out._T_Graph_Attributes.L.SG.rankdir.SG => ['bottom top', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'left right': ($): _i_out._T_Graph_Attributes.L.SG.rankdir.SG => ['left right', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'right left': ($): _i_out._T_Graph_Attributes.L.SG.rankdir.SG => ['right left', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )],
                    'ranksep': ($): _i_out._T_Graph_Attributes.L.SG => ['ranksep', _i_generic.process_text(
                        $,
                        null
                    )],
                    'ratio': ($): _i_out._T_Graph_Attributes.L.SG => ['ratio', _i_generic.process_text(
                        $,
                        null
                    )],
                    'remincross': ($): _i_out._T_Graph_Attributes.L.SG => ['remincross', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'rotate': ($): _i_out._T_Graph_Attributes.L.SG => ['rotate', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'scale': ($): _i_out._T_Graph_Attributes.L.SG => ['scale', _i_generic.process_text(
                        $,
                        null
                    )],
                    'searchsize': ($): _i_out._T_Graph_Attributes.L.SG => ['searchsize', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'sep': ($): _i_out._T_Graph_Attributes.L.SG => ['sep', _i_generic.process_text(
                        $,
                        null
                    )],
                    'showboxes': ($): _i_out._T_Graph_Attributes.L.SG => ['showboxes', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'size': ($): _i_out._T_Graph_Attributes.L.SG => ['size', _i_generic.process_text(
                        $,
                        null
                    )],
                    'smoothing': ($): _i_out._T_Graph_Attributes.L.SG => ['smoothing', _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'none': ($): _i_out._T_Graph_Attributes.L.SG.smoothing.SG => ['none', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'spring': ($): _i_out._T_Graph_Attributes.L.SG.smoothing.SG => ['spring', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'triangle': ($): _i_out._T_Graph_Attributes.L.SG.smoothing.SG => ['triangle', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )],
                    'sortv': ($): _i_out._T_Graph_Attributes.L.SG => ['sortv', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'splines': ($): _i_out._T_Graph_Attributes.L.SG => ['splines', _i_generic.process_text(
                        $,
                        null
                    )],
                    'start': ($): _i_out._T_Graph_Attributes.L.SG => ['start', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'style': ($): _i_out._T_Graph_Attributes.L.SG => ['style', _i_generic.process_text(
                        $,
                        null
                    )],
                    'stylesheet': ($): _i_out._T_Graph_Attributes.L.SG => ['stylesheet', _i_generic.process_text(
                        $,
                        null
                    )],
                    'target': ($): _i_out._T_Graph_Attributes.L.SG => ['target', _i_generic.process_text(
                        $,
                        null
                    )],
                    'tooltip': ($): _i_out._T_Graph_Attributes.L.SG => ['tooltip', _i_generic.process_text(
                        $,
                        null
                    )],
                    'truecolor': ($): _i_out._T_Graph_Attributes.L.SG => ['truecolor', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'viewport': ($): _i_out._T_Graph_Attributes.L.SG => ['viewport', _i_generic.process_text(
                        $,
                        null
                    )],
                    'width': ($): _i_out._T_Graph_Attributes.L.SG => ['width', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'xdotversion': ($): _i_out._T_Graph_Attributes.L.SG => ['xdotversion', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'xlabel': ($): _i_out._T_Graph_Attributes.L.SG => ['xlabel', _i_generic.process_text(
                        $,
                        null
                    )],
                }),
            }
        ),
    }
)
export const Node_Attributes: _i_signatures._T_Node_Attributes = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_unconstrained_state_group(
            $,
            {
                'states': _pa.dictionary.literal({
                    'color': ($): _i_out._T_Node_Attributes.L.SG => ['color', _i_generic.process_text(
                        $,
                        null
                    )],
                    'colorscheme': ($): _i_out._T_Node_Attributes.L.SG => ['colorscheme', _i_generic.process_text(
                        $,
                        null
                    )],
                    'comment': ($): _i_out._T_Node_Attributes.L.SG => ['comment', _i_generic.process_text(
                        $,
                        null
                    )],
                    'concentrate': ($): _i_out._T_Node_Attributes.L.SG => ['concentrate', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'fill color': ($): _i_out._T_Node_Attributes.L.SG => ['fill color', _i_generic.process_text(
                        $,
                        null
                    )],
                    'fixed size': ($): _i_out._T_Node_Attributes.L.SG => ['fixed size', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'font color': ($): _i_out._T_Node_Attributes.L.SG => ['font color', _i_generic.process_text(
                        $,
                        null
                    )],
                    'font name': ($): _i_out._T_Node_Attributes.L.SG => ['font name', _i_generic.process_text(
                        $,
                        null
                    )],
                    'font size': ($): _i_out._T_Node_Attributes.L.SG => ['font size', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'group': ($): _i_out._T_Node_Attributes.L.SG => ['group', _i_generic.process_text(
                        $,
                        null
                    )],
                    'height': ($): _i_out._T_Node_Attributes.L.SG => ['height', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'image': ($): _i_out._T_Node_Attributes.L.SG => ['image', _i_generic.process_text(
                        $,
                        null
                    )],
                    'label': ($): _i_out._T_Node_Attributes.L.SG => ['label', _i_generic.process_text(
                        $,
                        null
                    )],
                    'labelloc': ($): _i_out._T_Node_Attributes.L.SG => ['labelloc', _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'top': ($): _i_out._T_Node_Attributes.L.SG.labelloc.SG => ['top', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'center': ($): _i_out._T_Node_Attributes.L.SG.labelloc.SG => ['center', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'bottom': ($): _i_out._T_Node_Attributes.L.SG.labelloc.SG => ['bottom', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )],
                    'layers': ($): _i_out._T_Node_Attributes.L.SG => ['layers', _i_generic.process_text(
                        $,
                        null
                    )],
                    'margin': ($): _i_out._T_Node_Attributes.L.SG => ['margin', _i_generic.process_text(
                        $,
                        null
                    )],
                    'nojustify': ($): _i_out._T_Node_Attributes.L.SG => ['nojustify', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'orientation': ($): _i_out._T_Node_Attributes.L.SG => ['orientation', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'pen width': ($): _i_out._T_Node_Attributes.L.SG => ['pen width', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'peripheries': ($): _i_out._T_Node_Attributes.L.SG => ['peripheries', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'pos': ($): _i_out._T_Node_Attributes.L.SG => ['pos', _i_generic.process_text(
                        $,
                        null
                    )],
                    'rects': ($): _i_out._T_Node_Attributes.L.SG => ['rects', _i_generic.process_text(
                        $,
                        null
                    )],
                    'regular': ($): _i_out._T_Node_Attributes.L.SG => ['regular', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'root': ($): _i_out._T_Node_Attributes.L.SG => ['root', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'shape': ($): _i_out._T_Node_Attributes.L.SG => ['shape', _i_generic.process_text(
                        $,
                        null
                    )],
                    'showboxes': ($): _i_out._T_Node_Attributes.L.SG => ['showboxes', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'sides': ($): _i_out._T_Node_Attributes.L.SG => ['sides', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'skew': ($): _i_out._T_Node_Attributes.L.SG => ['skew', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'style': ($): _i_out._T_Node_Attributes.L.SG => ['style', _i_generic.process_text(
                        $,
                        null
                    )],
                    'target': ($): _i_out._T_Node_Attributes.L.SG => ['target', _i_generic.process_text(
                        $,
                        null
                    )],
                    'tooltip': ($): _i_out._T_Node_Attributes.L.SG => ['tooltip', _i_generic.process_text(
                        $,
                        null
                    )],
                    'width': ($): _i_out._T_Node_Attributes.L.SG => ['width', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'xlabel': ($): _i_out._T_Node_Attributes.L.SG => ['xlabel', _i_generic.process_text(
                        $,
                        null
                    )],
                    'xlp': ($): _i_out._T_Node_Attributes.L.SG => ['xlp', _i_generic.process_text(
                        $,
                        null
                    )],
                }),
            }
        ),
    }
)
export const Tree: _i_signatures._T_Tree = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'attributes': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "attributes",
                }
            ), ($) => Graph_Attributes(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'elements': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "elements",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'node': ($): _i_out._T_Tree.elements.D.SG => ['node', _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'attributes': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "attributes",
                                                }
                                            ), ($) => Node_Attributes(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )),
                                        }),
                                    }
                                )],
                                'sub': ($): _i_out._T_Tree.elements.D.SG => ['sub', _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'type': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "type",
                                                }
                                            ), ($) => _i_generic.process_unconstrained_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary.literal({
                                                        'group': ($): _i_out._T_Tree.elements.D.SG.sub._type.SG => ['group', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        'cluster': ($): _i_out._T_Tree.elements.D.SG.sub._type.SG => ['cluster', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        'subgraph': ($): _i_out._T_Tree.elements.D.SG.sub._type.SG => ['subgraph', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                    }),
                                                }
                                            )),
                                            'tree': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "tree",
                                                }
                                            ), ($) => Tree(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )),
                                        }),
                                    }
                                )],
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const End_Point_Specification: _i_signatures._T_End_Point_Specification = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'start': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "start",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'tail': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "tail",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_text(
                        $,
                        null
                    ),
                }
            )),
            'port data': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "port data",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'port': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "port",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'compass direction': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "compass direction",
                                    }
                                ), ($) => _i_generic.process_optional(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_text(
                                            $,
                                            null
                                        ),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Edge_Attributes: _i_signatures._T_Edge_Attributes = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_unconstrained_state_group(
            $,
            {
                'states': _pa.dictionary.literal({
                    'arrowhead': ($): _i_out._T_Edge_Attributes.L.SG => ['arrowhead', _i_generic.process_text(
                        $,
                        null
                    )],
                    'arrowsize': ($): _i_out._T_Edge_Attributes.L.SG => ['arrowsize', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'arrowtail': ($): _i_out._T_Edge_Attributes.L.SG => ['arrowtail', _i_generic.process_text(
                        $,
                        null
                    )],
                    'bgcolor': ($): _i_out._T_Edge_Attributes.L.SG => ['bgcolor', _i_generic.process_text(
                        $,
                        null
                    )],
                    'color': ($): _i_out._T_Edge_Attributes.L.SG => ['color', _i_generic.process_text(
                        $,
                        null
                    )],
                    'colorscheme': ($): _i_out._T_Edge_Attributes.L.SG => ['colorscheme', _i_generic.process_text(
                        $,
                        null
                    )],
                    'comment': ($): _i_out._T_Edge_Attributes.L.SG => ['comment', _i_generic.process_text(
                        $,
                        null
                    )],
                    'constraint': ($): _i_out._T_Edge_Attributes.L.SG => ['constraint', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'decorate': ($): _i_out._T_Edge_Attributes.L.SG => ['decorate', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'dir': ($): _i_out._T_Edge_Attributes.L.SG => ['dir', _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary.literal({
                                'forward': ($): _i_out._T_Edge_Attributes.L.SG.dir.SG => ['forward', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'back': ($): _i_out._T_Edge_Attributes.L.SG.dir.SG => ['back', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'both': ($): _i_out._T_Edge_Attributes.L.SG.dir.SG => ['both', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'none': ($): _i_out._T_Edge_Attributes.L.SG.dir.SG => ['none', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )],
                    'edge url': ($): _i_out._T_Edge_Attributes.L.SG => ['edge url', _i_generic.process_text(
                        $,
                        null
                    )],
                    'edge lp': ($): _i_out._T_Edge_Attributes.L.SG => ['edge lp', _i_generic.process_text(
                        $,
                        null
                    )],
                    'edge target': ($): _i_out._T_Edge_Attributes.L.SG => ['edge target', _i_generic.process_text(
                        $,
                        null
                    )],
                    'edge tooltip': ($): _i_out._T_Edge_Attributes.L.SG => ['edge tooltip', _i_generic.process_text(
                        $,
                        null
                    )],
                    'head lp': ($): _i_out._T_Edge_Attributes.L.SG => ['head lp', _i_generic.process_text(
                        $,
                        null
                    )],
                    'headclip': ($): _i_out._T_Edge_Attributes.L.SG => ['headclip', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'headlabel': ($): _i_out._T_Edge_Attributes.L.SG => ['headlabel', _i_generic.process_text(
                        $,
                        null
                    )],
                    'headport': ($): _i_out._T_Edge_Attributes.L.SG => ['headport', _i_generic.process_text(
                        $,
                        null
                    )],
                    'height': ($): _i_out._T_Edge_Attributes.L.SG => ['height', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'id': ($): _i_out._T_Edge_Attributes.L.SG => ['id', _i_generic.process_text(
                        $,
                        null
                    )],
                    'label': ($): _i_out._T_Edge_Attributes.L.SG => ['label', _i_generic.process_text(
                        $,
                        null
                    )],
                    'label distance': ($): _i_out._T_Edge_Attributes.L.SG => ['label distance', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'label angle': ($): _i_out._T_Edge_Attributes.L.SG => ['label angle', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'label float': ($): _i_out._T_Edge_Attributes.L.SG => ['label float', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'labelfloat': ($): _i_out._T_Edge_Attributes.L.SG => ['labelfloat', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'labelhref': ($): _i_out._T_Edge_Attributes.L.SG => ['labelhref', _i_generic.process_text(
                        $,
                        null
                    )],
                    'label lp': ($): _i_out._T_Edge_Attributes.L.SG => ['label lp', _i_generic.process_text(
                        $,
                        null
                    )],
                    'layer': ($): _i_out._T_Edge_Attributes.L.SG => ['layer', _i_generic.process_text(
                        $,
                        null
                    )],
                    'len': ($): _i_out._T_Edge_Attributes.L.SG => ['len', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'lhead': ($): _i_out._T_Edge_Attributes.L.SG => ['lhead', _i_generic.process_text(
                        $,
                        null
                    )],
                    'lp': ($): _i_out._T_Edge_Attributes.L.SG => ['lp', _i_generic.process_text(
                        $,
                        null
                    )],
                    'ltail': ($): _i_out._T_Edge_Attributes.L.SG => ['ltail', _i_generic.process_text(
                        $,
                        null
                    )],
                    'minlen': ($): _i_out._T_Edge_Attributes.L.SG => ['minlen', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'pen width': ($): _i_out._T_Edge_Attributes.L.SG => ['pen width', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'pos': ($): _i_out._T_Edge_Attributes.L.SG => ['pos', _i_generic.process_text(
                        $,
                        null
                    )],
                    'same head': ($): _i_out._T_Edge_Attributes.L.SG => ['same head', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'same tail': ($): _i_out._T_Edge_Attributes.L.SG => ['same tail', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'showboxes': ($): _i_out._T_Edge_Attributes.L.SG => ['showboxes', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'style': ($): _i_out._T_Edge_Attributes.L.SG => ['style', _i_generic.process_text(
                        $,
                        null
                    )],
                    'tail lp': ($): _i_out._T_Edge_Attributes.L.SG => ['tail lp', _i_generic.process_text(
                        $,
                        null
                    )],
                    'tailclip': ($): _i_out._T_Edge_Attributes.L.SG => ['tailclip', _i_generic.process_boolean(
                        $,
                        {
                            'deserializer': $p['value deserializers']['boolean'],
                        }
                    )],
                    'taillabel': ($): _i_out._T_Edge_Attributes.L.SG => ['taillabel', _i_generic.process_text(
                        $,
                        null
                    )],
                    'tailport': ($): _i_out._T_Edge_Attributes.L.SG => ['tailport', _i_generic.process_text(
                        $,
                        null
                    )],
                    'tooltip': ($): _i_out._T_Edge_Attributes.L.SG => ['tooltip', _i_generic.process_text(
                        $,
                        null
                    )],
                    'weight': ($): _i_out._T_Edge_Attributes.L.SG => ['weight', _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )],
                    'xlabel': ($): _i_out._T_Edge_Attributes.L.SG => ['xlabel', _i_generic.process_text(
                        $,
                        null
                    )],
                    'xlp': ($): _i_out._T_Edge_Attributes.L.SG => ['xlp', _i_generic.process_text(
                        $,
                        null
                    )],
                }),
            }
        ),
    }
)
export const Graph: _i_signatures._T_Graph = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'name': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "name",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_text(
                        $,
                        null
                    ),
                }
            )),
            'tree': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "tree",
                }
            ), ($) => Tree(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary.literal({
                        'undirected': ($): _i_out._T_Graph._type.SG => ['undirected', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'edges': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "edges",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_list(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'yin': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "yin",
                                                            }
                                                        ), ($) => End_Point_Specification(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                        'yang': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "yang",
                                                            }
                                                        ), ($) => End_Point_Specification(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                        'attributes': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "attributes",
                                                            }
                                                        ), ($) => Edge_Attributes(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                    }),
                                                }
                                            ),
                                        }
                                    )),
                                }),
                            }
                        )],
                        'directed': ($): _i_out._T_Graph._type.SG => ['directed', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'edges': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "edges",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_list(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'from': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "from",
                                                            }
                                                        ), ($) => End_Point_Specification(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                        'to': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "to",
                                                            }
                                                        ), ($) => End_Point_Specification(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                        'attributes': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "attributes",
                                                            }
                                                        ), ($) => Edge_Attributes(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                    }),
                                                }
                                            ),
                                        }
                                    )),
                                }),
                            }
                        )],
                    }),
                }
            )),
        }),
    }
)
export const Attribute_Value: _i_signatures._T_Attribute_Value = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary.literal({
            'number': ($): _i_out._T_Attribute_Value.SG => ['number', _i_generic.process_text(
                $,
                null
            )],
            'string': ($): _i_out._T_Attribute_Value.SG => ['string', _i_generic.process_text(
                $,
                null
            )],
            'html string': ($): _i_out._T_Attribute_Value.SG => ['html string', _i_generic.process_text(
                $,
                null
            )],
        }),
    }
)
