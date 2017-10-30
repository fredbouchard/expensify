import React from 'react';

const EditExpense = (props) =>  (
    <div>
        Editing id of {props.match.params.id && props.match.params.id}
    </div>
);

export default EditExpense;