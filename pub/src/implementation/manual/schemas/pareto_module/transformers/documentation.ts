import * as _p from 'pareto-core-transformer'

import * as d_in_s from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as d_in from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

//dependecies
import * as t_schema_to_documentation from "../../pareto_schema/transformers/documentation"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Module = ($: d_in.Module): d_out.Directory => {
    return _p.dictionary.literal({
        "doc.txt": sh.n.file( sh.group([
            t_schema_to_documentation.Schema_Tree($['schema tree'])
        ]))
    })
}
