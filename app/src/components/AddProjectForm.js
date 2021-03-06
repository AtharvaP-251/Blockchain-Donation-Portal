import React from "react";
import { useToasts } from "react-toast-notifications";

const AddProjectForm = (props) => {
  const {
    handleChange,
    handleSubmit,
    state: { name, description, amountNeeded, imageUrl },
  } = props;
  const { addToast } = useToasts();

  const onSubmit = async (e) => {
    e.preventDefault();
    const toast = await handleSubmit();
    toast
      ? addToast("Submission successful!", { appearance: "success" })
      : addToast("Submission failed!", { appearance: "error" });
  };

  return (
    <div className="container">
      <div className="notification">
        <form onSubmit={onSubmit}>
          {/* Project Name */}
          <div className="field">
            <label className="label">Campaign</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter name of the campaign"
                onChange={handleChange}
                name="name"
                value={name}
              />
            </div>
            <p className="help" id="warning">
              If you are a donor, creating your first campaign will convert your
              status to a charity
            </p>
          </div>
          {/* Description */}
          <div className="field">
            <label className="label">About</label>
            <div className="control">
              <textarea
                className="textarea"
                id="word-wrap"
                type="text"
                placeholder="Enter the description"
                onChange={handleChange}
                name="description"
                value={description}
              />
            </div>
          </div>
          {/* Image URL */}
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <textarea
                className="input"
                type="text"
                placeholder="Enter url of the image"
                onChange={handleChange}
                name="imageUrl"
                value={imageUrl}
              />
            </div>
          </div>
          {/* Amount Needed */}
          <div className="field">
            <label className="label">Goal</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Enter value of the goal"
                onChange={handleChange}
                name="amountNeeded"
                value={amountNeeded}
              />
            </div>
          </div>
          {/* Submit */}
          <div className="field">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectForm;
