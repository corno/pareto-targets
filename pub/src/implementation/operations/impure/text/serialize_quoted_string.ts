import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { Signature as x } from "../../../../interface/algorithms/operations/impure/text/serialize_quoted_string"

export type Signature = ($: string) => string

//dependencies

import { $$ as op_escape_character } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/text/escape_character"

export const $$: Signature = ($) => '"'
    + op_escape_character(
        $,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    )
    + '"'