import * as pd from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

import * as _in from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as _out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"


//transformations

import * as t_pareto_module_to_documentation from "./documentation"
import * as t_pareto_module_to_graphvix from "./graphviz"
import * as t_pareto_module_to_lionweb from "./lionweb"
import * as t_pareto_module_to_typescript from "./typescript"
import { Signature } from "../../../../../interface/algorithms/transformations/pareto/module/fountain_pen_block"


export const Module = (
    $: _in.Module,
    $p: {
        'target':
        | ['documentation', null]
        | ['graphviz', null]
        | ['lionweb', null]
        | ['typescript', null]
    }

): _out.Directory => {
    const module = $
    return _ea.cc($p.target, ($): _out.Directory => {
        switch ($[0]) {
            case 'documentation': return _ea.ss($, ($) => t_pareto_module_to_documentation.Module(module))
            case 'graphviz': return _ea.ss($, ($) => t_pareto_module_to_graphvix.Module(module, { 'graph name': "schema" }))
            case 'lionweb': return _ea.ss($, ($) => t_pareto_module_to_lionweb.Module(module))
            case 'typescript': return _ea.ss($, ($) => t_pareto_module_to_typescript.Module(module))
            default: return _ea.au($[0])
        }
    })
}