import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export type Signature = ($: string) => string

//dependencies

import { $$ as s_escaped_character } from "pareto-standard-operations/dist/implementation/serializers/primitives/text/escaped_character"

export const $$: Signature = ($) => '"'
    + s_escaped_character(
        $,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    )
    + '"'