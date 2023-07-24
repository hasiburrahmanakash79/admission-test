import { useContext } from "react";
import UseTitle from "../../Hook/UseTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Authentication } from "../../Provider/AuthProvider";

const Apply = () => {
  const { user } = useContext(Authentication);

  const Image_Hosting_Token = import.meta.env.VITE_image_hosting_apiKey;

  const { register, handleSubmit } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const { name, subject, number, email, date, address } = data;
          const apply = {
            name,
            subject,
            number,
            email,
            date,
            image: imgURL,
            address,
            status: "Confirm",
          };
          console.log(data);
          fetch("http://localhost:5000/apply", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(apply)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            // if(data.data.insertedId){
              Swal.fire({
                showConfirmButton: false,
                timer: 1500,
                title: "Item added Successful",
                icon: "success",
              });
            
          })
        }
      });
  };

  return (
    <div className="p-5 container mx-auto">
      <UseTitle title={"Apply college"}></UseTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 p-10 rounded-lg w-full"
      >
        <div>
          <label className="label">
            <span className="label-text">Candidate Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Type here"
            className="input w-full"
          />
        </div>
        <div className="md:grid grid-cols-2 gap-5">
          <div>
            <label className="label">
              <span className="label-text">Candidate Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              defaultValue={user?.email}
              placeholder="Type here"
              className="input w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              {...register("number", { required: true })}
              type="number"
              defaultValue={user?.displayName}
              placeholder="Type here"
              className="input w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <select
              className="select w-full"
              {...register("subject", { required: true })}
            >
              <option disabled >
                Subject select
              </option>
              <option >Science</option>
              <option>Mathematics</option>
              <option>Chemistry</option>
              <option>Physics</option>
              <option>Computer Science</option>
              <option>EEE</option>
              <option>LLB</option>
              <option>Genetics engineering</option>
              <option>BBA</option>
              <option>English</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <input
              {...register("date", { required: true })}
              type="date"
              placeholder="Type here"
              className="input w-full"
            />
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <textarea
            type="text"
            {...register("address", { required: true })}
            placeholder="Address"
            className="input w-full py-2"
          />
        </div>
        <div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full my-3"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-outline order-none w-full my-5"
          />
        </div>
      </form>
    </div>
  );
};

export default Apply;
