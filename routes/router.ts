import { Router, Request, Response} from 'express';

const router = Router();

router.get('/mensajes' , ( req: Request, res: Response) => {
  
  res.json({
    ok: true,
    mensaje: 'Todo ok!!'
  })
});
router.post('/mensajes' , ( req: Request, res: Response) => {
  const body = req.body
  console.log(body)
  res.json({
    ok: true,
    data: body
  })
});
router.post('/mensajes/:id' , ( req: Request, res: Response) => {
  const body = req.body
  const params = req.params;
  console.log(body)
  res.json({
    ok: true,
    data: body,
    params
  })
});

export default router