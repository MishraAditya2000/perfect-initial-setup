class ApiResponse{
  constructor(message="Successful",statusCode,notify,data){
    this.message=message,
    this.statusCode=statusCode,
    this.notify=notify,
    this.data=data,
    this.success=statusCode<400
  }
}

export {ApiResponse}