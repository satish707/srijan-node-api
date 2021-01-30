const validateParams = function (requestParams) {
    return function (req, res, next) {
        for (let param of requestParams) {
            if (checkParamPresent(Object.keys(req.params), param)) {
                let reqParam = req.params[param.param_key];
                if (!checkParamType(reqParam, param)) {
                    return res.status(400).send({
                        result: `${param.param_key} value: '${reqParam}' is of type ` +
                            `${typeof reqParam} but should be ${param.type}`
                    });
                }
            } else if (param.required) {
                return res.status(400).send({ result: `Missing Parameter ${param.param_key}` });
            }
        }
        next();
    }
};

const checkParamPresent = function (reqParams, paramObj) {
    return (reqParams.includes(paramObj.param_key));
};

const checkParamType = function (reqParam, paramObj) {
    const reqParamType = isNaN(parseInt(reqParam)) ? 'string' : 'number';
    return reqParamType === paramObj.type;
};

const runValidators = function (reqParam, paramObj) {
    for (let validator of paramObj.validator_functions) {
        if (!validator(reqParam)) {
            return false
        }
    }
    return true;
};

module.exports = {
    validateParams: validateParams
};