// /src/components/Game.js
import React, { useEffect, useState } from 'react';
import WordButton from './WordButton';
import { useLevel } from '../contexts/LevelContext';
import wordsData from '../words.json';
import { mobileView } from '../styles';

const Game = () => {
    const { currentLevel, levelInfo, updateLevelInfo } = useLevel();
    const [words, setWords] = useState([]);
    const [clicked, setClicked] = useState({});
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const levelWords = wordsData[currentLevel] || [];
        setWords(levelWords);

        // Prefill if level info exists
        if ((levelInfo.correct && levelInfo.correct.length > 0) || (levelInfo.incorrect && levelInfo.incorrect.length > 0)) {
            const prefilled = {};
            levelWords.forEach((wordObj, idx) => {
                if (levelInfo.incorrect.includes(wordObj.word)) {
                    prefilled[idx] = 'wrong';
                } else if (levelInfo.correct.includes(wordObj.word)) {
                    prefilled[idx] = wordObj.isNu ? 'found' : 'correct';
                }
            });
            setClicked(prefilled);
            setGameOver(true);
        } else {
            setClicked({});
            setGameOver(false);
        }
    }, [currentLevel, levelInfo]);

    const onWordClick = (wordObj, index) => {
        if (gameOver || clicked[index]) return; // disable if game over or word already clicked

        if (!wordObj.isNu) {
            const newClicked = { ...clicked, [index]: 'correct' };
            setClicked(newClicked);

            const allNonNuClicked = words.every((word, idx) => word.isNu || newClicked[idx] === 'correct');
            if (allNonNuClicked) {
                const nuIndexes = new Set();
                words.forEach((word, idx) => {
                    if (word.isNu === true) {
                        newClicked[idx] = 'found';
                        nuIndexes.add(idx);
                    }
                });

                setClicked(newClicked);

                const correctWords = words
                    .filter((word, idx) => newClicked[idx] === 'correct' || nuIndexes.has(idx))
                    .map((word) => word.word);
                const incorrectWords = words
                    .filter((word, idx) => newClicked[idx] === 'wrong')
                    .map((word) => word.word);
                updateLevelInfo({ correct: correctWords, incorrect: incorrectWords, completed: true });
                setGameOver(true);
            }
        } else {
            const newClicked = { ...clicked, [index]: 'wrong' };
            setClicked(newClicked);

            const correctWords = words
                .filter((word, idx) => clicked[idx] === 'correct')
                .map((word) => word.word);
            const incorrectWords = [...(levelInfo.incorrect || []), wordObj.word];
            updateLevelInfo({ correct: correctWords, incorrect: incorrectWords, completed: true });
            setGameOver(true);
        }
    };

    return (
        <div
            style={{
                ...mobileView,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 0',
            }}
        >
            {words.map((wordObj, idx) => (
                <WordButton
                    key={idx}
                    word={wordObj.word}
                    color={clicked[idx] || 'default'}
                    onClick={() => onWordClick(wordObj, idx)}
                />
            ))}
        </div>
    );
};

export default Game;
