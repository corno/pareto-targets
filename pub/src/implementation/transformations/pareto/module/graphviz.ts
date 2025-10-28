import * as pd from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

import * as _in_s from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as _in from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as _out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"


//transformations

import * as t_schema_to_graphviz from "../schema/graphviz_high_level"
import * as t_graphviz_to_fountain_pen from "../../graphviz/high_level/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Schema_Tree = (
    $: _in_s.Schema_Tree,
    $p: {
        'graph name': string
    }
): _out.Directory => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _ea.ss($, ($) => _ea.dictionary_literal({
                "graphviz.dot": sh.n.file(
                    t_graphviz_to_fountain_pen.Graph(
                        t_schema_to_graphviz.Schema($, {
                            'graph name': $p['graph name']
                        })
                    ),
                )
            }))
            case 'set': return _ea.ss($, ($) => Schemas($))
            default: return _ea.au($[0])
        }
    })
}

export const Schemas = ($: _in_s.Schemas): _out.Directory => {
    return $.dictionary.map<_out.Directory.D>(($, key) => sh.n.directory(Schema_Tree($, { 'graph name': key })))
}

export const Module = (
    $: _in.Module,
    $p: {
        'graph name': string
    }
): _out.Directory => {
    return Schema_Tree($['schema tree'], { 'graph name': $p['graph name'] })
}