import * as _p from 'pareto-core/dist/assign'
import { location_to_string } from 'pareto-core/dist/misc/location_to_string'


import * as d_in_s from "pareto/dist/interface/generated/liana/schemas/schema/data"
import * as d_in from "pareto/dist/interface/generated/liana/schemas/module/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

//transformations
import * as t_pareto_library_to_typescript_light from "pareto/dist/implementation/manual/schemas/library/transformers/typescript_light"
import * as t_liana_to_pareto_interface from "pareto/dist/implementation/manual/schemas/module/transformers/pareto_interface"
import * as t_liana_to_pareto_implementation from "pareto/dist/implementation/manual/schemas/module/transformers/pareto_implementation"
import * as t_typescript_light_library_to_fountain_pen_block from "pareto/dist/implementation/manual/schemas/typescript_light/transformers/fountain_pen_block"

//resolvers
import * as r_pareto_interface from "pareto/dist/implementation/generated/liana/schemas/interface/resolve"
import * as r_pareto_implementation from "pareto/dist/implementation/generated/liana/schemas/implementation/resolve"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Module = ($: d_in.Module): d_out.Directory => t_typescript_light_library_to_fountain_pen_block.Directory(
    t_pareto_library_to_typescript_light.Temp_Library(
        {
            'interface': r_pareto_interface.r_Module_Set(
                t_liana_to_pareto_interface.Module($),
                {
                    'parameters': {
                        'lookups': null,
                        'values': null,
                    },
                    'location 2 string': location_to_string
                }
            ),
            'implementation': r_pareto_implementation.r_Module_Set(
                t_liana_to_pareto_implementation.Module($),
                {
                    'parameters': {
                        'lookups': null,
                        'values': null,
                    },
                    'location 2 string': location_to_string
                }
            ),
        },
        {
            'phase': 'development',
        },
    )
)