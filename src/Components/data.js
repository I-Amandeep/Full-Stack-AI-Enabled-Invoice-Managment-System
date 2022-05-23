import axios from "axios"

export const  getData =async ()=>{
  let response= await axios.get("http://localhost:8080/Highradius-Backend/DbConnection");
console.log(response.data.pojo);
return response.data.pojo;
}


export const addInvoice =async({business_code, cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency
  , document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id})=> 
  { let data ="business_code="+business_code+"&cust_number="+cust_number+"&clear_date="+clear_date+"&buisness_year="+buisness_year+"&doc_id="+doc_id+"&posting_date="+posting_date+
  "&document_create_date="+document_create_date+"&due_in_date="+due_in_date+"&invoice_currency="+invoice_currency+"&document_type="+document_type+"&posting_id="+posting_id+
  "&total_open_amount="+total_open_amount+"&baseline_create_date="+baseline_create_date+"&cust_payment_terms="+cust_payment_terms+"&invoice_id="+invoice_id;
let response=await axios.get("http://localhost:8080/Highradius-Backend/add?"+data);
return response.data;

  }

  export const editInvoice=async({Invoice_Currency,Customer_payment_terms,sl_no})=>{
    let data="sl_no=" + sl_no +"&Invoice_Currency=" + Invoice_Currency + "&Customer_payment_terms="+Customer_payment_terms;
    let response=await axios.get("http://localhost:8080/Highradius-Backend/Edit?"+data);
    console.log(response);
  
    return response.data;
  }
  

  export const deleteInvoice =async({business_code, cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency
    , document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id})=> 
    { let data ="business_code="+business_code+"&cust_number="+cust_number+"&clear_date="+clear_date+"&buisness_year="+buisness_year+"&doc_id="+doc_id+"&posting_date="+posting_date+
    "&document_create_date="+document_create_date+"&due_in_date="+due_in_date+"&invoice_currency="+invoice_currency+"&document_type="+document_type+"&posting_id="+posting_id+
    "&total_open_amount="+total_open_amount+"&baseline_create_date="+baseline_create_date+"&cust_payment_terms="+cust_payment_terms+"&invoice_id="+invoice_id;
  let response=await axios.get("http://localhost:8080/Highradius-Backend/delete?"+data);
  return response.data;
  
    }
