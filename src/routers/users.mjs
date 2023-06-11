import express from 'express';
import bcrypt from 'bcrypt';
import {save,getAll,getOne} from "../service/users.mjs";

const router = express.Router();

router.get('/:firstName', async (req,res) => {
    const { firstName } = req.params;
    const user = await getOne(firstName);
    res.status(200).json(user);
})

router.get('/', async (req,res) => {
    const users = await getAll();
    res.status(200).json(users);
})

router.post('/', async (req,res) => {
    const { body } = req;

    const user = {
        firstName:body.firstName,
        passwordHash: bcrypt.hashSync(body.password, 8),
        createdDate:Date.now()
    }

    //console.log(body);
    // const createdUser = await save(body);

    const createdUser = await save(user);

    res.status(200).json(createdUser);

    //res.status(200).json({});

})

export default router;