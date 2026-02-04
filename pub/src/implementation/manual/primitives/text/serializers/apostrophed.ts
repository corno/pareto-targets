import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/serializer'

import { $$ as s_escaped_character } from "pareto-standard-operations/dist/implementation/manual/primitives/text/serializers/escaped_character"

export const $$ = ($: string): string => "'"
    + s_escaped_character(
        $,
        {
            'character code': 39, // '
            'escape character code': 92, // \
        }
    )
    plus "'"