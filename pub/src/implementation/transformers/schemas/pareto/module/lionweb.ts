import * as _pt from 'pareto-core-transformer'

import * as d_in_s from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as d_in from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

//dependencies
import * as t_schema_to_lionweb from "../schema/lionweb"
import * as t_lionweb_to_json from "../../lionweb/json"
import * as t_json_to_fountain_pen_block from "pareto-json/dist/implementation/transformers/schemas/json/fountain_pen_block"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Schema_Tree = ($: d_in_s.Schema_Tree): d_out.Directory => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _pt.ss($, ($) => _pt.dictionary_literal({
                "lionweb.json": sh.n.file(
                    t_json_to_fountain_pen_block.Document(
                        t_lionweb_to_json.SerializationChunk(
                            t_schema_to_lionweb.Schema($)
                        )
                    ),
                )
            }))
            case 'set': return _pt.ss($, ($) => Schemas($))
            default: return _pt.au($[0])
        }
    })
}

export const Schemas = ($: d_in_s.Schemas): d_out.Directory => {
    return $.dictionary.map<d_out.Directory.D>(($, key) => sh.n.directory(Schema_Tree($)))
}
export const Module = ($: d_in.Module): d_out.Directory => {
    return Schema_Tree($['schema tree'])
}