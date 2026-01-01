import * as _p from 'pareto-core-transformer'

import * as _in_s from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as d_in from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

//transformations

import * as t_schema_to_graphviz from "../../pareto_schema/transformers/graphviz_high_level"
import * as t_graphviz_to_fountain_pen from "../../graphviz_highlevel/transformers/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"



export const Schema_Tree = (
    $: _in_s.Schema_Tree,
    $p: {
        'graph name': string
    }
): d_out.Directory => {
    return _p.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _p.ss($, ($) => _p.dictionary_literal({
                "graphviz.dot": sh.n.file(
                    t_graphviz_to_fountain_pen.Graph(
                        t_schema_to_graphviz.Schema($, {
                            'graph name': $p['graph name']
                        })
                    ),
                )
            }))
            case 'set': return _p.ss($, ($) => Schemas($))
            default: return _p.au($[0])
        }
    })
}

export const Schemas = ($: _in_s.Schemas): d_out.Directory => {
    return $.dictionary.map<d_out.Directory.D>(($, key) => sh.n.directory(Schema_Tree($, { 'graph name': key })))
}

export const Module = (
    $: d_in.Module,
    $p: {
        'graph name': string
    }
): d_out.Directory => {
    return Schema_Tree($['schema tree'], { 'graph name': $p['graph name'] })
}