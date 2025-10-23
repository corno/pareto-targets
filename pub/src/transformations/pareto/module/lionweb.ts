import * as _ea from 'exupery-core-alg'

import * as _in_s from "pareto/dist/generated/interface/schemas/schema/data_types/source"
import * as _in from "pareto/dist/generated/interface/schemas/module/data_types/source"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

//transformations
import * as t_schema_to_lionweb from "../schema/lionweb"
import * as t_lionweb_to_json from "../../lionweb/json"
import * as t_json_to_fountain_pen_block from "pareto-json/dist/transformations/json/fountain_pen_block"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Schema_Tree = ($: _in_s.Schema_Tree): _out.Directory => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _ea.ss($, ($) => _ea.dictionary_literal({
                "lionweb.json": sh.n.file(
                    t_json_to_fountain_pen_block.Document(
                        t_lionweb_to_json.SerializationChunk(
                            t_schema_to_lionweb.Schema($)
                        )
                    ),
                )
            }))
            case 'set': return _ea.ss($, ($) => Schemas($))
            default: return _ea.au($[0])
        }
    })
}

export const Schemas = ($: _in_s.Schemas): _out.Directory => {
    return $.dictionary.map<_out.Directory.D>(($, key) => sh.n.directory(Schema_Tree($)))
}
export const Module = ($: _in.Module): _out.Directory => {
    return Schema_Tree($['schema tree'])
}