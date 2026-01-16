import * as _p from 'pareto-core-transformer'
import { location_to_string } from 'pareto-core-internals/dist/misc/location_to_string'


import * as d_in_s from "pareto/dist/interface/generated/pareto/schemas/schema/data"
import * as d_in from "pareto/dist/interface/generated/pareto/schemas/module/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data"

//transformations
import * as t_exupery_library_to_typescript_light from "exupery/dist/implementation/manual/schemas/library/transformers/typescript_light"
import * as t_pareto_to_exupery_interface from "pareto/dist/implementation/manual/schemas/module/transformers/exupery_interface"
import * as t_pareto_to_exupery_implementation from "pareto/dist/implementation/manual/schemas/module/transformers/exupery_implementation"
import * as t_typescript_light_library_to_fountain_pen_block from "exupery/dist/implementation/manual/schemas/typescript_light/transformers/fountain_pen_block"

//resolvers
import * as r_exupery_interface from "exupery/dist/implementation/generated/pareto/schemas/interface/resolve"
import * as r_exupery_implementation from "exupery/dist/implementation/generated/pareto/schemas/implementation/resolve"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Module = ($: d_in.Module): d_out.Directory => t_typescript_light_library_to_fountain_pen_block.Directory(
    t_exupery_library_to_typescript_light.Temp_Library(
        {
            'interface': r_exupery_interface.r_Module_Set(
                t_pareto_to_exupery_interface.Module($),
                {
                    'parameters': {
                        'lookups': null,
                        'values': null,
                    },
                    'location 2 string': location_to_string
                }
            ),
            'implementation': r_exupery_implementation.r_Module_Set(
                t_pareto_to_exupery_implementation.Module($),
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