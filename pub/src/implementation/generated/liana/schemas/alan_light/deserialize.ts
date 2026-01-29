
import * as _p from "pareto-core/dist/deserializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/alan_light/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

import * as v_unmarshall from "./unmarshall"

export const Identifier: t_signatures.Identifier = ($, abort, $p) => v_unmarshall.Identifier(
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

export const Path: t_signatures.Path = ($, abort, $p) => v_unmarshall.Path(
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

export const Node: t_signatures.Node = ($, abort, $p) => v_unmarshall.Node(
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

export const Root: t_signatures.Root = ($, abort, $p) => v_unmarshall.Root(
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
