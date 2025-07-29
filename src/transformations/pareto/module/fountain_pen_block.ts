import * as pd from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

import * as _in from "pareto/dist/generated/interface/schemas/module/resolved"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unconstrained"


//transformations

import * as t_pareto_module_to_documentation from "./documentation"
import * as t_pareto_module_to_graphvix from "./graphviz"
import * as t_pareto_module_to_lionweb from "./lionweb"
import * as t_pareto_module_to_typescript from "./typescript"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

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
    return _ea.cc($p.target, ($) => {
        switch ($[0]) {
            case 'documentation': return _ea.ss($, ($) => t_pareto_module_to_documentation.Module(module))
            case 'graphviz': return _ea.ss($, ($) => t_pareto_module_to_graphvix.Module(module))
            case 'lionweb': return _ea.ss($, ($) => t_pareto_module_to_lionweb.Module(module))
            case 'typescript': return _ea.ss($, ($) => t_pareto_module_to_typescript.Module(module))
            default: return _ea.au($[0])
        }
    })
}