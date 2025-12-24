import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export type Signature = ($: string) => string

//dependencies

import { $$ as op_escape_character } from "pareto-standard-operations/dist/implementation/operations/impure/text/escape_character"

export const $$: Signature = ($) => '"'
    + op_escape_character(
        $,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    )
    + '"'