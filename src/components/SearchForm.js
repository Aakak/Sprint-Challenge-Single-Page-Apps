import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";

const SearchForm = props => {
  console.log(props.characters);
  console.log(props.handler);
  return (
    <section className="search-form">
      <Form handler={props.handler} characters={props.characters}>
        <Field component="select" className="food-select" name="Search">
          {props.characters.map(character => (
            <option value={character.name}>{character.name}</option>
          ))}
        </Field>
        <button>Search</button>
      </Form>
    </section>
  );
};

const FormikSearchForm = withFormik({
  handleSubmit(values, { props }) {
    const characters = props.characters;
    const filtered = characters.filter(x => {
      return x.name.indexOf(values.Search) > -1;
    });

    props.handler(filtered);
  }
})(SearchForm);
export default FormikSearchForm;
