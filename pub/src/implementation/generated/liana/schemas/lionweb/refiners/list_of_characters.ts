    
    import * as _p from "pareto-core/dist/expression"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lionweb/deserialize"
    
    import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"
    
    import * as v_unmarshall from "./astn_parse_tree"
    
    export const SerializationChunk: t_signatures.SerializationChunk = ($, abort, $p) => v_unmarshall.SerializationChunk(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['tbd', null],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['tbd', null],
        ),
    )
    
    export const MetaPointer: t_signatures.MetaPointer = ($, abort, $p) => v_unmarshall.MetaPointer(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['tbd', null],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['tbd', null],
        ),
    )
    
    export const SerializationChunks: t_signatures.SerializationChunks = ($, abort, $p) => v_unmarshall.SerializationChunks(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['tbd', null],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['tbd', null],
        ),
    )
