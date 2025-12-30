import * as _pt from 'pareto-core-transformer'

import * as _in_s from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as d_in from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

//dependecies
import * as t_schema_to_documentation from "../schema/documentation"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Module = ($: d_in.Module): d_out.Directory => {
    return _pt.dictionary_literal({
        "doc.txt": sh.n.file( sh.group([
            t_schema_to_documentation.Schema_Tree($['schema tree'])
        ]))
    })
}
