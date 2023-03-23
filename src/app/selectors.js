import { createSelector } from "@reduxjs/toolkit";

export const selectAllPhotos = state => state.photos.photos;

export const filtersSelector = state => state.filters;

export const authSelector = state => state.auth;

export const photosRemaining = createSelector(
    [selectAllPhotos, filtersSelector],
    (photos, filters) => {
        if (filters.categoryId) {
            return photos.filter(photo => photo.categoryId == filters.categoryId);
        }

        return photos;
    }
);

