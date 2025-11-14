import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FontIcon({ icon, ...rest }) {
  return <FontAwesomeIcon icon={icon} {...rest} />;
}

export { FontIcon };
