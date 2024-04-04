import classNames from "classnames";

import pageStyles from "../../../page.module.css";
import styles from "./textArea.module.css";

const TextArea = ({ name, value, onChange, placeholder }) => {
  return <textarea name={name} value={value} onChange={onChange} className={classNames(pageStyles.fullWidth, styles.textArea)} placeholder={placeholder} />;
};

export default TextArea;
