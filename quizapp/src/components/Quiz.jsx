import React, { useEffect, useState } from 'react';
import questions from '../data/questions';

export default function Quiz({timer, setTimer}) {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [isCorrect, setCurrect] = useState(false);
    const [isAttend, setIsAttend] = useState(false);
    const [currectAnswer, setCurrectAnswer] = useState('');
    const [startTime, setStartTime] = useState(Date.now());
    const [endTime, setEndTime] = useState(null);
    const [elapsed , setElapsed ] = useState(0);

    useEffect(() => {
        if (timer) {
            const interval = setInterval(() => {
                const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
                setElapsed(elapsedTime);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [startTime, timer]);
    

    const handleAnswer = (option) => {
        if (isAttend) return;
        
        if (option === questions[current].answer) {
            setScore(score + 1);
            setCurrect(true);
            setIsAttend(true);
            setCurrectAnswer(questions[current].answer);
        } else {
            setIsAttend(true);
            setCurrectAnswer(questions[current].answer);
        }
    }

    const nextQuestion = () => {
        const next = current + 1;
        setCurrect(false);
        setIsAttend(false);
        if (next < questions.length) {
            setCurrent(next)
        } else {
            setFinished(true);
        }
    }

    return (
        <div className='quiz-container'>
            {finished ? (
                <div className='score-section'>
                    <h2>Your Score: {score} out of {questions.length}</h2>
                </div>
            ) : (
                <>
                <div>
                    <p>⏱ Time: {elapsed} seconds</p>
                    <div className="progress">
                            Question {current + 1} / {questions.length}
                    </div>
                </div>
                    <h2>{questions[current].question}</h2>
                    <ul className="options">
                        {questions[current].options.map((option, i) => (
                            <li
                                key={i}
                                onClick={() => handleAnswer(option)}
                                className={"optin-btn"}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>

                    {isAttend && (
                        isCorrect ? (
                            <p className='correct'>Correct Answer!</p>
                        ) : (
                            <p className='incorrect'>Incorrect Answer! "{currectAnswer}"</p>
                        )
                    )}
                    <button onClick={nextQuestion} className='btn'>Next</button>
                </>
            )}
        </div>
    );
}