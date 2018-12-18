import { Photo } from './photo';

export interface User {
    id: number;
    userName: string;
    knowsAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: DataCue;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
