
import * as _p from "pareto-core/dist/transformer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/pareto_documentation/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/pareto_documentation/data"

import * as v_graphviz from "../graphviz_high_level/migrate_boilerplate"
export const Graphviz_Directory: t_signatures.Graphviz_Directory = ($) => $.__d_map(
    ($,id) => _p.decide.state(
        $, 
        ($): t_out.Graphviz_Directory.D => {
            switch ($[0]) {
                case 'file':
                    return _p.ss(
                        $, 
                        ($) => ['file', v_graphviz.Graph(
                            $
                        )]
                    )
                case 'directory':
                    return _p.ss(
                        $, 
                        ($) => ['directory', Graphviz_Directory(
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
