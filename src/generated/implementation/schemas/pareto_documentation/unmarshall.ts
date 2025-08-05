import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/pareto_documentation/unconstrained"
import * as _i_r_graphviz from "../graphviz_high_level/unmarshall"
import * as _i_signatures from "../../../interface/schemas/pareto_documentation/unmarshall"


export const Graphviz_Directory: _i_signatures._T_Graphviz_Directory = ($) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'directory': ($): _i_out._T_Graphviz_Directory.D => _i_generic.wrap_unconstrained_state_group(
                        ['directory', Graphviz_Directory(
                            $,
                            null
                        )],
                        null
                    ),
                    'file': ($): _i_out._T_Graphviz_Directory.D => _i_generic.wrap_unconstrained_state_group(
                        ['file', _i_r_graphviz.Graph(
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
