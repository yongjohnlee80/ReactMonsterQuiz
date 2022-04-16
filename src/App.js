import { Component } from "react"; // class approach
import "./App.css";
import quiz from "./quiz-data.json";


import { MonsterProfile } from "./monster-profile/monster-profile-component";
import { QuizQuestion } from "./quiz-question/quiz-question-component";
import { AnswerBox } from "./your-answer/your-answer-component";
import { SubmitButton } from "./submit-button/submit-button-component";

/**
 * Class Approach Application.
 */
class App extends Component {
    constructor() {
        super();

        this.state = {
            answerField: "",
            question: 0,
        };
    }

    onAnswerChange = (event) => {
        const answerFieldString = event.target.value.toLocaleLowerCase();
        this.setState((state, props) => {
            return { answerField: answerFieldString };
        });
    };

    onAnswerSubmit = (event) => {
        const index = this.state.question;
        if (this.state.answerField.match(quiz[index].answer)) {
            this.setState((state, props) => {
                return {
                    answerField: "",
                    question: this.state.question + 1,
                };
            });
        }
    };

    render() {
        let index = this.state.question;
        return (
            <div className="App">
                <h1 className="app-title">React Monster Quiz</h1>
                <div key={index + 1} className="quiz-container">
                    <MonsterProfile id={index + 1} />
                    <QuizQuestion id={index + 1} text={quiz[index].question} />
                </div>
                <AnswerBox
                    className="answer-box"
                    placeholder="Your Answer"
                    onChangeHandler={this.onAnswerChange}
                />
                <SubmitButton onSubmitHandler = {this.onAnswerSubmit}/>
            </div>
        );
    }
}

export default App;
