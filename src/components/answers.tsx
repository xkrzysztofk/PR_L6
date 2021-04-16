import React from 'react';
import Table from "./table/table"

const Answers = (props: any) => {
    console.log(props.currentAnswers)
    return (
        <Table
            markedAnswer={props.markedAnswer}
            checkAnswer={props.checkAnswer}
            answers={props.currentAnswers}>
        </Table>
    )
};

export default Answers;