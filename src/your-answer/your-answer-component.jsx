import "./your-answer.styles.css";

/**
 * Functional Implmentation of AnswerBox Component.
 * @param {*} props
 * @returns
 */
export const AnswerBox = (props) => {
    const { className, placeholder, onChangeHandler } = props;
    return (
        <input
            className={`search-box ${className}`}
            type={className}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
};
