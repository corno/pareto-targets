import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'

import * as s_pm from "pareto/dist/generated/interface/schemas/module/data_types/target"
import * as d_fp_temp from "pareto-fountain-pen/dist/temp/temp_types"

import * as r_pareto_module from "pareto/dist/temp/resolvers/module"

import * as t_pareto_module_to_fountain_pen_block from "../../transformations/pareto/module/fountain_pen_block"

import { $$ as a_write_to_directory } from "pareto-fountain-pen/dist/procedures/unguaranteed/write_to_directory"

export type Parameters = {
    'module': s_pm.Module<_ed.Source_Location>
    'path': string
    'target':
    | ['documentation', null]
    | ['graphviz', null]
    | ['lionweb', null]
    | ['typescript', null]
}

export const $$: _easync.Unguaranteed_Procedure_Initializer<Parameters, d_fp_temp.Directory_Error> = (
    $p
) => {
    return a_write_to_directory(
        {
            'directory': t_pareto_module_to_fountain_pen_block.Module(
                r_pareto_module.Module(
                    $p.module,
                    {
                        'parameters': {
                            'lookups': null,
                            'values': null,
                        },
                        'location 2 string': _ed.location_to_string
                    }
                ),
                {

                    'target': $p.target
                }
            ),
            'path': $p.path,
            'indentation': "    ",
            'newline': "\n",
            'remove before creating': true,
        }
    )
}