import {ContentType} from '../types/user-actions';

export enum Screen {
  Home = 'Home',
  Search = 'Search',
  Login = 'Login',
  Profile = 'Profile',
}

export interface UserPost {
  user: string;
  userImg: any;
  contentType: ContentType;
  starRating: number;
  contentImg: any;
  title: string;
  genre: string;
  review: string;
  friendCounter: number;
  worldCounter: number;
}
