import { IRequest, IResponse, IApplication, IError, INextFunction, IAPIError } from '../../interfaces';

export default function errorMiddleware(err: IAPIError, req: IRequest, res: IResponse, next: INextFunction): void {
    let errorMessage : object;
    if (err && err.message && err.message.startsWith('validation error')) {
      let e : any = err.errors[0];
      errorMessage = e.messages[0].replace(/"/g, '') || 'Error'
      
    }
    console.log(err);
    const response = {
      status: err.status || 400,
      message: errorMessage || err.message,
      data: err.data || null,
      success: err.success || false
    };

    console.error(`\n---------------------- 
     url = ${req.url} 
     body = ${JSON.stringify(req.body)}
     error =  ${JSON.stringify(response)}
     ---------------------- \n`);
    res.status(err.status || 400);
    res.json(response);
    next();
  }
  