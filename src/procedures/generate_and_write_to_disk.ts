import * as _ed from 'exupery-core-data'

import * as s_pm from "pareto/dist/generated/interface/schemas/module/data_types/target"

import * as r_pareto_module from "pareto/dist/resolvers/module"

import * as t_pareto_module_to_fountain_pen_block from "../transformations/pareto/module/fountain_pen_block"

import * as wtfs from "pareto-fountain-pen/dist/actions/write_to_file_system"

export const $$ = (
    $: s_pm.Module<_ed.Source_Location>,
    $p: {
        'path': string,
        'target':
        | ['documentation', null]
        | ['graphviz', null]
        | ['lionweb', null]
        | ['typescript', null]
    }
) => {
    return wtfs.Directory(
        t_pareto_module_to_fountain_pen_block.Module(
            r_pareto_module.Module(
                $,
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
        {
            'path': $p.path,
            'indentation': "    ",
            'newline': "\n",
            'remove before creating': true,
        }
    )
}