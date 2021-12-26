import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '@store/reducers/login.reducer';

export const featureKey = 'login';

export const selectFeature = createFeatureSelector<LoginState>(featureKey);

export const selectShowLoader = createSelector(
  selectFeature,
  (state: LoginState) => state.showLoader
);

export const selectToken = createSelector(
  selectFeature,
  (state: LoginState) => state.token
);

export const selectFormUser = createSelector(
  selectFeature,
  (state: LoginState) => state.formUser
);

export const selectUser = createSelector(
  selectFeature,
  (state: LoginState) => state.user
);

export const selectError = createSelector(
  selectFeature,
  (state: LoginState) => state.error
);

export const selectGoToHome = createSelector(
  selectFeature,
  (state: LoginState) => state.goToHome
);
