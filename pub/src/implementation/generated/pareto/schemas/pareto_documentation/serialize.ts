    import * as _p from 'pareto-core-serializer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/pareto_documentation/serialize"
    import * as _i_serialize from "../../generic/serialize"
    import * as _i_marshall from "./marshall"
    import * as _i_r_graphviz from "../graphviz_high_level/serialize"
    
    
    export const Graphviz_Directory: _i_signatures._T_Graphviz_Directory = ($, $p) => _i_serialize.Document(
        _i_marshall.Graphviz_Directory(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
