
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/pareto_documentation/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_graphviz from "../graphviz_high_level/marshall"

export const Graphviz_Directory: t_signatures.Graphviz_Directory = ($) => ['dictionary', _p.dictionary.map(
    $,
    ($, id) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'file':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'file',
                            'value': v_external_graphviz.Graph(
                                $
                            ),
                        })
                    )
                case 'directory':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'directory',
                            'value': Graphviz_Directory(
                                $
                            ),
                        })
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )]
)]
