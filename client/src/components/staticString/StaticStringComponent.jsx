
import strings from '../assets/strings.json';

const StaticStringComponent = () => {
  return (
    <div>
      <h1>{strings.welcomeMessage}</h1>
      <p>{strings.contactUs}</p>
    </div>
  );
};

export default StaticStringComponent;