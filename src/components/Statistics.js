import { checkPropTypes } from "prop-types"
import PropTypes from 'prop-types';
export default function Statistics 
({title, children}) 
{
return (

    <div>
        {titele && <h2>{title}</h2>}
        {children}
    </div>
)

}

Statistics.protoType = {
    title : PropTypes.string
}
