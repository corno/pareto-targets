
import * as _p from "pareto-core/dist/deserializer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/graphviz_high_level/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

import * as v_unmarshall from "./unmarshall"

export const Graph_Attributes: t_signatures.Graph_Attributes = ($, abort, $p) => v_unmarshall.Graph_Attributes(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Node_Attributes: t_signatures.Node_Attributes = ($, abort, $p) => v_unmarshall.Node_Attributes(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Tree: t_signatures.Tree = ($, abort, $p) => v_unmarshall.Tree(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const End_Point_Specification: t_signatures.End_Point_Specification = ($, abort, $p) => v_unmarshall.End_Point_Specification(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Edge_Attributes: t_signatures.Edge_Attributes = ($, abort, $p) => v_unmarshall.Edge_Attributes(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Graph: t_signatures.Graph = ($, abort, $p) => v_unmarshall.Graph(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Attribute_Value: t_signatures.Attribute_Value = ($, abort, $p) => v_unmarshall.Attribute_Value(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)
