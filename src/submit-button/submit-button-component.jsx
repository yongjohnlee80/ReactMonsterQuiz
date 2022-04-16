import "./submit-button.styles.css";

/**
 * Functional Implmentation of SubmitButton Component.
 * @param {*} props
 * @returns
 */
export const SubmitButton = (props) => {
    const { onSubmitHandler } = props;
    return (
        <button className="submit-button" onClick={onSubmitHandler}>
        submit
    </button>
    );
};
