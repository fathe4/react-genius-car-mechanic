import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './addService.css'

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service added')
                    reset()
                }
                console.log(res);
            })
    };
    return (
        <div className='add-service'>
            <h2>Add service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder='title' {...register("title")} />

                {/* include validation with required or other standard HTML validation rules */}
                <textarea placeholder='description'  {...register("description", { required: true })} />
                <input placeholder='price' type='number' {...register("price", { required: true })} />
                <input placeholder='img' type='text' {...register("img", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;