import "./quiz-question.styles.css";

/**
 * Functional Implementation.
 * @param {} param0 
 * @returns 
 */
export const QuizQuestion = ({ id, text }) => (
    <div className="question-box">
        <p className={`quiz-question ${id}`}>{text}</p>
    </div>
);
