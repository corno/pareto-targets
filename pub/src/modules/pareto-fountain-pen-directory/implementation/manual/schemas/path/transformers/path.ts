import * as _p from 'pareto-core/dist/expression'
import * as _pds from 'pareto-core/dist/deserializer'


import * as d_path from "pareto-resources/dist/interface/generated/liana/schemas/path/data"

const replace = ($: string, search: number, replace: number): string => _pds.text.deprecated_build(($i) => {
    _p_list_from_text($, ($) => $).__for_each(($) => {
        if ($ === search) {
            $i.add_character(replace)
        } else {
            $i.add_character($)
        }
    })
})

const replace_space = ($: string): string => replace($, 32, 95 /* space -> underscore */)


export const replace_space_in_context_path = ($: d_path.Node_Path): d_path.Node_Path => ({
    'context': {
        'start': $.context.start,
        'subpath': $.context.subpath.__l_map(($) => replace_space($)),
    },
    'node': replace_space($.node)
})