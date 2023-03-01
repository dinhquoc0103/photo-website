import { createSelector } from "@reduxjs/toolkit";

export const selectAllPhotos = state => state.photos.photos;

export const authSelector = state => state.auth;

