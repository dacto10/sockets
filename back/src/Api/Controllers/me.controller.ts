import { Request, Response } from "express";


const getTest = (_: Request, res: Response) => {
    res.send("I work");
};

const TestController = {
    getTest,
};

export {
    TestController
};