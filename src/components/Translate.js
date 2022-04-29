import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'Japanese',
        value: 'ja'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
            </div>
            <Dropdown options={options}
                selected={language}
                onSelectedChange={setLanguage}
                label="Select a language"
            />
            <hr />
            <div className="ui header">Output</div>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;