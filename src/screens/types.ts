import {ContentType} from '../types/user-actions';

export enum Screen {
  Home = 'Home',
  Search = 'Search',
  ContentDetail = 'ContentDetail',
  ContentShare = 'ContentShare',
  Notifications = 'Notifications',
  Profile = 'Profile',
}

export interface UserPost {
  id: string;
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
