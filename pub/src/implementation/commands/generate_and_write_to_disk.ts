import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

import * as s_pm from "pareto/dist/interface/generated/pareto/schemas/module/data_types/target"
import * as d_fp_temp from "../../modules/pareto-fountain-pen-directory/interface/temp_types"

import * as r_pareto_module from "pareto/dist/temp/resolvers/module"

import * as t_pareto_module_to_fountain_pen_block from "../transformers/schemas/pareto/module/fountain_pen_block"

import { $$ as p_write_to_directory } from "../../modules/pareto-fountain-pen-directory/implementation/commands/write_to_directory"

import * as d_remove from "exupery-resources/dist/interface/generated/pareto/schemas/remove/data_types/source"
import * as d_make_directory from "exupery-resources/dist/interface/generated/pareto/schemas/make_directory/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_path from "exupery-resources/dist/interface/generated/pareto/schemas/path/data_types/source"

export type Parameters = {
    'module': s_pm.Module<_ed.Source_Location>
    'path': d_path.Node_Path
    'target':
    | ['documentation', null]
    | ['graphviz', null]
    | ['lionweb', null]
    | ['typescript', null]
}


import * as resources_exupery from "exupery-resources/dist/interface/resources"

export type Command = _et.Command<d_fp_temp.Directory_Error, Parameters>

export type Signature = _et.Command_Procedure<
    Command,
    {
        'remove': resources_exupery.commands.remove
        'make directory': resources_exupery.commands.make_directory
        'write file': resources_exupery.commands.write_file
    },
    null
>

export const $$: Signature = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        p_write_to_directory($cr, $qr).execute(
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