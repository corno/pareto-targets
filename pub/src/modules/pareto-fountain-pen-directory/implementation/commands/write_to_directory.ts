
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as d_remove from "exupery-resources/dist/interface/generated/pareto/schemas/remove/data_types/source"
import * as d_make_directory from "exupery-resources/dist/interface/generated/pareto/schemas/make_directory/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"

import * as D from "../../interface/temp_types"

import { $$ as p_write_to_node } from "./write_to_node"
// import { Signature } from "../../../interface/algorithms/procedures/unguaranteed/write_to_directory"

import * as s_path from "exupery-resources/dist/implementation/serializers/schemas/path"


import * as resources_exupery from "exupery-resources/dist/interface/resources"

export type Command = _et.Command<D.Directory_Error, D.Directory_Parameters>

export type Procedure = _et.Command_Procedure<
    Command,
    {
        'remove': resources_exupery.commands.remove
        'make directory': resources_exupery.commands.make_directory
        'write file': resources_exupery.commands.write_file
    },
    null
>

export const $$: Procedure = _easync.create_command_procedure(
    ($p, $cr) => [
        _easync.p.sequence<D.Directory_Error>([
            _easync.p.if_(
                $p['remove before creating'],
                [
                    $cr.remove.execute(
                        {
                            'path': $p.path,
                            'error if not exists': false
                        },
                        ($) => ['remove', $],
                    )
                ]
            ),
            _easync.p.dictionary.parallel(
                $p.directory,
                ($, key) => [
                    p_write_to_node(
                        {
                            'remove': $cr.remove,
                            'make directory': $cr['make directory'],
                            'write file': $cr['write file'],
                        },
                        null,
                    ).execute(
                        {
                            'node': $,
                            'path': $p.path,
                            'key': key,
                            'indentation': $p.indentation,
                            'newline': $p.newline,
                            'remove before creating': false,
                        },
                        ($) => $,
                    ),
                ],
                ($): D.Directory_Error => ['nodes', $]
            )
        ])
    ]
)