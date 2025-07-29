import * as pd from 'exupery-core-data'
import * as pa from 'exupery-core-alg'

import * as _in_s from "pareto/dist/generated/interface/schemas/schema/resolved"
import * as _in from "pareto/dist/generated/interface/schemas/module/resolved"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unconstrained"

//transformations
import * as t_schema_to_lionweb from "../schema/lionweb"
import * as t_lionweb_to_json from "../../lionweb/json"
import * as t_json_to_fountain_pen_block from "pareto-json/dist/transformations/json/fountain_pen_block"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Schemas = ($: _in_s.Schemas): _out.Directory => {
    return $.dictionary.map<_out.Directory.D>(($, key) => {
        return pa.cc($, ($) => {
            switch ($[0]) {
                case 'schema': return pa.ss($, ($) => sh.d.directory({
                    "lionweb.json": sh.d.file(
                        t_json_to_fountain_pen_block.Document(
                            t_lionweb_to_json.SerializationChunk(
                                t_schema_to_lionweb.Schema($)
                            )
                        ),
                    )
                }))
                case 'set': return pa.ss($, ($) => sh.d.directory(Schemas($)))
                default: return pa.au($[0])
            }
        })
    })
}
export const Module = ($: _in.Module): _out.Directory => {
    return Schemas($.schemas)
}