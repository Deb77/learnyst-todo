import classNames from "classnames";

import pageStyles from "../../../page.module.css";
import styles from "./textField.module.css";

const TextField = ({ name, value, onChange, placeholder }) => {
  return <input name={name} value={value} onChange={onChange} className={classNames(pageStyles.fullWidth, styles.textField)} placeholder={placeholder} />;
};

export default TextField;
