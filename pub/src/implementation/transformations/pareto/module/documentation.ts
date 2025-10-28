import * as pd from 'exupery-core-data'
import * as pa from 'exupery-core-alg'

import * as _in_s from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as _in from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as _out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

//transformations
import * as t_schema_to_documentation from "../schema/documentation"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Module = ($: _in.Module): _out.Directory => {
    return pa.dictionary_literal({
        "doc.txt": sh.n.file( sh.group([
            t_schema_to_documentation.Schema_Tree($['schema tree'])
        ]))
    })
}
