import { ReactNode } from "react";
import Styles from "@/modules/inputs/textField.module.css";

type inputProps = React.HTMLProps<HTMLInputElement>  & {
    label: string;
    name: string;
    placeholder: string;
}

const TextField: React.FC<inputProps> = (props) => {
    return (
        <div className={Styles.inputContainer}>
            <span className={Styles.inputLabel}>{props.label}:</span>
            <input className={Styles.textField} type={props.type} id={`form_data_${props.name}`} {...props}/>
        </div>
        
    )
}

export default TextField;