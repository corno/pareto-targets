import * as _ed from 'exupery-core-data'

import * as s_pm from "pareto/dist/generated/interface/schemas/module/unresolved"

import * as r_pareto_module from "pareto/dist/resolvers/module"

import * as t_pareto_module_to_fountain_pen_block from "../transformations/pareto/module/fountain_pen_block"

import * as t_fountain_pen_block_to_fountain_pen_lines from "pareto-fountain-pen/dist/transformations/block/lines"

import * as wtd from "pareto-fountain-pen/dist/other/write_to_disk"

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
    const x =  t_pareto_module_to_fountain_pen_block.Module(
        r_pareto_module.r_Module(
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
    )
    wtd.Directory(
        x,
        {
            'path': $p.path,
            'indentation': "    ",
            'newline': "\n"
        }
    )
}