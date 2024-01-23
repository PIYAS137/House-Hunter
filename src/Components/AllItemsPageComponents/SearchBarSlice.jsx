import { useForm } from "react-hook-form";
import { bangladeshCities } from "../../Utils/Cities";



const SearchBarSlice = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)




    return (
        <div className=" py-2 flex justify-end bg-orange-300">



            <form onSubmit={handleSubmit(onSubmit)} className=" flex justify-center items-center container mx-auto">

                <div className=" mx-5">
                    <input {...register("pay")} type="range" min={0} max="18000" step={3000} className="range range-xs range-error" />
                    <div className="w-full flex justify-between text-xs mx-2">
                        <span>3k</span>
                        <span>6k</span>
                        <span>9k</span>
                        <span>12k</span>
                        <span>15k</span>
                        <span>18k</span>
                    </div>
                </div>

                {/* Available date field */}
                <select {...register("date")} className="p-3 rounded-lg input-bordered mr-2">
                    <option value="" >Avaialablity</option>
                    <option value="5" >Next 5 days</option>
                    <option value="10" >Next 10 days</option>
                    <option value="20" >Next 20 days</option>
                    <option value="30" >Next 30 days</option>
                </select>


                {/* Room size field */}
                <select {...register("size")} className="p-3 rounded-lg input-bordered mr-2">
                    <option value="" >Flat Size</option>
                    <option value="800" >Less 800 sqft</option>
                    <option value="1200" >Less 1200 sqft</option>
                    <option value="1600" >Less 1600 sqft</option>
                    <option value="2000" >Less 2000 sqft</option>
                </select>

                {/* search by bed room number */}
                <select {...register("bedroom")} className="p-3 rounded-lg input-bordered mr-2">
                    <option value="" >Bedrooms numbers </option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                    <option value="5" >5</option>
                    <option value="6" >6</option>

                </select>
                {/* search by city field */}
                <select {...register("city")} className="p-3 rounded-lg input-bordered">
                    <option value="" >Search by City</option>
                    {
                        bangladeshCities.map((one, i) => {
                            return (
                                <option key={i} value={one}>{one.toUpperCase()}</option>
                            )
                        })
                    }
                </select>

                <input type="submit" value={"search"} className="uppercase btn mx-2 bg-yellow-500 border-black" />
            </form>
        </div>
    )
}

export default SearchBarSlice