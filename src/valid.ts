import {body,validationResult} from 'express-validator';
 import express, {Request,Response} from 'express';
const app = express();
app.use(express.json());
app.post('/register',
  
body('email').isEmail(),
body('password').isLength({ min: 6 }),

  (req: express.Request, res: express.Response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
     res.sendStatus(201);
},
);
app.listen(4000,()=>{
 console.log(" >>>>>>  server running ");
 
})
