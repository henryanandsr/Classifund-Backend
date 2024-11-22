"use strict";

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const getAllTransaction = async (req, res) => {
    res.status(200).json({
        status: 200,
        message: "All transactions retrieved successfully",
        data: []
    });
}

export { getAllTransaction };