import "./MainForm.scss";
import { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    genre: "",
    age: "",
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
          <option value="" disabled></option>
          <option value="Femme">Femme</option>
          <option value="Homme">Homme</option>
        </select>
      </p>

      <div className="field required">
        <label className="label">Pratiquez-vous une activité sportive ?</label>
        <ul className="sports">
          {["OUI", "NON"].map((item, i) => (
            <li className="sport" key={i}>
              <input
                className="sport-input"
                type="radio"
                name="sports"
                value={item} /* Utilisation de 'item' au lieu de 'i' */
                id={`sports-${i}`}
                checked={formData.sports === item} /* Comparaison avec 'item' */
                onChange={handleChange}
              />
              <label htmlFor={`sports-${i}`}>{item}</label>
            </li>
          ))}
        </ul>
        {formData.sports === "OUI" && (
          <p className="field">
            <label className="label" htmlFor="sportsActivities">
              Si oui, laquelle ?
            </label>
            <input
              className="text-input "
              id="sportsActivities"
              type="text"
              name="sportsActivities"
              required
              value={formData.sportsActivities}
              onChange={handleChange}
            />
          </p>
        )}
      </div>

      <p className="field required">
        <label className="label" htmlFor="objectives">
          Quel est votre objectif ?
        </label>
        <select
          id="objectives"
          className="select"
          name="objectives"
          value={formData.objectives}
          onChange={handleChange}
        >
          <option value="" disabled></option>
          <option value="La prise de masse">La prise de masse</option>
          <option value="La perte de poids">La perte de poids</option>
          <option value="Gain de force">Gain de force/performance</option>
        </select>
      </p>

      <p className="field">
        <label className="label" htmlFor="about">
          A propos de vous :
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

      <p className="field half">
        <input className="main_btn-form" type="submit" value="Send" />
      </p>
    </form>
  );
};

export default FormComponent;
