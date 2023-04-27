import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { userSchema } from "../../utils/userSchema";
import { countries } from "../../utils/countries";

import classes from "./UserForm.module.css";
import Modal from "./Modal";

const UserForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    return () => {
      setShowModal(false);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);

    const response = await fetch(
      "https://react-forms-server.onrender.com/api/users",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      setShowModal(true);
      setSubmitting(false);
    }
  };

  return (
    <>
      {showModal && <Modal />}

      <section className={`wide-container ${classes["form"]}`}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes["form-container"]}
          data-modal={showModal}
        >
          <div className={classes["form-section"]}>
            <h1>Personal Details</h1>

            <div className={classes["form-inputs"]}>
              <label className={classes["form-label"]}>
                *First Name:
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName")}
                  data-error={errors?.firstName}
                />
                {errors?.firstName && <span>{errors?.firstName?.message}</span>}
              </label>

              <label className={classes["form-label"]}>
                *Last Name:
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName")}
                  data-error={errors?.lastName}
                />
                {errors?.lastName && <span>{errors?.lastName?.message}</span>}
              </label>

              <label className={classes["form-label"]}>
                *Gender:
                <select {...register("gender")} data-error={errors?.gender}>
                  <option value="">Choose an option</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
                {errors?.gender && <span>{errors?.gender?.message}</span>}
              </label>

              <label className={classes["form-label"]}>
                *Age:
                <input
                  type="number"
                  placeholder="Age in years"
                  {...register("age")}
                  data-error={errors?.age}
                />
                {errors?.age && <span>{errors?.age?.message}</span>}
              </label>

              <label className={classes["form-label"]}>
                Govt. ID Proof:
                <select {...register("govtIdType")}>
                  <option value="">Choose an option</option>
                  <option value="adhaar">Adhaar Card</option>
                  <option value="pan">PAN Card</option>
                </select>
                {errors?.govtIdType && (
                  <span>{errors?.govtIdType?.message}</span>
                )}
                <input
                  placeholder="ID Number"
                  {...register("govtIdNumber")}
                  data-error={errors?.govtIdNumber}
                />
                {errors?.govtIdNumber && (
                  <span>{errors?.govtIdNumber?.message}</span>
                )}
              </label>
            </div>
          </div>

          <hr />

          <div className={classes["form-section"]}>
            <h1>Contact Details</h1>

            <div className={classes["form-inputs"]}>
              <label className={classes["form-label"]}>
                Mobile Number:
                <input
                  type="number"
                  placeholder="Mobile Number"
                  {...register("number")}
                  data-error={errors?.number}
                />
                {errors?.number && <span>{errors?.number?.message}</span>}
              </label>

              <label className={classes["form-label"]}>
                Email:
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email")}
                />
              </label>

              <label className={classes["form-label"]}>
                Guardian Details:
                <select {...register("guardianType")}>
                  <option value="">Choose an option</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="guardian">Guardian</option>
                  <option value="other">Other</option>
                </select>
                <input
                  placeholder="Guardian Name"
                  {...register("guardianName")}
                  data-error={errors?.guardianName}
                />
                {errors?.guardianName && (
                  <span>{errors?.guardianName?.message}</span>
                )}
              </label>
            </div>
          </div>

          <hr />

          <div className={classes["form-section"]}>
            <h1>Address Details</h1>

            <div className={classes["form-inputs"]}>
              <label className={classes["form-label"]}>
                Country:
                <select {...register("country")}>
                  <option value="">Choose an option</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className={classes["form-label"]}>
                State:
                <input type="text" placeholder="State" {...register("state")} />
              </label>

              <label className={classes["form-label"]}>
                City:
                <input type="text" placeholder="City" {...register("city")} />
              </label>

              <label className={classes["form-label"]}>
                Address:
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address")}
                />
              </label>

              <label className={classes["form-label"]}>
                Pincode:
                <input
                  type="number"
                  placeholder="Pincode"
                  {...register("pincode")}
                />
              </label>
            </div>
          </div>

          <hr />

          <div className={classes["form-section"]}>
            <h1>Other Details</h1>

            <div className={classes["form-inputs"]}>
              <label className={classes["form-label"]}>
                Occupation:
                <input
                  type="text"
                  placeholder="Occupation"
                  {...register("occupation")}
                />
              </label>

              <label className={classes["form-label"]}>
                Religion:
                <select {...register("religion")}>
                  <option value="">Choose an option</option>
                  <option value="hinduism">Hinduism</option>
                  <option value="islam">Islam</option>
                  <option value="christianity">Christianity</option>
                  <option value="sikhism">Sikhism</option>
                  <option value="buddhism">Buddhism</option>
                  <option value="jainism">Jainism</option>
                </select>
              </label>

              <label className={classes["form-label"]}>
                Martital Status:
                <select {...register("maritalStatus")}>
                  <option value="">Choose an option</option>
                  <option value="married">Married</option>
                  <option value="unmarried">Unmarried</option>
                </select>
              </label>

              <label className={classes["form-label"]}>
                Blood Group:
                <select {...register("bloodGroup")}>
                  <option value="">Choose an option</option>
                  <option value="O-">O-</option>
                  <option value="O+">O+</option>
                  <option value="A-">A-</option>
                  <option value="A+">A+</option>
                  <option value="B-">B-</option>
                  <option value="B+">B+</option>
                  <option value="AB-">AB-</option>
                  <option value="AB+">AB+</option>
                </select>
              </label>
            </div>
          </div>

          <button className={classes["form-button"]} disabled={submitting}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default UserForm;
