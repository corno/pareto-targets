
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/alan_light/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/alan_light/data"

export const Identifier: t_signatures.Identifier = ($) => $

export const Path: t_signatures.Path = ($) => ({
    'up steps': _p_cc(
        $['up steps'],
        ($) => _p.list.map(
            $,
            ($) => null
        )
    ),
    'context': _p_cc(
        $['context'],
        ($) => ({
            'sibling': _p_cc(
                $['sibling'],
                ($) => null
            ),
            'state constraint': _p_cc(
                $['state constraint'],
                ($) => ({
                    'name': _p_cc(
                        $['name'],
                        ($) => Identifier(
                            $
                        )
                    ),
                })
            ),
        })
    ),
    'selection steps': _p_cc(
        $['selection steps'],
        ($) => _p.list.map(
            $,
            ($) => ({
                'group': _p_cc(
                    $['group'],
                    ($) => ({
                        'name': _p_cc(
                            $['name'],
                            ($) => Identifier(
                                $
                            )
                        ),
                    })
                ),
                'state constraint': _p_cc(
                    $['state constraint'],
                    ($) => ({
                        'name': _p_cc(
                            $['name'],
                            ($) => Identifier(
                                $
                            )
                        ),
                    })
                ),
                'reference': _p_cc(
                    $['reference'],
                    ($) => ({
                        'name': _p_cc(
                            $['name'],
                            ($) => Identifier(
                                $
                            )
                        ),
                    })
                ),
            })
        )
    ),
})

export const Node: t_signatures.Node = ($) => ({
    'properties': _p_cc(
        $['properties'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => ({
                'type': _p_cc(
                    $['type'],
                    ($) => _p.decide.state(
                        $,
                        ($): t_out.Node.properties.D.type_ => {
                            switch ($[0]) {
                                case 'collection':
                                    return _p.ss(
                                        $,
                                        ($) => ['collection', {
                                            'node': _p_cc(
                                                $['node'],
                                                ($) => Node(
                                                    $
                                                )
                                            ),
                                            'key': _p_cc(
                                                $['key'],
                                                ($) => Identifier(
                                                    $
                                                )
                                            ),
                                        }]
                                    )
                                case 'group':
                                    return _p.ss(
                                        $,
                                        ($) => ['group', {
                                            'node': _p_cc(
                                                $['node'],
                                                ($) => Node(
                                                    $
                                                )
                                            ),
                                        }]
                                    )
                                case 'text':
                                    return _p.ss(
                                        $,
                                        ($) => ['text', {
                                            'constraint': _p_cc(
                                                $['constraint'],
                                                ($) => _p.optional.map(
                                                    $,
                                                    ($) => ({
                                                        'path': _p_cc(
                                                            $['path'],
                                                            ($) => Path(
                                                                $
                                                            )
                                                        ),
                                                        'dictionary': _p_cc(
                                                            $['dictionary'],
                                                            ($) => Identifier(
                                                                $
                                                            )
                                                        ),
                                                    })
                                                )
                                            ),
                                        }]
                                    )
                                case 'state group':
                                    return _p.ss(
                                        $,
                                        ($) => ['state group', {
                                            'states': _p_cc(
                                                $['states'],
                                                ($) => _p.dictionary.map(
                                                    $,
                                                    ($, id) => ({
                                                        'constraints': _p_cc(
                                                            $['constraints'],
                                                            ($) => _p.dictionary.map(
                                                                $,
                                                                ($, id) => ({
                                                                    'path': _p_cc(
                                                                        $['path'],
                                                                        ($) => Path(
                                                                            $
                                                                        )
                                                                    ),
                                                                })
                                                            )
                                                        ),
                                                        'node': _p_cc(
                                                            $['node'],
                                                            ($) => Node(
                                                                $
                                                            )
                                                        ),
                                                    })
                                                )
                                            ),
                                        }]
                                    )
                                default:
                                    return _p.au(
                                        $[0]
                                    )
                            }
                        }
                    )
                ),
            })
        )
    ),
})

export const Root: t_signatures.Root = ($) => ({
    'numerical types': _p_cc(
        $['numerical types'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => null
        )
    ),
    'root': _p_cc(
        $['root'],
        ($) => Node(
            $
        )
    ),
})
