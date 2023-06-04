import axios from 'axios';

const Rest_Api_Call_GET="https://localhost:8080/show/all/data";

const Rest_Api_Call_Post="https://localhost:8080/show/create";

const Rest_Api_Call_Id="https://localhost:8080/show";

const Rest_Api_Call_Update="https://localhost:8080/show/update";

const Rest_Api_Call_Delete="https://localhost:8080/show/delete";

class EmpServices
{
   getAllEmp()
   {
    return axios.get(Rest_Api_Call_GET);
   }
   createEmp(employee)
   {
      return axios.post(Rest_Api_Call_Post, employee);
   }
  getEmpById(id)
  {
      return axios.get(Rest_Api_Call_Id+"/"+id);
  }
  updateEmployee(id, employee)
  {
    return axios.put(Rest_Api_Call_Update+"/"+id, employee);
  } 
  deleteEmployee(id)
  {
     return axios.delete( Rest_Api_Call_Delete + "/" +id);
  }

}

export default new EmpServices();