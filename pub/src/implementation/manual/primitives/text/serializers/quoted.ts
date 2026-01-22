import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/serializer'

export type Signature = ($: string) => string

//dependencies

import { $$ as s_escaped_character } from "pareto-standard-operations/dist/implementation/manual/primitives/text/serializers/escaped_character"

export const $$: Signature = ($) => '"'
    + s_escaped_character(
        $,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    )
    + '"'