import react, { useRef, useImperativeHandle } from "react";
import classes from './Input.module.css';
const Input = react.forwardRef((props, ref) => {
    const inputRefs = useRef();
    const activate = () => {
        inputRefs.current.focus();
    }
    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        }
    });
    return (
        <div
            className={`${classes.control} ${props.isvalid === false ? classes.invalid : ''
                }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRefs}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
});
export default Input;