import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/pareto_documentation/data_types/unconstrained"
import * as _i_r_graphviz from "../graphviz_high_level/unmarshall"
import * as _i_signatures from "../../../interface/schemas/pareto_documentation/unmarshall"


export const Graphviz_Directory: _i_signatures._T_Graphviz_Directory = ($, $p) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_unconstrained_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'directory': ($): _i_out._T_Graphviz_Directory.D.SG => ['directory', Graphviz_Directory(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )],
                    'file': ($): _i_out._T_Graphviz_Directory.D.SG => ['file', _i_r_graphviz.Graph(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )],
                }),
            }
        ),
    }
)
