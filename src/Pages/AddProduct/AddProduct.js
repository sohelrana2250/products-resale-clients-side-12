import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';

const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const date = new Date();
    const imageHostKey = process.env.REACT_APP_imagebb;
    const email = user?.email;
    // console.log(imageHostKey);

    const handelAddProduct = (data) => {

        console.log(data);

        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        }).then((res) => res.json()).then((imgData) => {

            console.log(imgData);
            if (imgData.success) {
                const img = imgData.data.url;
                const addPhone = {

                    categoryID: data.categoryName,
                    location: data.location,
                    name: data.name,
                    resale_price: data.resale_price,
                    orginal_price: data.orginal_price,
                    used_year: data.used_year,
                    post_date: data.post_date,
                    img: img,
                    sallerName: data.sallerName,
                    email
                }

                addedPhoneData(addPhone);
            }
        }).catch((error) => {
            console.log(error.message);
        })

    }

    const addedPhoneData = (addPhone) => {

        fetch('https://b612-used-products-resale-server-side-mu.vercel.app/allPhoneDeails', {

            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addPhone)
        }).then((res) => res.json()).then((data) => {

            console.log(data);
        }).catch((error) => {
            console.log(error.message);
        })


    }
    return (
        <div className=' h-[800px] flex justify-center items-center'>


            <form onSubmit={handleSubmit(handelAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Title</span>
                    </label>

                    <input type='text' name='name' {...register('name', { required: "Title is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p role="alert">{errors.name?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">resale_price</span>
                    </label>

                    <input type='text' name='resale_price' {...register('resale_price', { required: "resale_price is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.resale_price && <p role="alert">{errors.resale_price?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">orginal_price</span>
                    </label>

                    <input type='text' name='orginal_price' {...register('orginal_price', { required: "orginal_price is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.orginal_price && <p role="alert">{errors.orginal_price?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">location</span>
                    </label>

                    <input type='text' name='location' {...register('location', { required: "location is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p role="alert">{errors.location?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">used_year</span>
                    </label>

                    <input type='text' name='used_year' {...register('used_year', { required: "used_year is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.used_year && <p role="alert">{errors.used_year?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">post_date</span>
                    </label>

                    <input type='text' value={date.toString()} name='post_date' {...register('post_date', { required: "post_date is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.post_date && <p role="alert">{errors.post_date?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">sallerName</span>
                    </label>

                    <input type='text' name='sallerName' {...register('sallerName', { required: "sallerName is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.sallerName && <p role="alert">{errors.sallerName?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Sepecility</span>
                    </label>
                    {/* <input type='password' name='password' {...register('password', { required: "Password is required" })} className="input input-bordered w-full max-w-xs" /> */}
                    {/* <select name='treatment' {...register('treatment', { required: "treatment is required" })} className="select select-bordered w-full max-w-xs">
                        {Specialty.map((v, index) => <option key={index} value={v.name}>{v.name}</option>)}
                    </select> */}

                    <select name='categoryName'  {...register('categoryName', { required: "categoryName is required" })} className="select select-bordered w-full">
                        <option value='637ec52e291a873c0865b6bd'>Tesla-Pie</option>
                        <option value='637ec52e291a873c0865b6bb'>Android</option>
                        <option value='637ec52e291a873c0865b6bc'>Iphone</option>
                    </select>


                    {errors.categoryName && <p role="alert">{errors.categoryName?.message}</p>}


                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>


                    <input type='file' name='photo' {...register('photo', { required: "'photo is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.photo && <p role="alert">{errors.photo?.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-6 mb-12' value='Add-Doctors' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;