import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_r_graphviz from "../graphviz_high_level/marshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/pareto_documentation/marshall"


export const Graphviz_Directory: _i_signatures._T_Graphviz_Directory = ($, $p) => ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'directory': return _pa.ss($, ($) => ({
            'state': "directory",
            'value': Graphviz_Directory(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'file': return _pa.ss($, ($) => ({
            'state': "file",
            'value': _i_r_graphviz.Graph(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})])]
