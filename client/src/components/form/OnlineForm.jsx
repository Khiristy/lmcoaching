import "./OnlineForm.module.scss";
import { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    genre: "",
    age: "50",
    sports: "",
    sportsActivities: "",
    objectives: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        choice: checked
          ? [...prev.choice, value]
          : prev.choice.filter((v) => v !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="field required half">
        <label className="label required" htmlFor="lastName">
          Nom
        </label>
        <input
          className="text-input"
          id="lastName"
          type="text"
          name="lastName"
          required
          value={formData.lastName}
          onChange={handleChange}
        />
      </p>

      <p className="field required half">
        <label className="label required" htmlFor="firstName">
          Prénom
        </label>
        <input
          className="text-input"
          id="firstName"
          type="text"
          name="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
      </p>

      <p className="field required">
        <label className="label" htmlFor="email">
          E-mail
        </label>
        <input
          className="text-input"
          id="email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </p>

      <p className="field half">
        <label className="label" htmlFor="select">
          genre
        </label>
        <select
          id="select"
          className="select"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        >
          <option value="" selected></option>
          <option value="Femme">Femme</option>
          <option value="Homme">Homme</option>
          {/* <option value="back-end">Back-end developer</option> */}
        </select>
      </p>

      <div className="field">
  <label className="label">Pratiquez-vous une activité sportive ?</label>
  <ul className="sports">
    {["OUI", "NON"].map((item, i) => (
      <li className="sport" key={i}>
        <input
          className="sport-input"
          type="radio"
          name="sports"
          value={item}  /* Utilisation de 'item' au lieu de 'i' */
          id={`sports-${i}`}
          checked={formData.sports === item}  /* Comparaison avec 'item' */
          onChange={handleChange}
        />
        <label htmlFor={`sports-${i}`}>{item}</label>
      </li>
    ))}
  </ul>
</div>

      <p className="field">
        <label className="label" htmlFor="about">
          About
        </label>
        <textarea
          className="textarea"
          id="about"
          name="about"
          rows="4"
          cols="50"
          value={formData.about}
          onChange={handleChange}
        />
      </p>
{/* 
      <p className="field half">
        <label className="label" htmlFor="select">
          Position
        </label>
        <select
          id="select"
          className="select"
          name="position"
          value={formData.position}
          onChange={handleChange}
        >
          <option value="" selected>
            Select a position
          </option>
          <option value="ceo">CEO</option>
          <option value="front-end">Front-end developer</option>
          <option value="back-end">Back-end developer</option>
        </select>
      </p> */}

      <p className="field half">
        <input className="button" type="submit" value="Send" />
      </p>
    </form>
  );
};

export default FormComponent;
