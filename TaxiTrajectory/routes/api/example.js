"use strict"
exports.__esModule = true;

function Example(req, res, next)
{
    res.json({
                status: "successful",
                author: "CSTao"
            });
    return;
}

exports.Example = Example