class ApiError extends Error{
  constructor({
    statusCode,
    message="Failed",
    notify="Unexpected Error",
    errors=[],
    stack=""
  }){
    super(notify)
    this.statusCode=statusCode,
    this.data=null,
    this.message=message,
    this.notify=notify,
    this.success=false,
    this.errors=this.errors

    if(stack){
      this.stack=stack
    }
    else{
      Error.captureStackTrace(this,this.constructor)
    }
  }
}

export {ApiError}