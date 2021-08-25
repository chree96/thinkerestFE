import {Epic} from 'redux-observable';
import {getUserPosts} from './epic';

const epics: Epic[] = [getUserPosts as Epic];

export default epics;
