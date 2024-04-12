import React from "react";
import { useSelector } from "react-redux";
import { Input, TextArea } from "../ui";

function Form(props) {
  const {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  } = props;
  const { isLoading } = useSelector((state) => state.article);

  return (
    <form onSubmit={formSubmit}>
      <Input label={"Title"} state={title} setState={setTitle} />
      <TextArea
        label={"Description"}
        state={description}
        setState={setDescription}
      />
      <TextArea
        label={"Body"}
        state={body}
        setState={setBody}
        height={"300px"}
      />
      <button
        disabled={isLoading}
        className="w-100 btn btn-lg btn-primary mt-2"
        type="submit"
      >
        {isLoading ? "Loading..." : "Create"}
      </button>
    </form>
  );
}

export default Form;
