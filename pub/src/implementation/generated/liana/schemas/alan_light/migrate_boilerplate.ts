
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/alan_light/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/alan_light/data"
export const Identifier: t_signatures.Identifier = ($,) => $
export const Path: t_signatures.Path = ($,) => ({
    'up steps': _p.deprecated_cc($['up steps'], ($,) => $.__l_map(($,) => ({
    }))),
    'context': _p.deprecated_cc($['context'], ($,) => ({
        'sibling': _p.deprecated_cc($['sibling'], ($,) => ({
        })),
        'state constraint': _p.deprecated_cc($['state constraint'], ($,) => ({
            'name': _p.deprecated_cc($['name'], ($,) => Identifier($)),
        })),
    })),
    'selection steps': _p.deprecated_cc($['selection steps'], ($,) => $.__l_map(($,) => ({
        'group': _p.deprecated_cc($['group'], ($,) => ({
            'name': _p.deprecated_cc($['name'], ($,) => Identifier($)),
        })),
        'state constraint': _p.deprecated_cc($['state constraint'], ($,) => ({
            'name': _p.deprecated_cc($['name'], ($,) => Identifier($)),
        })),
        'reference': _p.deprecated_cc($['reference'], ($,) => ({
            'name': _p.deprecated_cc($['name'], ($,) => Identifier($)),
        })),
    }))),
})
export const Node: t_signatures.Node = ($,) => ({
    'properties': _p.deprecated_cc($['properties'], ($,) => $.__d_map(($,key,) => ({
        'type': _p.deprecated_cc($['type'], ($,) => _p.decide.state($, ($,): t_out.Node.properties.D.type_ => {
            switch ($[0]) {
                case 'collection':
                    return _p.ss($, ($,) => ['collection', ({
                        'node': _p.deprecated_cc($['node'], ($,) => Node($)),
                        'key': _p.deprecated_cc($['key'], ($,) => Identifier($)),
                    })])
                case 'group':
                    return _p.ss($, ($,) => ['group', ({
                        'node': _p.deprecated_cc($['node'], ($,) => Node($)),
                    })])
                case 'text':
                    return _p.ss($, ($,) => ['text', ({
                        'constraint': _p.deprecated_cc($['constraint'], ($,) => $.__o_map(($,) => ({
                            'path': _p.deprecated_cc($['path'], ($,) => Path($)),
                            'dictionary': _p.deprecated_cc($['dictionary'], ($,) => Identifier($)),
                        }))),
                    })])
                case 'state group':
                    return _p.ss($, ($,) => ['state group', ({
                        'states': _p.deprecated_cc($['states'], ($,) => $.__d_map(($,key,) => ({
                            'constraints': _p.deprecated_cc($['constraints'], ($,) => $.__d_map(($,key,) => ({
                                'path': _p.deprecated_cc($['path'], ($,) => Path($)),
                            }))),
                            'node': _p.deprecated_cc($['node'], ($,) => Node($)),
                        }))),
                    })])
                default:
                    return _p.au($[0])
            }
        })),
    }))),
})
export const Root: t_signatures.Root = ($,) => ({
    'numerical types': _p.deprecated_cc($['numerical types'], ($,) => $.__d_map(($,key,) => ({
    }))),
    'root': _p.deprecated_cc($['root'], ($,) => Node($)),
})
