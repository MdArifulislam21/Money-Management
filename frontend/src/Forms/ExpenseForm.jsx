import { useForm } from "react-hook-form"
import React, {useState} from 'react'
import axios from "axios";



export default function ExpenseForm() {
  const { register,handleSubmit,watch,formState: { errors },} = useForm({ defaultValues: { category: "Home rent", amount: 0, date: new Date().toISOString().split('T')[0] } });
    const {category, amount, date} = watch();
    const onSubmit = (data) => console.log(data)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)


    const SubmitHandler = async (data) =>{
        setError("");
        setLoading(true);
        const token = localStorage.getItem("access_token");
        try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/expenses/",
            data,
            {headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send token here
            }}
        );

        } catch (err) {
        console.error(err);
        setError(err);
        } finally {
        setLoading(false);
        }
    };


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="flex bg-gray-100 justify-center w-screen h-screen items-start">
        <form className="bg-gray-200 p-10 m-5 w-100" onSubmit={handleSubmit(SubmitHandler)}>
            <h1 className="mb-4">Insert expense Data.</h1>
            <div className="mb-1 p-2"> category</div>
            <input className="mb-2 rounded-md bg-white p-2" defaultValue="Salary" {...register("category")} />


            <div className="mb-1 p-2"> Amount </div>
            <input className="mb-2 p-2 rounded-md bg-white" {...register("amount", { required: true })} />
            <div className="mb-1 p-2" >Date</div>
            <input className="mb-2 p-2 rounded-md bg-white" type='date' {...register("date", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <input className="btn mt-3 bg-green-400 px-6 py-4 rounded-lg block" type="submit" /> 
        </form>
    </div>
  )
}