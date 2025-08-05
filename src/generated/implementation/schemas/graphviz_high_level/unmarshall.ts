import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/graphviz_high_level/unconstrained"
import * as _i_signatures from "../../../interface/schemas/graphviz_high_level/unmarshall"


export const Attribute_Value: _i_signatures._T_Attribute_Value = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'html string': ($): _i_out._T_Attribute_Value => _i_generic.wrap_unconstrained_state_group(
                ['html string', _i_generic.process_text(
                    $,
                    null
                )],
                null
            ),
            'number': ($): _i_out._T_Attribute_Value => _i_generic.wrap_unconstrained_state_group(
                ['number', _i_generic.process_text(
                    $,
                    null
                )],
                null
            ),
            'string': ($): _i_out._T_Attribute_Value => _i_generic.wrap_unconstrained_state_group(
                ['string', _i_generic.process_text(
                    $,
                    null
                )],
                null
            ),
        }),
    }
)
export const Edge_Attributes: _i_signatures._T_Edge_Attributes = ($) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'arrowhead': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['arrowhead', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'arrowsize': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['arrowsize', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'arrowtail': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['arrowtail', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'bgcolor': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['bgcolor', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'color': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['color', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'colorscheme': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['colorscheme', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'comment': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['comment', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'constraint': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['constraint', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'decorate': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['decorate', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'dir': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['dir', _i_generic.process_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'back': ($): _i_out._T_Edge_Attributes.L.SG.dir => _i_generic.wrap_unconstrained_state_group(
                                        ['back', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'both': ($): _i_out._T_Edge_Attributes.L.SG.dir => _i_generic.wrap_unconstrained_state_group(
                                        ['both', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'forward': ($): _i_out._T_Edge_Attributes.L.SG.dir => _i_generic.wrap_unconstrained_state_group(
                                        ['forward', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'none': ($): _i_out._T_Edge_Attributes.L.SG.dir => _i_generic.wrap_unconstrained_state_group(
                                        ['none', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                }),
                            }
                        )],
                        null
                    ),
                    'edge lp': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['edge lp', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'edge target': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['edge target', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'edge tooltip': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['edge tooltip', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'edge url': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['edge url', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'head lp': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['head lp', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'headclip': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['headclip', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'headlabel': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['headlabel', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'headport': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['headport', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'height': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['height', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'id': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['id', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'label': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['label', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'label angle': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['label angle', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'label distance': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['label distance', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'label float': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['label float', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'label lp': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['label lp', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'labelfloat': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['labelfloat', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'labelhref': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['labelhref', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'layer': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['layer', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'len': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['len', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'lhead': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['lhead', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'lp': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['lp', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'ltail': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['ltail', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'minlen': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['minlen', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'pen width': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['pen width', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'pos': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['pos', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'same head': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['same head', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'same tail': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['same tail', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'showboxes': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['showboxes', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'style': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['style', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'tail lp': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['tail lp', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'tailclip': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['tailclip', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'taillabel': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['taillabel', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'tailport': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['tailport', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'tooltip': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['tooltip', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'weight': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['weight', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'xlabel': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['xlabel', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'xlp': ($): _i_out._T_Edge_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['xlp', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                }),
            }
        ),
    }
)
export const End_Point_Specification: _i_signatures._T_End_Point_Specification = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
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
                                'port': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "port",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                            }),
                        }
                    ),
                }
            )),
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
        }),
    }
)
export const Graph: _i_signatures._T_Graph = ($) => _i_generic.process_group(
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
                null
            )),
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'directed': ($): _i_out._T_Graph._type => _i_generic.wrap_unconstrained_state_group(
                            ['directed', _i_generic.process_group(
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
                                                            'attributes': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "attributes",
                                                                }
                                                            ), ($) => Edge_Attributes(
                                                                $,
                                                                null
                                                            )),
                                                            'from': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "from",
                                                                }
                                                            ), ($) => End_Point_Specification(
                                                                $,
                                                                null
                                                            )),
                                                            'to': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "to",
                                                                }
                                                            ), ($) => End_Point_Specification(
                                                                $,
                                                                null
                                                            )),
                                                        }),
                                                    }
                                                ),
                                            }
                                        )),
                                    }),
                                }
                            )],
                            null
                        ),
                        'undirected': ($): _i_out._T_Graph._type => _i_generic.wrap_unconstrained_state_group(
                            ['undirected', _i_generic.process_group(
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
                                                            'attributes': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "attributes",
                                                                }
                                                            ), ($) => Edge_Attributes(
                                                                $,
                                                                null
                                                            )),
                                                            'yang': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "yang",
                                                                }
                                                            ), ($) => End_Point_Specification(
                                                                $,
                                                                null
                                                            )),
                                                            'yin': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "yin",
                                                                }
                                                            ), ($) => End_Point_Specification(
                                                                $,
                                                                null
                                                            )),
                                                        }),
                                                    }
                                                ),
                                            }
                                        )),
                                    }),
                                }
                            )],
                            null
                        ),
                    }),
                }
            )),
        }),
    }
)
export const Graph_Attributes: _i_signatures._T_Graph_Attributes = ($) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'charset': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['charset', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'clusterrank': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['clusterrank', _i_generic.process_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'global': ($): _i_out._T_Graph_Attributes.L.SG.clusterrank => _i_generic.wrap_unconstrained_state_group(
                                        ['global', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'local': ($): _i_out._T_Graph_Attributes.L.SG.clusterrank => _i_generic.wrap_unconstrained_state_group(
                                        ['local', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'none': ($): _i_out._T_Graph_Attributes.L.SG.clusterrank => _i_generic.wrap_unconstrained_state_group(
                                        ['none', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                }),
                            }
                        )],
                        null
                    ),
                    'color': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['color', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'color scheme': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['color scheme', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'comment': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['comment', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'compound': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['compound', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'concentrate': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['concentrate', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'dpi': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['dpi', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'font color': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['font color', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'font name': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['font name', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'font path': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['font path', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'font size': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['font size', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'label': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['label', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'label distance': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['label distance', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'label location': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['label location', _i_generic.process_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'bottom': ($): _i_out._T_Graph_Attributes.L.SG.label_location => _i_generic.wrap_unconstrained_state_group(
                                        ['bottom', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'top': ($): _i_out._T_Graph_Attributes.L.SG.label_location => _i_generic.wrap_unconstrained_state_group(
                                        ['top', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                }),
                            }
                        )],
                        null
                    ),
                    'label scheme': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['label scheme', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'landscape': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['landscape', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'layer list': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['layer list', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'layer separator': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['layer separator', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'layers': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['layers', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'margin': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['margin', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'max iteration': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['max iteration', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'mclimit': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['mclimit', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'mindist': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['mindist', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'mode': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['mode', _i_generic.process_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'in': ($): _i_out._T_Graph_Attributes.L.SG.mode => _i_generic.wrap_unconstrained_state_group(
                                        ['in', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'in out': ($): _i_out._T_Graph_Attributes.L.SG.mode => _i_generic.wrap_unconstrained_state_group(
                                        ['in out', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'no output': ($): _i_out._T_Graph_Attributes.L.SG.mode => _i_generic.wrap_unconstrained_state_group(
                                        ['no output', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'out': ($): _i_out._T_Graph_Attributes.L.SG.mode => _i_generic.wrap_unconstrained_state_group(
                                        ['out', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                }),
                            }
                        )],
                        null
                    ),
                    'newrank': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['newrank', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'no loop': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['no loop', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'normalize': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['normalize', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'ordering': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['ordering', _i_generic.process_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'in': ($): _i_out._T_Graph_Attributes.L.SG.ordering => _i_generic.wrap_unconstrained_state_group(
                                        ['in', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'in out': ($): _i_out._T_Graph_Attributes.L.SG.ordering => _i_generic.wrap_unconstrained_state_group(
                                        ['in out', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'out': ($): _i_out._T_Graph_Attributes.L.SG.ordering => _i_generic.wrap_unconstrained_state_group(
                                        ['out', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                }),
                            }
                        )],
                        null
                    ),
                    'orientation': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['orientation', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'output mode': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['output mode', _i_generic.process_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'edges first': ($): _i_out._T_Graph_Attributes.L.SG.output_mode => _i_generic.wrap_unconstrained_state_group(
                                        ['edges first', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'nodes first': ($): _i_out._T_Graph_Attributes.L.SG.output_mode => _i_generic.wrap_unconstrained_state_group(
                                        ['nodes first', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                }),
                            }
                        )],
                        null
                    ),
                    'output order': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['output order', _i_generic.process_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'breadth first': ($): _i_out._T_Graph_Attributes.L.SG.output_order => _i_generic.wrap_unconstrained_state_group(
                                        ['breadth first', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'dfs': ($): _i_out._T_Graph_Attributes.L.SG.output_order => _i_generic.wrap_unconstrained_state_group(
                                        ['dfs', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                }),
                            }
                        )],
                        null
                    ),
                    'overlap': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['overlap', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'pack': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['pack', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'pack mode': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['pack mode', _i_generic.process_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'graph': ($): _i_out._T_Graph_Attributes.L.SG.pack_mode => _i_generic.wrap_unconstrained_state_group(
                                        ['graph', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'node': ($): _i_out._T_Graph_Attributes.L.SG.pack_mode => _i_generic.wrap_unconstrained_state_group(
                                        ['node', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                }),
                            }
                        )],
                        null
                    ),
                    'pad': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['pad', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'page': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['page', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'quadtree': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['quadtree', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'quantum': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['quantum', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'rankdir': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['rankdir', _i_generic.process_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'bottom top': ($): _i_out._T_Graph_Attributes.L.SG.rankdir => _i_generic.wrap_unconstrained_state_group(
                                        ['bottom top', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'left right': ($): _i_out._T_Graph_Attributes.L.SG.rankdir => _i_generic.wrap_unconstrained_state_group(
                                        ['left right', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'right left': ($): _i_out._T_Graph_Attributes.L.SG.rankdir => _i_generic.wrap_unconstrained_state_group(
                                        ['right left', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'top bottom': ($): _i_out._T_Graph_Attributes.L.SG.rankdir => _i_generic.wrap_unconstrained_state_group(
                                        ['top bottom', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                }),
                            }
                        )],
                        null
                    ),
                    'ranksep': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['ranksep', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'ratio': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['ratio', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'remincross': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['remincross', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'rotate': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['rotate', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'scale': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['scale', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'searchsize': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['searchsize', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'sep': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['sep', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'showboxes': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['showboxes', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'size': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['size', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'smoothing': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['smoothing', _i_generic.process_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'none': ($): _i_out._T_Graph_Attributes.L.SG.smoothing => _i_generic.wrap_unconstrained_state_group(
                                        ['none', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'spring': ($): _i_out._T_Graph_Attributes.L.SG.smoothing => _i_generic.wrap_unconstrained_state_group(
                                        ['spring', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'triangle': ($): _i_out._T_Graph_Attributes.L.SG.smoothing => _i_generic.wrap_unconstrained_state_group(
                                        ['triangle', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                }),
                            }
                        )],
                        null
                    ),
                    'sortv': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['sortv', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'splines': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['splines', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'start': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['start', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'style': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['style', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'stylesheet': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['stylesheet', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'target': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['target', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'tooltip': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['tooltip', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'truecolor': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['truecolor', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'viewport': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['viewport', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'width': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['width', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'xdotversion': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['xdotversion', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'xlabel': ($): _i_out._T_Graph_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['xlabel', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                }),
            }
        ),
    }
)
export const Node_Attributes: _i_signatures._T_Node_Attributes = ($) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'color': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['color', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'colorscheme': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['colorscheme', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'comment': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['comment', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'concentrate': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['concentrate', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'fill color': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['fill color', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'fixed size': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['fixed size', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'font color': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['font color', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'font name': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['font name', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'font size': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['font size', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'group': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['group', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'height': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['height', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'image': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['image', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'label': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['label', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'labelloc': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['labelloc', _i_generic.process_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'bottom': ($): _i_out._T_Node_Attributes.L.SG.labelloc => _i_generic.wrap_unconstrained_state_group(
                                        ['bottom', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'center': ($): _i_out._T_Node_Attributes.L.SG.labelloc => _i_generic.wrap_unconstrained_state_group(
                                        ['center', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                    'top': ($): _i_out._T_Node_Attributes.L.SG.labelloc => _i_generic.wrap_unconstrained_state_group(
                                        ['top', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        null
                                    ),
                                }),
                            }
                        )],
                        null
                    ),
                    'layers': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['layers', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'margin': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['margin', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'nojustify': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['nojustify', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'orientation': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['orientation', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'pen width': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['pen width', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'peripheries': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['peripheries', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'pos': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['pos', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'rects': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['rects', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'regular': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['regular', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'root': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['root', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'shape': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['shape', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'showboxes': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['showboxes', _i_generic.process_boolean(
                            $,
                            null
                        )],
                        null
                    ),
                    'sides': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['sides', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'skew': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['skew', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'style': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['style', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'target': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['target', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'tooltip': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['tooltip', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'width': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['width', _i_generic.process_number(
                            $,
                            null
                        )],
                        null
                    ),
                    'xlabel': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['xlabel', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                    'xlp': ($): _i_out._T_Node_Attributes.L => _i_generic.wrap_unconstrained_state_group(
                        ['xlp', _i_generic.process_text(
                            $,
                            null
                        )],
                        null
                    ),
                }),
            }
        ),
    }
)
export const Tree: _i_signatures._T_Tree = ($) => _i_generic.process_group(
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
                null
            )),
            'elements': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "elements",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_state_group(
                        $,
                        {
                            'states': _pa.dictionary_literal({
                                'node': ($): _i_out._T_Tree.elements.D => _i_generic.wrap_unconstrained_state_group(
                                    ['node', _i_generic.process_group(
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
                                                    null
                                                )),
                                            }),
                                        }
                                    )],
                                    null
                                ),
                                'sub': ($): _i_out._T_Tree.elements.D => _i_generic.wrap_unconstrained_state_group(
                                    ['sub', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'tree': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "tree",
                                                    }
                                                ), ($) => Tree(
                                                    $,
                                                    null
                                                )),
                                                'type': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "type",
                                                    }
                                                ), ($) => _i_generic.process_state_group(
                                                    $,
                                                    {
                                                        'states': _pa.dictionary_literal({
                                                            'cluster': ($): _i_out._T_Tree.elements.D.SG.sub._type => _i_generic.wrap_unconstrained_state_group(
                                                                ['cluster', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                            'group': ($): _i_out._T_Tree.elements.D.SG.sub._type => _i_generic.wrap_unconstrained_state_group(
                                                                ['group', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                            'subgraph': ($): _i_out._T_Tree.elements.D.SG.sub._type => _i_generic.wrap_unconstrained_state_group(
                                                                ['subgraph', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                        }),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    null
                                ),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
