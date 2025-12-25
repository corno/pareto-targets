import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

import * as signatures from "../../interface/signatures"

//data types
import * as d_write_to_directory from "../../modules/pareto-fountain-pen-directory/interface/to_be_generated/write_to_dictionary"

//dependencies
import * as r_pareto_module from "pareto/dist/implementation/temp/resolvers/module"
import * as t_pareto_module_to_fountain_pen_block from "../transformers/schemas/pareto/module/fountain_pen_block"


export const $$: signatures.commands.generate_and_write_to_disk = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        $cr['write to directory'].execute(
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
            },
            ($) => $,
        )
    ]
)