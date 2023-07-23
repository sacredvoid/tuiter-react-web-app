import House from "./House";
import BooleanVariables from "./boolean-variables";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";
import IfElse from "./if-else";
import Spread from "./spread";
import TemplateLiterals from "./template-literals";
import TernaryOperator from "./ternary-operator";
import VariableTypes from "./variable-types";
import VariablesAndConstants from "./variables-and-constants";
import WorkingWithArrays from "./working-with-arrays";
import WorkingWithFunctions from "./working-with-functions";

function JavaScript() {
    console.log('Hello World!');
    return(
        <div>
            <h1> JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <WorkingWithFunctions/>
            <WorkingWithArrays/>
            <TemplateLiterals/>
            <House/>
            <Spread/>
            <Destructing/>
            <FunctionDestructing/>
        </div>
    );
};

export default JavaScript