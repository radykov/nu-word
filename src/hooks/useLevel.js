import { useContext } from 'react';
import { LevelContext } from './LevelContext'; // assuming LevelContext is exported

export default function useLevel() {
    return useContext(LevelContext);
}
